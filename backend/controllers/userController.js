const Joi = require('@hapi/joi')
const _= require('lodash')
const express = require('express');
const jwt  =  require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('config')

const User = require('../models/user.model')
const {hashPassword}  = require('../utils/hashPassword');
const { isAdmin,authenticated } = require('../utils/middleware/middlewares');

var router = express.Router();


router.get('/',authenticated,isAdmin,async (req,res)=>{
    const users = await User.find().select('_id fname lname email isAdmin createdAt')
    if(users) return res.status(201).send(users)
})

router.get('/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(user => res.status(200).send(_.pick(user,['isAdmin','_id','lname','fname','email','createdAt'])))
    .catch(err => {
        let errObject = {error:{code:400,message:"User not found",fullError:err}}
        res.send(errObject)
    })
})

router.get('/email/:email',async (req,res)=>{

    let errObject = {error:{code:-150,message:"User with this email address was not found"}}
    const user = await User.findOne({email: req.params.email});
    if(user)return res.status(200).send(_.pick(user,['isAdmin','_id','lname','fname','email','createdAt']))
    return res.status(200).send(errObject)
});

router.post('/',async (req,res)=>{
    if(req.body){

        const {error} = validateUser(req.body)
        if(error){
            let errObject = {error:{code:-100,message:error.details[0].message,title:"validation error"}}
            return res.send(errObject)
        } 

        //already registered error object
        let errObject = {error:{code:-120,message:"This email address is already taken"}}
        let user =await User.findOne({email:req.body.email})

        if(user) return res.send(errObject)
        else{
            let newUser  =  new User(req.body)

            const hashed = await hashPassword(newUser.password)
            newUser.password = hashed
            await newUser.save()

            return res.status(201).send(_.pick(newUser,['_id','fname','lname','email','isAdmin','createdAt']))
        }
        
    }

    return res.status(400).send('Plz provide request body')
})

router.put('/',async (req,res)=>{

    const schema = {
        _id:Joi.string().min(10).max(30).required(),
        fname:Joi.string().max(255).min(3).required(),
        lname:Joi.string().max(255).min(3).required(),
        email: Joi.string().max(255).min(3).required().email(),
        password:Joi.string().max(255).min(6).required(),
        isAdmin:Joi.boolean()
    }

   const {error} =  Joi.validate(req.body,schema)
   if(error){
        let errObject = {error:{code:-100,message:error.details[0].message,title:"validation error"}}
        return res.send(errObject)
    } 

    let hashedPswd = await hashPassword(req.body.password)
    req.body.password = hashedPswd

   User.findOneAndUpdate({_id:req.body._id},req.body,{new: true})
    .then(user =>{
         res.send(_.pick(user,['fname','lname','email','_id','isAdmin','createdAt']))
    })
    .catch(err => {
        let errObject = {error:{code:-140,message:"User with this ID was found"}}
        res.status(400).send(errObject)
    });

})

router.delete('/:id',async (req,res)=>{//authenticated,isAdmin,

    User.findByIdAndRemove(req.params.id)
    .then(user => res.send(user))
    .catch(err => {
        let errObject = {error:{code:-140,message:"User with this ID was found"}}
        res.status(400).send(errObject)
    });
})

router.post('/login',async (req,res)=>{
    let schema={
        email:Joi.string().min(5).max(70).required().email(),
        password:Joi.string().min(5).max(70).required()
    }

    const {error} =Joi.validate(req.body,schema)    
    if(error){
        let errObject = {error:{code:-100,title:"validation error",message:error.details[0].message},fullError:error}
        return res.send(errObject)
    } 

    let user  = await User.findOne({email:req.body.email})
    if(!user){
        errObject = {error:{code:-200,message:'Invalid email or password',title:"wrong credentials"}}
        return res.send(errObject)
    }

    const validPassword = await bcrypt.compare(req.body.password,user.password)
    if(!validPassword){
        let errObject = {error:{code:-200,message:'Invalid email or password',title:"wrong credentials"}}
        return res.send(errObject)
    }

    let  token = generateAuthToken(user)
    return res.send({token,user:_.pick(user,['fname','lname','email','_id','isAdmin','createdAt'])})
})

function validateUser(user){
    const schema = {
        fname:Joi.string().max(255).min(3).required(),
        lname:Joi.string().max(255).min(3).required(),
        email: Joi.string().max(255).min(3).required().email(),
        password:Joi.string().max(255).min(6).required(),
        isAdmin:Joi.boolean()
    }
    return Joi.validate(user,schema)
    // Joi.
}

function generateAuthToken(user){
    const token  =jwt.sign(
        {user},
        config.get('jwtPrivateKey')
    )
    return token
}

module.exports = router
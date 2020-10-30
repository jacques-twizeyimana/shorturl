const Joi = require('@hapi/joi')
const _= require('lodash')
const express = require('express');

const Url = require('../models/url.model')
const { isAdmin,authenticated } = require('../utils/middleware/middlewares');

var router = express.Router();

router.get('/',authenticated,isAdmin, async (req,res)=>{
    const urls = await Url.find().sort({createAt:'asc'})
    if(urls) return res.send(urls)
    else return res.status(200).send({error:{code:500,message:"Internal server error"}})
})

router.get('/:id',async (req,res)=>{
    const url = await Url.findOne()
    if(url) return res.send(url)
    else return res.status(200).send({error:{code:400,message:"Url with this ID was not found"}})
})

router.get('/code/:code',async (req,res)=>{
    let errObject = {error:{code:-150,message:"Link with this code was not found"}}
    const url = await Url.findOne({code: req.params.code});
    if(url)return res.status(200).send(url)
    return res.status(200).send(errObject)
});

router.post('/',async (req,res)=>{
    if(!req.body) return res.send({error:{code:-100,message:"Pz provide the request body",title:"validation error"}})
    let {error} = validateUrl(req.body)
    let errObject = {error:{code:-100,title:"validation error"}}
    if(error) return res.send(errObject)

    let url = await Url.findOne({link:req.body.link})
    if(url) return res.send(url)

    let newUrl = new Url(req.body)
    newUrl.code = makeId(8);

    await newUrl.save()
    return res.status(201).send(newUrl)

})

function validateUrl(url){
    let schema = {
        link:Joi.string().uri(),
        user_id:Joi.string()
    }

    return Joi.validate(url,schema)
}

function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUV.WXYZ0123456789abcdefghij$klmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

module.exports = router
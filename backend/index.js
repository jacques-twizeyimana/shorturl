require('./models/database');
const express = require('express')
const app = express()
const bodyparser = require('body-parser');
const config = require('config')
 
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
 
 if(!config.get("jwtPrivateKey")){
    console.log('JWT PRIVATE KEY IS NOT DEFINED')
    process.exit(1)
} 


const userController = require('./controllers/userController')
const urlController = require('./controllers/urlController')

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/users',userController)
app.use('/api/urls',urlController)


const port = process.env.PORT ||  5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
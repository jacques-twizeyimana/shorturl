const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/shorturl-db', {
 useNewUrlParser: true,
 useUnifiedTopology: true
})

.then(() => console.log("Connected to mongodb"))
.catch(err => console.log("Failed to connect to the mongodb"));

require('./user.model')
require('./url.model')
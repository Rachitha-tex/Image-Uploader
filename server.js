const express=require('express')
const app=express()
const routerCompo=require('./server/router/router')
const path=require('path');
const hbs=require('express-handlebars')

//Middleware
app.use(express.json())
app.use('/',routerCompo)

app.use(express.static(path.join(__dirname,'public')))

//connect mongodb
require('./server/database/database')()
//setup view engines
app.set('view engine','hbs')
app.engine('hbs',hbs({
    extname:'hbs',
    defaultView:'default',
    layoutsDir:path.join(__dirname,'views'),
    partialsDir:path.join(__dirname,'views/partials')
}))



const PORT =process.env.PORT||3000
app.listen(3000,console.log(`Server run in ${PORT}`))
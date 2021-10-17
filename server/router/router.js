const express=require('express')
const route=express.Router()
const controller=require('../controller/controller')
const store=require('../middleware/multer')

route.get('/',controller.home)
route.post('/uploadmultiple',store.array('images',12),controller.upload)

module.exports=route
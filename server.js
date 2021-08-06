const express=require('express')
const app=express()
const bodyparser=require('body-parser')

require('./database/config')
app.use(express.json())
app.use('',require('./Routs/Router'))



app.listen(6193,()=>{
    console.log(`SERVER IS RUNNING AT PORT 1234`);
})



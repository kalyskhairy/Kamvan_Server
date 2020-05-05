if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const router = require('./router/index.js')


app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)



app.listen(port, ()=> {console.log(`listening to http://localhost:${port}`)})
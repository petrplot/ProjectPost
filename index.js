const express = require('express')
const router = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/config.json')


const app = express()


const dbUri  = config.DB_URL
const PORT = 5000

app.use(express.json())
app.use(cors())
app.use('/api', router)

const start = async() => {
    try {
        await mongoose.connect(dbUri, { useUnifiedTopology: true,useNewUrlParser: true, },()=>{
            console.log('соединение с базой установленно')
        })
        
        app.listen(PORT,()=>{
         console.log(`сервер запущен на порту:${PORT}`);
    })
    } catch (e) {
        console.log(e);
    }
}

start()


        
  
const express = require('express')
const router = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()


const dbUri  = 'mongodb+srv://petr:1234@cluster0.784l3.mongodb.net/projectPost?retryWrites=true&w=majority'
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


        
  
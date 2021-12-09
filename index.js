import express from 'express'
import connectDb from './connectDb/connectDb.js'
import studentDoc from './models/Student.js'
import student from './route/student.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'
const app = express()
const port = process.env.PORT || 3000
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
const store_info = MongoStore.create({
  mongoUrl:"mongodb://127.0.0.1:27017/school",
  autoRemove: 'native',
  ttl: 1000
})
app.use(session({
    secret: 'fhdfas&*dff8eru9fa00)9uffufa9',
    resave: false,
    saveUninitialized: true,
    store:store_info,
    cookie: { secure: false }
  }))
connectDb("mongodb://127.0.0.1:27017")

app.use('/',student)
// app.get('/set-cookie',(req,res)=>{
//     res.send("cookie set")
// })


app.listen(port,()=>{console.log(`listening at port ${port}`)})
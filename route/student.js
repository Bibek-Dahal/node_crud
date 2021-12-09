import express from 'express'
const router = express.Router()
import StudentController from '../controllers/studentController.js'

router.get('/student',StudentController.allStudent)
router.post('/student',StudentController.createStudent)
router.get('/student/update/:id',StudentController.updateStudentGet)
router.post('/student/update/:id',StudentController.updateStudentPost)
router.post('/student/delete/:id',StudentController.deleteStudent)


// router.get('/student/set-session',(req,res)=>{
//     req.session.user = {name:"Bibek",age:12,city:"Banepa"}
//     res.send('session set')
// })
// router.get('/student/get-session',(req,res)=>{
//     const data = req.session
//     console.log("data",data)
//     res.send(data.user)
// })
// router.get('/student/destroy-session',(req,res)=>{
//     req.session.destroy(()=>{
//         console.log("destroyed")
//     })
//     res.send("session destroyed")
// })



export default router
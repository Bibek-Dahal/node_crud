import studentDoc from '../models/Student.js'
class StudentController{
    static allStudent = async (req,res)=>{
        try{
            const allStu = await studentDoc.find()
            //console.log(allStu)
            res.render('index.ejs',{name:"bibek",student:allStu})
        }catch(error){
           console.log(error)
        }
    }

    static createStudent = async (req,res)=>{
        const {name,roll,city} = req.body
        try{
            const doc = new studentDoc({name:name,roll:roll,city:city})
            const result = await doc.save()
            console.log(result)
            res.redirect('/student')
        }catch(error){
            console.log(error)
        }
    }

    static updateStudentGet = async (req,res)=>{
        console.log(req.params)
        const stu = await studentDoc.findById(req.params.id)
        console.log("student",stu)
        console.log(req.params.id)
        res.render('update.ejs',{name:"update student",student:stu})
    }

    static updateStudentPost = async (req,res)=>{
        try{
            console.log(req.params)
            const stu = await studentDoc.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/student')
        }catch(error){
            console.log(error)
        }
    }

    static deleteStudent = async (req,res)=>{
        try{
            // console.log(req.params)
            // console.log(req.params.id)
            const result = await studentDoc.findByIdAndDelete(req.params.id)
            console.log("stu deleted")
            res.redirect('/student') 
        }catch(error){
            console.log(error)
        } 
    }
}

export default StudentController
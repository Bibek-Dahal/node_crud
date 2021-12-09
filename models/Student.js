import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    name:{type:String,required:true},
    roll:{type:Number,required:true},
    city:{type:String,required:true}
})

const studentDoc = mongoose.model('student',studentSchema)

export default studentDoc
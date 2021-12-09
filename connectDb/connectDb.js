import mongoose from 'mongoose'

const connectDb = async (url)=>{
    try{
        const db_opt = {
            dbName:"school"
        }
        await mongoose.connect(url,db_opt)
        console.log("connected successfully")
    }catch(error){
        clg(error)
    }
}
export default connectDb
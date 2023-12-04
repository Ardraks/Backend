const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ardraks:ardraks@cluster0.irlmcdy.mongodb.net/db1?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(()=>{console.log(err)});

let sc=mongoose.Schema;
const studschema= new sc({
    Admno:String,
    Sname:String,
    Age:Number,
    status:String
});
var studmodel=mongoose.model("Student",studschema)
module.exports=studmodel;
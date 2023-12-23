const mongoose=require('mongoose');

const dischargeSchema=new mongoose.Schema({
  
name: String,
        age:String,
        gender:String,
        //contactno:String,
        patientId:String,
       admissionDate:Date,
        dischargeDate: String,
        
       
        ward:[{
            type:String,
            require:true
        }],
        
          bedNumber:[{
            type:String,
        }],
        
          medicalAcuity:[{
            type:String,
            require:true
        
        }],
        dischargeReasons:
        [{ type:String,
           require:true}],

        
})
const Discharged=mongoose.model('Discharge',dischargeSchema);
module.exports=Discharged;
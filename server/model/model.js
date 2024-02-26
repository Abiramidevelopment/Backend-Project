const mongoose =require('mongoose');

const mongodbdetails = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    thirdname:{
        type:String,
        require:true
    },
    fourthdname:{
        type:String,
        require:true
    },
    fifthname:{
        type:String,
        require:true
    }, 
    sixthname:{
        type:String,
        require:true
    }, 
    seventhname:{
        type:String,
        require:true
    }
})

const  mongodbdetailsexport = mongoose.model("AgainCollection",mongodbdetails);

module.exports = mongodbdetailsexport;
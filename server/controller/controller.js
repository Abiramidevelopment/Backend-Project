const modelfilecalling = require('../model/model');

exports.create =(req,res)=>{
    const datasaving = new modelfilecalling({
        firstname:req.body.firstname,
        email:req.body.email,
        thirdname:req.body.thirdname,
        fourthdname:req.body.fourthdname,
        fifthname:req.body.fifthname,
        sixthname:req.body.sixthname,
        seventhname:req.body.seventhname
        })
    datasaving.save().then((dddd)=>{
        console.log(dddd);
        res.redirect('/thankyou')
    })
}
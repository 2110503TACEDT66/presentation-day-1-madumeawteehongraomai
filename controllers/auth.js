const User =require('../models/User');

//@desc     Register user
//@route    post /api/v1/auth/register
//@access   Public
exports.register=async (req,res,next)=>{
    try{
        const {name, tel, email, password, role}=req.body;

        //Create user
        const user=await User.create({
            name,
            tel,
            email,
            password,
            role
        });
        res.status(200).json({success:true});

        //Create token
        const token=user.getSignedJwtToken();
        res.status(200).json({success:true,token});
    } catch(err){
        res.status(400).json({success:true});
        res.status(400).json({success:false});
        console.log(err.stack);
    }
}
const User = require("../model/user.model")


//signup controller
exports.signupHandler = async (req,res)=>{
    try{
        const { email, password} = req.body;
        if( !email || !password){
          return res.status(400).json({
            success: false,
            message:"all field to be filled"
          })
        }
        const findPerson = await User.findOne({email});
        if(findPerson){
            return res.status(400).json({
                success:false,
                message:"User is already exist Login Now"
            })
        }
        const newUser = new User({ email, password });
        await newUser.save();

        return res.status(200).json({
            success:true,
            message:"User Signin successfully",
            user:newUser
        })


    }
    catch(error){
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}


//Login controller

exports.loginHandler = async (req,res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                success: false,
                message:"fill all the field",
            })
        }
        
        //find person present in db or not
        const person = await User.findOne({email:email});
        if(!person){
            return res.status(404).json({
                success: false,
                message: "user not register go to signin page"
            })
        }

        //password matching
        if(password === person.password){
            return res.status(200).json({
                success: true,
                message: "user login successfully",
                data: person
    
            })
        }

       else{
        return res.status(404).json({
            success: false,
            message:"password does not match try again"
        })
       }
    }
    catch(error){
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

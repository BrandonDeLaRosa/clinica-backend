const AuthServices = require("../services/auth.service");
const DoctorServices = require("../services/doctor.services");
const bcrypt = require('bcrypt')


const doctorLogin = async (req,res,next) => {
    try {
        const {username,password} = req.body;
        
        const doctor = await DoctorServices.getDoctor(username)

        if(!doctor){
            return res.status(400).json(error)
        }

        const isValid = await bcrypt.compare(password, doctor.password)
        if(!isValid){
            return res.status(400).json(error)
        }

        // res.json({
        //     username: doctor.username,
        //     password: doctor.password
        // })

        // const token = AuthServices.genToken({id,username,lastname,firstname,email})

        // res.json({
        //     id,firstname,lastname,username,email, token
        // })

        const {id,name,lastname,email} = doctor
        const token = AuthServices.genToken({id,username,lastname,name,email})
        console.log(token);
        
        res.json({
            id,name,lastname,username,email, token
        })

    } catch (error) {
        res.status(400).json(error)
    }
}



module.exports = doctorLogin

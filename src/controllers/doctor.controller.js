const DoctorServices = require('../services/doctor.services')

const getDoctors = async (req,res) => {
    try {
        const doctors = await DoctorServices.getAllDoctors();
        res.json(doctors)
    } catch (error) {
        res.status(400).json(error) 
    }
}

const getDoctor = async (req,res) => {
    try {
        const {id} = req.params;
        const result = await DoctorServices.getOne(id);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}


const createDoctor = async (req,res) => {
    try {
        const newDoctor = req.body;
        const result = await DoctorServices.createDoctor(newDoctor)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const userInfo = req.body;
        const userData = {id,userInfo}
        await DoctorServices.updateUserData(userData)
        res.status(204).send()

    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports= {
    createDoctor,
    updateUser,
    getDoctors,
    getDoctor
}
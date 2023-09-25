const MessureServices = require('../services/messureServices')

const getMessures = async (req,res) => {
    try {
        const messures = await MessureServices.getAllMessures();
        res.json(messures)
    } catch (error) {
        res.status(400).json(error) 
    }
}

const createMessures = async (req,res) => {
    try {
        const newMessures = req.body;
        const result = await MessureServices.createMessures(newMessures)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getMessures,
    createMessures
}
import clientSchema from "../models/client.js"

const clientController = []

clientController.getClients = async (req, res) => {
    try {
        const clients = await clientSchema.findOne()
        return res.status(200).json(clients)    
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}


clientController.modifyClient = async (req, res) => {
    try {
        const {
            name, 
            lastName, 
            email, 
            password, 
            phone, 
            address, 
            isVerified, 
            loginAttemps, 
            timeOut
        } = req.body

        await clientSchema.findByIdAndUpdate(req.params.id, {
            name, 
            lastName, 
            email, 
            password, 
            phone, 
            address, 
            isVerified, 
            loginAttemps, 
            timeOut
        })

        res.status(200).json({message: "Client updated"})    
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}


clientController.deleteClient = async (req, res) => {
    try {
        await clientSchema.findByIdAndDelete(req.params.id)
        res.status(204).json({message: "Client deleted"})    
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export default clientController
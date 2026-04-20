import packageSchema from "../models/packages.js"

const packageController = {}

packageController.getPackages = async (req, res) => {
    try {
        const packages = await packageSchema.find()
        return res.json(packages)    
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error"})
    }
}

export default packageController
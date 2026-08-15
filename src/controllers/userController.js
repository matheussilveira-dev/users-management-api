import userServices from "../services/userServices.js";

class userController{

    async getAll(req, res, next){
        try {
            const users = await userServices.getAll()
            res.json(users)
        } catch (error) {
            next(error)
        }
    }
}

export default new userController()
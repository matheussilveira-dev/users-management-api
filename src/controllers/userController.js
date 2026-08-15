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

    async getByID(req, res, next){
        try {
            const {id} = req.params

            const user = await userServices.getByID(id)

            res.json(user)
        } catch (error) {
            next(error)
        }
    }
}

export default new userController()
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

    async getById(req, res, next){
        try {
            const {id} = req.params

            const user = await userServices.getById(id)
            res.json(user)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            await userServices.create(req.body)

            res.status(201).json({
                message: "Usuário cadastrado com sucesso!"
            })
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next){
        try {
            
            const {id} = req.params

            await userServices.update(id, req.body)

            res.status(201).json({
                message: "Usuário atualizado com sucesso!"
            })

        } catch (error) {
            next(error)
        }
    }

    async deleteUser(req, res, next){
        try {

        const {id} = req.params
        
        const result = await userServices.deleteUser(id)

        res.status(201).json({
            message: "Usuário deletado com sucesso!"
        })

        } catch (error) {
            next(error)
        }
        
    }
}

export default new userController()
import userRepository from "../repositories/userRepository.js";
import User from "../models/User.js";

class userServices{

    async getAll(){
        return userRepository.getAll()
    }

    async getById(id){
        return userRepository.getById(id)
    }

    async create(data){
        const user = new User(data)

        if(!user.name){
            throw new Error("Nome do usuário obrigatório!")
        }

        if(!user.email.includes("@")){
            throw new Error("Email inválido!")
        }

        return userRepository.create(user)
    }

    async update(id, data){
        const user = new User(data)

        if()

        if(!user.email.includes("@")){
            throw new Error("Email inválido!")
        }
    }
}

export default new userServices()
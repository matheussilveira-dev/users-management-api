import userRepository from "../repositories/userRepository.js";

class userServices{

    async getAll(){
        return userRepository.getAll()
    }

    async getByID(id){
        return userRepository.getByID(id)
    }
}

export default new userServices()
import userRepository from "../repositories/userRepository.js";

class userServices{

    async getAll(){
        return userRepository.getAll()
    }
}

export default new userServices()
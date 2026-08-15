import pool from "../database/connection.js";

class userRepository {

    async getAll(){
        const [rows] = await pool.query("SELECT * FROM users")
        return rows
    }

    async getByID(id){
        const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id])
        return rows
    }
}

export default new userRepository()


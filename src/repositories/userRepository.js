import pool from "../database/connection.js";
import User from "../models/User.js";

class userRepository {

    async getAll(){
        const [rows] = await pool.query("SELECT * FROM users")
        return rows
    }

    async getById(id){
        const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id])
        return rows[0]
    }

    async create(user){
        const {
            name,
            email,
            password
        } = user

        const [result] = await pool.query("INSERT INTO users(name, email, password) VALUES (?, ?, ?)", [name, email, password])
        
        return result.insertId
    }

    async update(id, user){
        const {
            name,
            email,
            password
        } = user

        const [result] = await pool.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email, password, id])

        
        return result

    }

    async deleteUser(id){
        const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id])

        return result
    }
}

export default new userRepository()


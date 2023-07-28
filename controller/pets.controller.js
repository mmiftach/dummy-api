const pool = require("../database/index")
const petsController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from pets")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from pets where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const { name, phone, address, pet,  color} = req.body
            console.log(color)
            const sql = "insert into pets (name, phone, address, pet, color_pet) values (?, ?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [name, phone, address, pet, color])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    update: async (req, res) => {
        try {
            const { name, phone, address, pet, color } = req.body
            const { id } = req.params
            const sql = "update pets set name = ?, phone = ?, address = ? , pet = ?, color_pet = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [name, phone, address, pet, color, id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }, 
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("delete from pets where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }

}

module.exports = petsController
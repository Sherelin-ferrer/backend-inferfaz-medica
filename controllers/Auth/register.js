import User from "../../models/User.js"
import bcrypt from "bcrypt"

export const register = async (req, res) => {

    try {

        const { name, email, password } = req.body

        const existUser = await User.findOne({ email })

        if (existUser) {
            return res.status(400).json({
                message: "El usuario ya existe"
            })
        }

        const hash = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hash
        })

        res.status(201).json({
            message: "Usuario registrado correctamente",
            user
        })

    } catch (error) {

        res.status(500).json({
            message: "Error al registrar usuario",
            error: error.message
        })

    }

}
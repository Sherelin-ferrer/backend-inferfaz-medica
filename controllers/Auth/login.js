import User from "../../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: "Usuario no encontrado"
            })
        }

        const compare = await bcrypt.compare(password, user.password)

        if (!compare) {
            return res.status(400).json({
                message: "Contraseña incorrecta"
            })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || "secretkey",
            { expiresIn: "1d" }
        )

        res.json({
            message: "Login exitoso",
            token,
            user
        })

    } catch (error) {

        res.status(500).json({
            message: "Error en el login",
            error: error.message
        })

    }

}
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Por favor ingrese un nombre"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Por favor ingrese un correo electrónico"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Por favor ingrese una contraseña"],
        trim: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

export const User = mongoose.models.users || mongoose.model("users", userSchema);

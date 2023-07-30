import { connect } from "../../../../dbConfig/dbConfig";
import { User } from "../../../../models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import toast from 'react-hot-toast';

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    // Validar que el usuario existe
    const user = await User.findOne({ email });
    if (user) {
      return new NextResponse(400, {
          body: JSON.stringify({error: "El usuario ya existe" }),
        });
    }
    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const NewUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Guardar usuario
    const savedUser = await NewUser.save();
    console.log(savedUser);

    return new NextResponse(200, {
        body: JSON.stringify({
      message: "Usuario creado exitosamente",
      success: true,
      savedUser,
    }),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, 500);
  }
}

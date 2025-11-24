"use server";

import { dbConnect } from "./db";
import User from "./models/User";

export const crateUser = async (formData: FormData) => {
    await dbConnect();
    await new Promise(resolve =>setTimeout(resolve, 1000))
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        console.log("Name:", name);
        console.log("Email:", email);
        try {
            const newUser = new User({name, email});
            await newUser.save();
            return{succes:true, message: "User created Succesfully", user:JSON.parse(JSON.stringify(newUser))}
        } catch (error) {
            console.error("Error Creating User", error);
            return {succes:false, message: "Error creating User ", error: error instanceof Error ? error.message: "Unknown error"}
        }
}
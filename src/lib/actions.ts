"use server";

import { dbConnect } from "./db";
import User from "./models/User";

export const createUser = async (formData: FormData) => {
    await dbConnect();
    await new Promise(resolve => setTimeout(resolve, 1000));

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
        const newUser = new User({ name, email });
        await newUser.save();

        return { 
            success: true, 
            message: "User created successfully", 
            user: JSON.parse(JSON.stringify(newUser)) 
        };

    } catch (error) {
        return { 
            success: false, 
            message: "Error creating user", 
            error: error instanceof Error ? error.message : "Unknown error" 
        };
    }
};

 interface UserFormState {
    message: string;
    success: boolean;
}

export const createUserWithState = async (
    prevState: UserFormState,
    formData: FormData
) => {

    await dbConnect();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    if (!name || !email) {
        return {
            success: false,
            message: "Name and email are required"
        };
    }

    try {
        const user = new User({ name, email });
        await user.save();

        return {
            success: true,  // ✔ Same spelling everywhere
            message: "User created successfully!"
        };

    } catch (error: any) {
        return {
            success: false,
            message: "Error creating user: " + error.message
        };
    }
};

import {z} from "zod"
import { db } from "@/utils/utils";
import bcrypt from "bcryptjs";


const registerSchema = z.object({
    email: z.string().email(),
    username: z.string().min(4),  
    password: z.string().min(8),
    confirmPassword: z.string().min(6)
});
export async function POST(req: Request) {
    const body = await req.json();
    try {
        const data = registerSchema.parse(body);
        if(data.password !== data.confirmPassword) throw new Error('Passwords do not match');
        const user = await db.user.findUnique({where: {email: data.email}});

        if(user) throw new Error('User already exists'); 
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = await db.user.create({
            data: {
                email: data.email,
                username: data.username,
                password: hashedPassword,
            },
        });

        return new Response(JSON.stringify({user: newUser, message: "User created successfuly!"}), {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), {
            status: 400,
            headers: {
                "content-type": "application/json",
            },
        });
    }
}
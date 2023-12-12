"use client"


import { useSession } from "@/components/SessionContext";
import { redirect } from "next/navigation"

export default function ProfilePage() {
    const { user } = useSession();
    
    return (
        <div className="text-secondary">Hello, {user.username}</div>
    );
};
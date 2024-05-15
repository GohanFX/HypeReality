import { LoginNavbar } from "@/components/Navbars/LoginNavbar"
export default function LoginLayout  ({children}: {children: React.ReactNode}) {
    return (
        <div className="bg-gradient-to-b from-slate-200 to-100% to-gray-200 overflow-x-hidden h-full">
            <LoginNavbar />
            {children}
        </div>
    )
}
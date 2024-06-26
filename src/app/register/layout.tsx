import { LoginNavbar } from "@/components/Navbars/LoginNavbar";
export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-b from-slate-200 to-100% to-gray-200 overflow-x-hidden">
      <LoginNavbar />
      {children}
    </div>
  );
}

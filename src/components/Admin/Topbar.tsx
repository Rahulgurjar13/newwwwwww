"use client"
import { Bell, Mail, LogOut } from "lucide-react";

export default function Topbar() {


    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f172a] w-[80vw] rounded-2xl ml-67 shadow-sm shadow-indigo-300 hover:shadow-md hover:shadow-indigo-400 cursor-pointer transition fixed z-10">
            <input
                type="text"
                placeholder="Search..."
                className="bg-white/10 px-4 py-2 rounded-lg outline-none text-white"
            />

            <div className="flex items-center gap-4 text-white">

                <Mail />
                <Bell />
                <div className="flex items-center gap-2">
                    <img
                        src="https://i.pravatar.cc/40"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Admin</span>
                </div>
            </div>
        </header>
    );
}

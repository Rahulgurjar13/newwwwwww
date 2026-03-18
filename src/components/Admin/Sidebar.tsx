"use client"

import { supabase } from "@/lib/supabase/SupabaseConfig";
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    Package,
    LogOut,
    LogOutIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const menu = [
    { name: "Dashboard", icon: LayoutDashboard, slug: "/admin-x9AqP7mK2" },
    { name: "Blog Editor", icon: FileText, slug: "/admin-x9AqP7mK2/blogs" },
    { name: "Product Editor", icon: Package, slug: "/admin-x9AqP7mK2/products" },
    { name: "Temple Editor", icon: Package, slug: "/admin-x9AqP7mK2/temples" },
    { name: "User Management", icon: Users, slug: "/admin-x9AqP7mK2" },
    { name: "Settings Panel", icon: Settings, slug: "/admin-x9AqP7mK2" },
   
];

export default function Sidebar() {

    const [active , setActive] = useState("Dashboard");
    const router = useRouter();

    const handleSideButtonClick = (item : string) => { 
        setActive(item);
    }
    
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/admin-login");
    }

    return (
        <aside className="w-64 h-[97vh] bg-[#0f172a] border-r border-white/10 p-4 rounded-3xl shadow-sm shadow-indigo-300 hover:shadow-xl hover:shadow-indigo-400 cursor-pointer transition fixed">
           <div className="flex gap-1 bg-white rounded-full mb-4">
            <img src="/images/Admin/Experience_my_India.webp" className="h-[50px]"/>
            
           </div>
            <nav className="space-y-4">
                {menu.map((item) => (
                    <Link href={item.slug}  key={item.name} >
                        <button
                           
                            className={`w-full flex items-center gap-3 px-4 rounded-lg hover:bg-white/10 cursor-pointer text-white text-md py-3 mb-2 ${active == item.name ? "bg-white/10" : ""}`}

                            onClick={() => {handleSideButtonClick(item.name)}}
                        >
                            <item.icon size={18} />
                            <span>{item.name}</span>
                        </button>
                    </Link>
                ))}

                <button
                           
                    className={`w-full flex items-center gap-3 px-4 rounded-lg hover:bg-white/10 cursor-pointer text-white text-md py-3 mb-2}`}

                    onClick={() => {handleLogout}}
                >
                    <LogOutIcon size={18} />
                    <span>LogOut</span>
                </button>
            </nav>
        </aside>
    );
}

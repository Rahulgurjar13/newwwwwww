import DashboardLayout from "@/components/Admin/DashboardLayout";
import { createClient } from "@/lib/supabase/supabase-server";
import { redirect } from "next/navigation"
import {Toaster} from "react-hot-toast";

export default  async function RootLayout({ children }: { children: React.ReactNode }) {
    const supabase = createClient();
    
     const { data: { user } } = await (await supabase).auth.getUser();

     if(!user){
        redirect('/admin-login')
     }

    return (
        <div className="p-4 bg-[#040421]">
            <DashboardLayout>{children}</DashboardLayout>
            <Toaster/>
        </div>
    )
}
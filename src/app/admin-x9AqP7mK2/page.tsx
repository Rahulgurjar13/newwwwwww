'use client'
import CurrentProductTable from "@/components/Admin/CurrentProductTable";
import CurrentUserTable from "@/components/Admin/CurrentUserTable";
import StatsCard from "@/components/Admin/StatsCard";
import TopBlogTable from "@/components/Admin/TopBlog";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import HomePageEditor from "@/components/editor/HomePageEditor";
// import BlogTable from "@/components/tables/BlogTable";
// import UserTable from "@/components/tables/UserTable";
// import ProductTable from "@/components/tables/ProductTable";



export default function Dashboard() {

    const router = useRouter();
    const [loading , setLoading] = useState(false);
    
   useEffect(() => {
    const checkAdmin = async () => {

      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.log(error);
        toast.error("Session error");
        router.replace('/admin-login');
        return;
      }

      const session = data.session;

      if (!session) {
        toast.error("Please login first");
        router.replace('/admin-login');
        return;
      }

      if (session.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        toast.error("Unauthorized access");
        await supabase.auth.signOut();
        router.replace('/');
        return;
      }

      setLoading(false);
    };

    checkAdmin();

  }, [router]);


  // useEffect(()=>{
  //   getBlog
  // })

    return (
        <>
            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
                <StatsCard title="Users" value="12,450" subtitle="Active" />
                <StatsCard title="Posts" value="320" subtitle="Published" />
                <StatsCard title="Products" value="185" subtitle="In Stock" />
                <StatsCard title="Todays Blogs" value="5" subtitle="This Month" />
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-2 gap-6">

                <div>

                    {/* <HomePageEditor /> */}

                </div>

                <TopBlogTable />

            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 gap-6">
                <CurrentProductTable />
                <CurrentUserTable />
            </div>
        </>
    );
}

import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <Topbar />
                <main className="ml-64 pt-26 h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar p-6 space-y-6">{children}</main>
            </div>
        </div>
    )
}
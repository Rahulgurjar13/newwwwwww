"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase/SupabaseConfig";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid admin credentials");
      setLoading(false);
      return;
    }

     if (data.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        await supabase.auth.signOut();
        setError("Unauthorized access");
        setLoading(false);
        return;
    }

    router.push("/admin-x9AqP7mK2");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-orange-100 transition-all duration-500 hover:shadow-orange-200">

          {/* Top Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg">
              <Lock className="text-white w-6 h-6" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold text-gray-900 text-center">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-500 text-center mt-1">
            Mathura Vrindavan Tour Access
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="mt-8 space-y-5">

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-orange-500 w-4 h-4" />
              <input
                type="email"
                required
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-orange-500 w-4 h-4" />
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600 font-medium text-center animate-pulse">
                {error}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Secure Login"}
            </button>
          </form>
        </div>
    </div>

  );
}

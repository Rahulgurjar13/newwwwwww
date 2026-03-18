export default function StatsCard({
    title,
    value,
    subtitle,
}: {
    title: string;
    value: string;
    subtitle: string;
}) {
    return (
        <div className="bg-[#0d0d3b] rounded-xl p-5 backdrop-blur border border-white/10 text-white cursor-pointer hover:shadow-lg hover:shadow-indigo-400 hover:scale-105 transition">
            <h4 className="text-sm opacity-70">{title}</h4>
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className="text-xs opacity-60">{subtitle}</p>
        </div>
    );
}

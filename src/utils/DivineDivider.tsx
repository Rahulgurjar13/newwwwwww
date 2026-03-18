export default function DivineDivider() {
  return (
    <div className="relative flex items-center justify-center py-6 overflow-hidden">

      {/* Glow Line */}
      <div className="relative w-2/3 h-[4px] bg-gradient-to-r from-transparent via-orange-400 to-transparent divine-glow"></div>

      {/* Spark Particles */}
      <span className="spark spark-1"></span>
      <span className="spark spark-2"></span>
      <span className="spark spark-3"></span>
      <span className="spark spark-4"></span>

    </div>
  );
}

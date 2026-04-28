export default function SkillCard({ Icon, label, tone = 'text-cyan-200' }) {
  return (
    <article className="glass-card liquid-hover group flex min-h-28 flex-col items-center justify-center gap-3 p-4 text-center">
      <Icon className={`${tone} text-3xl transition duration-300 group-hover:scale-105`} />
      <p className="text-sm font-semibold tracking-wide text-slate-200">{label}</p>
    </article>
  );
}
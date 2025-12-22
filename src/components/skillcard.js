export default function SkillCard({ Icon, label }) {
  const iconStyles = {
    HTML: "text-orange-500",
    CSS: "text-blue-600",
    JavaScript: "text-yellow-500",
    React: "text-cyan-400",
    Nextjs: "text-foreground",
    MongoDB: "text-green-600",
    Firebase: "text-yellow-500",
    TailwindCSS: "text-cyan-400",
    GitHub: "text-foreground",
    Bootstrap: "text-indigo-600",
    Postman: "text-orange-500",
    Express: "text-foreground",
    NodeJs: "text-green-600",
    Pinterest: "text-red-500",
    Teamwork: "text-green-400",
    Leadership: "text-blue-500",
    QuickLearner: "text-purple-500",
  };



  return (
    <div className="flex flex-col items-center group">
      <Icon className={`${iconStyles[label] || 'text-primary'} text-4xl mb-2 transition-transform group-hover:scale-110`} />
      <p className="text-muted-foreground text-xl font-semibold group-hover:text-foreground transition-colors">{label}</p>
    </div>
  );
}
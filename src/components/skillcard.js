export default function SkillCard({ Icon, label }) {
    const iconStyles = {
        HTML: "text-orange-500",
        CSS: "text-blue-600",
        JavaScript: "text-yellow-500",
        React: "text-cyan-400",
        Nextjs: "text-black",
        MongoDB: "text-green-600",
        Firebase: "text-yellow-500",
        TailwindCSS: "text-cyan-400",
        GitHub: "text-gray-900",
        Bootstrap: "text-indigo-600",
        Postman: "text-orange-500",
        Express: "text-gray-900",
        NodeJs: "text-green-600",
        Pinterest: "text-red-500",
        Teamwork: "text-green-400",
        Leadership: "text-blue-500",
        QuickLearner: "text-purple-500",
      };
    


    return (
      <div className="flex flex-col items-center">
         <Icon className={`${iconStyles[label] || 'text-blue-400'} text-4xl mb-2`} />
        <p className="text-gray-400 text-xl font-semibold">{label}</p>
      </div>
    );
  }
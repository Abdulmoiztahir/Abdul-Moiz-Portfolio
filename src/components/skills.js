import SkillCard from "./skillcard";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const coreSkills = [
    { Icon: FaHtml5, label: "HTML", tone: "text-orange-300" },
    { Icon: FaCss3, label: "CSS", tone: "text-blue-300" },
    { Icon: IoLogoJavascript, label: "JavaScript", tone: "text-amber-200" },
    { Icon: FaReact, label: "React.js", tone: "text-cyan-200" },
    { Icon: SiNextdotjs, label: "Next.js", tone: "text-slate-100" },
    { Icon: SiMongodb, label: "MongoDB", tone: "text-emerald-300" },
    { Icon: IoLogoFirebase, label: "Firebase", tone: "text-yellow-200" },
    { Icon: RiTailwindCssFill, label: "Tailwind CSS", tone: "text-cyan-200" },
    { Icon: IoLogoNodejs, label: "Node.js", tone: "text-green-300" },
    { Icon: SiExpress, label: "Express.js", tone: "text-slate-100" },
    { Icon: FaBootstrap, label: "Bootstrap", tone: "text-indigo-300" },
    { Icon: SiPostman, label: "Postman", tone: "text-orange-300" },
    { Icon: FaGithub, label: "GitHub", tone: "text-slate-200" },
];

const softSkills = [
    { Icon: FaPeopleCarry, label: "Teamwork", tone: "text-cyan-200" },
    { Icon: AiOutlineTeam, label: "Leadership", tone: "text-blue-200" },
    { Icon: FaUserClock, label: "Quick Learner", tone: "text-violet-200" },
];

export default function Skills() {
    return (
        <section id="skills" className="section-space">
            <div className="container-shell">
                <span className="section-kicker">Capabilities</span>
                <h2 className="section-title font-[family-name:var(--font-sora)]">Production-ready skills for modern web teams.</h2>

                <div className="mt-10 space-y-6">
                    <article className="glass-card p-6 md:p-8">
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Core Stack</p>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                            {coreSkills.map((skill) => (
                                <SkillCard key={skill.label} Icon={skill.Icon} label={skill.label} tone={skill.tone} />
                            ))}
                        </div>
                    </article>

                    <article className="glass-card p-6 md:p-8">
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Work Style</p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {softSkills.map((skill) => (
                                <SkillCard key={skill.label} Icon={skill.Icon} label={skill.label} tone={skill.tone} />
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
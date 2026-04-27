/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  ChevronDown,
  Briefcase, 
  Code2, 
  Terminal, 
  GraduationCap,
  Sparkles,
  Phone,
  Server,
  Layers,
  Database,
  Unplug
} from "lucide-react";
import { resumeData } from "./data";

const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold">{title}</h2>
  </div>
);

export default function App() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation - Professional */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              AK
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              {resumeData.name}
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-brand-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-primary transition-colors">Projects</a>
          </div>
          <a href={`mailto:${resumeData.contact.email}`} className="bg-brand-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all">
            Contact Me
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-24">
        {/* Hero Section */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-[1fr_450px] gap-16 items-start">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
                {resumeData.title}
              </h1>
              <p className="text-xl text-slate-500 mb-8 max-w-2xl leading-relaxed">
                {resumeData.tagline} {resumeData.summary}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-12">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 text-slate-600 hover:text-brand-primary font-medium transition-colors">
                  <Mail size={18} /> {resumeData.contact.email}
                </a>
                <span className="flex items-center gap-2 text-slate-400 font-medium whitespace-nowrap">
                  <MapPin size={18} /> {resumeData.contact.location}
                </span>
                <a href={`https://${resumeData.contact.linkedin}`} className="flex items-center gap-2 text-slate-600 hover:text-brand-primary font-medium transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={`https://${resumeData.contact.github}`} className="flex items-center gap-2 text-slate-600 hover:text-brand-primary font-medium transition-colors">
                  <Github size={18} /> GitHub
                </a>
              </div>

              <div className="flex items-center gap-4 p-4 professional-card bg-slate-50/50">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Status</p>
                  <p className="text-sm font-semibold text-slate-700">Available for lead roles within {resumeData.contact.availability}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="professional-card p-8 bg-slate-900 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 blur-3xl rounded-full" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <Terminal size={14} className="text-brand-primary" /> Active Terminal
                </h3>
                <div className="font-mono text-sm space-y-4">
                  <p className="text-brand-primary">$ <span className="text-slate-300">npm list core-skills</span></p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {resumeData.skills[0].items.map(s => <span key={s} className="text-slate-400">├── {s}</span>)}
                    {resumeData.skills[1].items.map(s => <span key={s} className="text-slate-400">├── {s}</span>)}
                  </div>
                  <p className="text-brand-primary">$ <span className="text-slate-300 transform group-hover:translate-x-1 transition-transform inline-block">_</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-24"
        >
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">Core Proficiencies</h3>
            <h2 className="text-4xl font-bold text-slate-900">The Technical Arsenal</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.skills.map((skill, idx) => {
              const Icon = [Layers, Server, Terminal, Database, Unplug, Sparkles][idx % 6];
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="professional-card p-6 group hover:border-brand-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors mb-6">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-2.5 py-1 bg-surface-100 text-slate-600 text-[10px] font-bold rounded-md uppercase tracking-wider group-hover:bg-brand-primary/5 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-24"
        >
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">Professional Path</h3>
            <h2 className="text-4xl font-bold text-slate-900">Career Milestones</h2>
          </div>
          <div className="relative border-l-2 border-slate-100 ml-4 pl-12 space-y-16">
            {resumeData.experience.map((exp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative timeline-dot">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-brand-primary font-bold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full">{exp.period}</span>
                    <p className="text-xs text-slate-400 mt-1 font-medium">{exp.location}</p>
                  </div>
                </div>
                <div className="professional-card p-6 bg-slate-50/30">
                  <ul className="space-y-4">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex gap-4 text-slate-600 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-24"
        >
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">Case Studies</h3>
            <h2 className="text-4xl font-bold text-slate-900">Featured Architecture</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {resumeData.projects.map((project, idx) => {
              const isExpanded = expandedProject === idx;
              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants} 
                  className={`professional-card group flex flex-col transition-all duration-300 ${isExpanded ? 'ring-2 ring-brand-primary/20 shadow-xl' : 'hover:shadow-lg'}`}
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-900/10">
                        <Code2 size={24} />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-widest">
                        {project.client || project.highlight}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <button 
                      onClick={() => setExpandedProject(isExpanded ? null : idx)}
                      className="flex items-center gap-2 text-brand-primary font-bold text-sm group/btn mb-4"
                    >
                      {isExpanded ? 'Hide Details' : 'View Implementation Details'}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="transition-transform"
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pb-6 border-t border-slate-100 pt-6">
                            {project.details.map((detail, i) => (
                              <div key={i} className="flex gap-3 text-sm text-slate-600">
                                <ChevronRight size={16} className="text-brand-primary shrink-0 mt-0.5" />
                                {detail}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="mt-auto p-6 pt-0 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold rounded uppercase tracking-wider border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-24"
        >
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">Academic Background</h3>
            <h2 className="text-4xl font-bold text-slate-900">Education</h2>
          </div>
          <div className="professional-card p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-brand-primary/30 transition-all">
            <div className="flex gap-6 items-center">
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-brand-primary transition-colors">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{resumeData.education.degree}</h3>
                <p className="text-slate-500 font-medium">{resumeData.education.institution}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="px-4 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-full">{resumeData.education.period}</span>
            </div>
          </div>
        </motion.section>

        {/* Bottom CTA */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="relative"
        >
          <div className="bg-brand-primary p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl shadow-brand-primary/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="text-white relative z-10 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Ready to discuss your next project?</h2>
              <p className="text-brand-primary-50 opacity-80 max-w-md">Currently looking for Senior Backend or Full Stack roles in growth-stage companies.</p>
            </div>
            <div className="flex gap-4 relative z-10">
              <a href={`mailto:${resumeData.contact.email}`} className="bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-sm hover:scale-105 transition-transform">
                Send Message
              </a>
              <button onClick={() => window.print()} className="bg-brand-secondary text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm hover:bg-brand-secondary/80 transition-colors">
                Print Resume
              </button>
            </div>
          </div>
        </motion.section>

        <footer className="mt-24 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
          <div className="flex gap-8 text-slate-400 text-sm font-bold uppercase tracking-widest">
            <a href={`https://${resumeData.contact.github}`} className="hover:text-brand-primary transition-colors">GitHub</a>
            <a href={`https://${resumeData.contact.linkedin}`} className="hover:text-brand-primary transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Gauge, ArrowRight, CheckCircle2, Building2, X, Zap } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projects';
import type { Project } from '../../types';

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="bg-navy-deep text-white py-20 sm:py-28 border-b border-border-navy relative overflow-hidden">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Number & Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-navy-deep px-2.5 py-1 bg-gold rounded-sm">
            04
          </span>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-gold uppercase">
            SELECTED PROJECTS // FACTUAL PORTFOLIO
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white font-heading leading-tight tracking-tight">
              Selected Project Experience
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
              Industrial execution across cement, steel, DRI, and iron ore pelletization facilities across Odisha and eastern India.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 border font-sans ${
                    isActive
                      ? 'bg-gold text-navy-dark border-gold shadow-md font-extrabold'
                      : 'bg-navy-surface/50 text-gray-300 border-navy-light/40 hover:text-white hover:border-gold/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Storytelling Layout (Editorial Large Numbered Cards) */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={project.id}
                className="bg-navy-dark/90 border border-border-navy hover:border-gold/60 rounded-sm overflow-hidden shadow-2xl transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Left Column (5 cols): Large Project Image with Overlay */}
                  <div className={`lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-navy-deep/40"></div>

                    {/* Big Project Number Badge */}
                    <div className="absolute top-4 left-4 bg-navy-deep/90 text-gold font-mono font-black text-sm sm:text-base px-3 py-1.5 rounded border border-gold/40 flex items-center gap-2">
                      <span>PROJECT 0{index + 1}</span>
                    </div>

                    {/* Plant Capacity Highlight */}
                    <div className="absolute bottom-4 left-4 bg-gold text-navy-dark px-3 py-1 rounded text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Gauge className="w-3.5 h-3.5" />
                      <span>CAPACITY: {project.capacity}</span>
                    </div>
                  </div>

                  {/* Right Column (6 cols): Technical Data & Narrative */}
                  <div className={`lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div>
                      <div className="text-[11px] font-mono font-bold text-gold uppercase tracking-widest">
                        {project.plantType}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white font-heading mt-1 group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>

                      {/* Technical Parameter Grid */}
                      <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-navy-light/30 text-xs text-gray-200">
                        <div className="space-y-0.5">
                          <div className="text-[10px] font-mono text-gray-400 uppercase">CLIENT:</div>
                          <div className="font-bold text-white flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            <span>{project.client}</span>
                          </div>
                        </div>

                        <div className="space-y-0.5">
                          <div className="text-[10px] font-mono text-gray-400 uppercase">LOCATION:</div>
                          <div className="font-bold text-white flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            <span>{project.location}</span>
                          </div>
                        </div>

                        <div className="space-y-0.5">
                          <div className="text-[10px] font-mono text-gray-400 uppercase">EXECUTION PERIOD:</div>
                          <div className="font-bold text-white flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            <span>{project.period}</span>
                          </div>
                        </div>

                        <div className="space-y-0.5">
                          <div className="text-[10px] font-mono text-gray-400 uppercase">PLANT CAPACITY:</div>
                          <div className="font-bold text-gold flex items-center gap-1.5">
                            <Gauge className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            <span>{project.capacity}</span>
                          </div>
                        </div>
                      </div>

                      <p className="mt-5 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                        {project.scopeSummary}
                      </p>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-navy-light/30 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="btn-gold text-xs px-5 py-2.5 uppercase font-bold tracking-wider inline-flex items-center gap-2"
                      >
                        <span>View Execution Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] font-mono text-gray-400 uppercase">FACT-CHECKED PROFILE</span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Global Projects Link */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="btn-outline-white text-xs px-8 py-4 font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Explore Complete Project Archive</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>

      </div>

      {/* Project Scope Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 backdrop-blur-md p-4 sm:p-6">
          <div className="bg-navy-dark border-2 border-gold/40 max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between border-b border-navy-light/40 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest">
                  DOCUMENTED TECHNICAL DELIVERABLES
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white font-heading mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-navy-surface/80 p-3 rounded-sm text-xs font-sans">
              <div>
                <div className="text-gray-400 text-[10px] font-mono">CLIENT</div>
                <div className="font-bold text-white">{selectedProject.client}</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-mono">CAPACITY</div>
                <div className="font-bold text-gold">{selectedProject.capacity}</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-mono">LOCATION</div>
                <div className="font-bold text-white">{selectedProject.location}</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-mono">PERIOD</div>
                <div className="font-bold text-white">{selectedProject.period}</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold" />
                Key Execution Scope Items:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-200 font-sans">
                {selectedProject.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-navy-surface/40 p-2.5 rounded-sm border border-navy-light/20">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-navy-light/40 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="btn-navy text-xs px-6 py-2.5 uppercase font-bold tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

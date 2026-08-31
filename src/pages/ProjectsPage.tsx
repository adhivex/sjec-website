import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { CTASection } from '../components/common/CTASection';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import type { Project } from '../types';
import {
  MapPin,
  Calendar,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Building2,
  X,
  Zap
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects: Project[] = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p: Project) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Page Hero */}
      <PageHero
        badge="Project Portfolio"
        title="Selected Project Experience"
        description="Industrial project experience across cement, steel, DRI and related process environments in eastern India."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      {/* Portfolio Grid Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {PROJECT_CATEGORIES.map((cat: { key: string; label: string }) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 border font-sans ${
                    isActive
                      ? 'bg-gold text-navy-dark border-gold shadow-md font-extrabold'
                      : 'bg-navy-surface/60 text-gray-300 border-navy-light/40 hover:text-white hover:border-gold/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="bg-navy-dark border border-border-navy hover:border-gold/60 rounded-sm overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Project Image Header */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-navy-deep">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>

                  {/* Plant Capacity Badge */}
                  <div className="absolute top-3 left-3 bg-gold text-navy-dark text-xs font-black px-2.5 py-1 rounded-sm shadow-md uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>{project.capacity}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-navy-deep/90 text-gold text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm border border-gold/30 uppercase">
                    {project.category}
                  </div>

                  {/* Plant Type */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono font-bold text-gray-200 truncate">
                    {project.plantType}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold uppercase tracking-tight text-white group-hover:text-gold transition-colors font-heading">
                      {project.title}
                    </h2>

                    {/* Metadata */}
                    <div className="mt-4 space-y-2 text-xs text-gray-300 border-b border-navy-light/30 pb-4 font-sans">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="font-semibold text-gray-200">Client:</span>
                        <span className="truncate">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="font-semibold text-gray-200">Location:</span>
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="font-semibold text-gray-200">Period:</span>
                        <span>{project.period}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-normal">
                      {project.scopeSummary}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-navy-light/30 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors focus:outline-none"
                    >
                      <span>View Technical Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Fact Checked</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Scope Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 backdrop-blur-md p-4 sm:p-6">
          <div className="bg-navy-dark border-2 border-gold/40 max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-navy-light/40 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest">
                  DOCUMENTED PROJECT SCOPE
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold uppercase text-white font-heading mt-1">
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
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-navy-surface/80 p-3.5 rounded-sm border border-navy-light/30 text-xs font-sans">
              <div>
                <div className="text-gray-400 text-[10px] font-mono">CLIENT</div>
                <div className="font-bold text-white truncate">{selectedProject.client}</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-mono">CAPACITY</div>
                <div className="font-bold text-gold font-mono">{selectedProject.capacity}</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-mono">LOCATION</div>
                <div className="font-bold text-white truncate">{selectedProject.location}</div>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] font-mono">PERIOD</div>
                <div className="font-bold text-white">{selectedProject.period}</div>
              </div>
            </div>

            {/* Scope Deliverables */}
            <div className="mt-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold" />
                Key Execution Deliverables
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 font-sans">
                {selectedProject.deliverables.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 bg-navy-surface/40 p-2.5 rounded-sm border border-navy-light/20">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-navy-light/40 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="btn-gold text-xs px-6 py-2.5 uppercase font-bold tracking-wider"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CTA */}
      <CTASection />
    </div>
  );
};

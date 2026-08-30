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
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        badge="Project Portfolio"
        title="Selected Project Experience"
        description="Industrial project experience across cement, steel, DRI and related process environments in eastern India."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      {/* Portfolio Grid Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {PROJECT_CATEGORIES.map((cat: { key: string; label: string }) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 border ${
                    isActive
                      ? 'bg-navy-dark text-gold border-gold shadow-md'
                      : 'bg-offwhite text-slate border-border hover:border-gold hover:text-navy'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="bg-white border border-border hover:border-gold rounded-sm overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Project Image Header */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-navy-dark">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>

                  {/* Plant Capacity Badge */}
                  <div className="absolute top-3 left-3 bg-gold text-navy-dark text-xs font-black px-3 py-1 rounded-sm shadow-md uppercase tracking-wider flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>{project.capacity}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-navy-dark/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm border border-border-navy uppercase">
                    {project.category}
                  </div>

                  {/* Plant Type */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-gray-200">
                    {project.plantType}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-navy group-hover:text-navy-surface font-heading">
                      {project.title}
                    </h3>

                    {/* Metadata */}
                    <div className="mt-4 space-y-2 text-xs text-slate border-b border-border-light pb-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="font-semibold text-charcoal">Client:</span>
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="font-semibold text-charcoal">Location:</span>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="font-semibold text-charcoal">Period:</span>
                        <span>{project.period}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-slate leading-relaxed">
                      {project.scopeSummary}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-border-light flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold uppercase tracking-wider text-navy group-hover:text-gold inline-flex items-center gap-1.5 transition-colors focus:outline-none"
                    >
                      <span>View Technical Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/90 backdrop-blur-sm p-4 sm:p-6">
          <div className="bg-white border-2 border-border max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">Documented Project Scope</span>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-navy font-heading mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-slate hover:text-navy p-1"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-offwhite p-3.5 rounded-sm border border-border text-xs">
              <div>
                <div className="text-slate font-medium">Client</div>
                <div className="font-bold text-navy">{selectedProject.client}</div>
              </div>
              <div>
                <div className="text-slate font-medium">Capacity</div>
                <div className="font-bold text-gold">{selectedProject.capacity}</div>
              </div>
              <div>
                <div className="text-slate font-medium">Location</div>
                <div className="font-bold text-navy">{selectedProject.location}</div>
              </div>
              <div>
                <div className="text-slate font-medium">Execution Period</div>
                <div className="font-bold text-navy">{selectedProject.period}</div>
              </div>
            </div>

            {/* Scope Deliverables */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold" />
                Key Execution Deliverables
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal">
                {selectedProject.deliverables.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 bg-offwhite p-2.5 rounded-sm border border-border-light">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-border flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="btn-navy text-xs px-6 py-2.5 uppercase font-bold tracking-wider"
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

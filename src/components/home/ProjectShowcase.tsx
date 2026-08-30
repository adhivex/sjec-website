import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Gauge, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projects';
import type { Project } from '../../types';
import { SectionHeader } from '../common/SectionHeader';

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="bg-navy-dark text-white py-16 sm:py-20 lg:py-24 border-b border-border-navy relative overflow-hidden">
      {/* Background industrial pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none grid-pattern"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Track Record"
          title="Selected Project Experience"
          subtitle="Industrial project experience across cement, steel, DRI and related process environments."
          align="center"
          dark={true}
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 border ${
                  isActive
                    ? 'bg-gold text-navy-dark border-gold shadow-md'
                    : 'bg-navy-surface/50 text-gray-300 border-navy-light/40 hover:text-white hover:border-gold/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-navy-surface/60 border border-border-navy hover:border-gold/60 rounded-sm overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Project Image & Category Pill */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-navy-deep">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>

                {/* Capacity Badge */}
                <div className="absolute top-3 left-3 bg-gold text-navy-dark text-xs font-black px-2.5 py-1 rounded-sm shadow-md uppercase tracking-wider flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>{project.capacity}</span>
                </div>

                {/* Plant Type pill */}
                <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-gray-300 line-clamp-1">
                  {project.plantType}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-gold transition-colors font-heading">
                    {project.title}
                  </h3>

                  {/* Client & Location Details */}
                  <div className="mt-3 space-y-2 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span className="font-semibold text-gray-200">Client:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span className="font-semibold text-gray-200">Location:</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span className="font-semibold text-gray-200">Period:</span>
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-gray-300 line-clamp-2 leading-relaxed border-t border-navy-light/30 pt-3">
                    {project.scopeSummary}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-navy-light/30 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>View Project Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Documented Scope</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Projects Link */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="btn-gold text-xs px-8 py-3.5 font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Explore Complete Project Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Project Scope Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/90 backdrop-blur-sm p-4">
          <div className="bg-navy-dark border border-border-navy max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between border-b border-navy-light/40 pb-4">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">Documented Project Scope</span>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white font-heading mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white p-1 text-sm uppercase font-bold"
              >
                ✕ Close
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-navy-surface p-3 rounded-sm text-xs">
              <div>
                <div className="text-gray-400">Client</div>
                <div className="font-bold text-white">{selectedProject.client}</div>
              </div>
              <div>
                <div className="text-gray-400">Capacity</div>
                <div className="font-bold text-gold">{selectedProject.capacity}</div>
              </div>
              <div>
                <div className="text-gray-400">Location</div>
                <div className="font-bold text-white">{selectedProject.location}</div>
              </div>
              <div>
                <div className="text-gray-400">Period</div>
                <div className="font-bold text-white">{selectedProject.period}</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3">
                Key Execution Deliverables
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
                {selectedProject.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
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
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Zap } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="404 Error"
        title="Page Not Found"
        description="The industrial engineering resource you are seeking is not available or has moved."
        breadcrumbs={[{ label: '404' }]}
      />

      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <div className="w-16 h-16 rounded-full bg-navy/10 text-navy flex items-center justify-center mx-auto mb-6">
          <Zap className="w-8 h-8 text-gold" />
        </div>
        <h2 className="text-2xl font-extrabold uppercase text-navy font-heading">
          Looking for SJEC Engineering Capabilities?
        </h2>
        <p className="mt-3 text-slate text-sm leading-relaxed">
          Please check the URL or navigate back to explore our industrial services, project portfolio, or contact details.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-gold text-xs px-6 py-3 uppercase font-bold tracking-wider inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/services" className="btn-navy text-xs px-6 py-3 uppercase font-bold tracking-wider inline-flex items-center gap-2">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

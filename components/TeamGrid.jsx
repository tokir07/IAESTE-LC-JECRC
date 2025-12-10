import React from 'react';
import TeamCard from './TeamCard';
import teamData from '../src/data/team.json';

export default function TeamGrid() {
  const advisor = teamData.find(member => member.id === 'advisor');
  const teamMembers = teamData.filter(member => member.id !== 'advisor');

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 sm:mb-12 text-center">
          CORE TEAM
        </h2>

        {/* Advisor Section */}
        {advisor && (
          <div className="mb-12 sm:mb-16 flex flex-col md:flex-row items-start gap-6 sm:gap-8">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <div className="absolute inset-0 rounded-full border-4 border-[#003F68] p-1">
                  <img
                    src={advisor.img}
                    alt={advisor.name}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23e5e7eb" width="200" height="200" rx="100"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="60" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + encodeURIComponent(advisor.name.charAt(0)) + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                {advisor.name}
              </h3>
              <p className="text-lg sm:text-xl font-semibold text-[#003F68] mb-4">
                {advisor.role}
              </p>
              {advisor.bio && (
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {advisor.bio}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}


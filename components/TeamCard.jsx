import React, { useState } from 'react';
import ProfileModal from './ProfileModal';

export default function TeamCard({ member }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSpecialRole = member.role === 'President' || member.role === 'Vice President' || member.role === 'Faculty Advisor';

  const handleCardClick = () => {
    if (member.bio) {
      setIsModalOpen(true);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && member.bio) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <article
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        role={member.bio ? 'button' : 'article'}
        tabIndex={member.bio ? 0 : -1}
        className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-${member.bio ? 'pointer' : 'default'} transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[#003F68] focus:ring-offset-2`}
        aria-label={member.bio ? `View ${member.name}'s profile` : undefined}
      >
        <div className="relative">
          <div className="w-full h-64 sm:h-72 bg-gray-200 overflow-hidden">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + encodeURIComponent(member.name.charAt(0)) + '%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
          {isSpecialRole && (
            <div className="absolute top-2 right-2 bg-[#003F68] text-white px-2 py-1 rounded text-xs font-semibold">
              {member.role}
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
        
        <div className="bg-gradient-to-r from-[#003F68] to-[#005a8f] text-white p-3">
          <p className="font-semibold text-sm">{member.name}</p>
          <p className="text-xs opacity-90">{member.role}</p>
        </div>
      </article>

      <ProfileModal
        member={member}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}


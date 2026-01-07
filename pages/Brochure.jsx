import React from 'react';

export default function Brochure() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mb-8">
          <p className="text-sm font-semibold text-[#003F68] uppercase tracking-wide">Resources</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2">Brochure</h1>
          <p className="text-lg text-gray-600 mt-3">
            Download and share the IAESTE LC JECRC brochure with students, partners, and employers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10">
          <p className="text-gray-700 leading-relaxed">
            Brochure download will be available here. Add your PDF link or embed a viewer when ready.
          </p>
        </div>
      </div>
    </div>
  );
}


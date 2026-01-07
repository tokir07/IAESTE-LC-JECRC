import React from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../src/assets/logos/IAESTE logo vertical white.png';

export default function Footer() {
  // ==================== CONSTANTS ====================
  const CURRENT_YEAR = new Date().getFullYear();
  const BRAND_COLOR = '#003F68';

  // ==================== REUSABLE COMPONENTS ====================
  // Social Media Icon Component
  const SocialIcon = ({ href, ariaLabel, children }) => (
    <a 
      href={href} 
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#003F68] transition-colors duration-300 flex items-center justify-center group"
      aria-label={ariaLabel}
    >
      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  );

  // Footer Link Component
  const FooterLink = ({ to, children, isExternal = false }) => {
    const className = `text-white hover:text-[#003F68] transition-colors duration-200 text-xs sm:text-base`;
    
    if (isExternal) {
      return <a href={to} className={className}>{children}</a>;
    }
    
    return <Link to={to} className={className}>{children}</Link>;
  };

  // Footer Section Component
  const FooterSection = ({ title, children, className = '' }) => (
    <div className={className}>
      <h3 className="text-white font-bold text-sm sm:text-xl mb-2 sm:mb-3">{title}</h3>
      <ul className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
        {children}
      </ul>
    </div>
  );

  // Contact Info Item Component
  const ContactItem = ({ icon, children }) => (
    <li className="flex items-start">
      <span className="mr-2 sm:mr-3 mt-0.5 flex-shrink-0">{icon}</span>
      <span className="text-white text-xs sm:text-base">{children}</span>
    </li>
  );

  // ==================== ICONS ====================
  const LocationIcon = () => (
    <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  // ==================== DATA ====================
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/benefits', label: 'Benefits' },
    { to: '/membership', label: 'Membership' },
    { to: '/testimonials', label: 'Testimonials' },
  ];

  const resources = [
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/team', label: 'Our Team' },
    { to: '#', label: 'Privacy Policy', isExternal: true },
    { to: '#', label: 'Terms & Conditions', isExternal: true },
  ];

  const contactInfo = {
    address: 'JECRC University,\nJaipur, Rajasthan, India',
    email: 'info@iaestejecrc.com',
    phone: '+91 123 456 7890',
  };

  // ==================== RENDER ====================
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-4 sm:py-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          
          {/* Logo and Description Section */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 text-center md:text-left -ml-8 lg:-ml-12">
            <Link to="/" className="flex items-center justify-center md:justify-start mb-2 sm:mb-4">
              <img 
                src={whiteLogo} 
                alt="IAESTE Logo" 
                width="200"
                height="96"
                className="h-14 sm:h-24 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            
            <p className="text-white font-bold text-xs sm:text-base mb-2 sm:mb-3">
              Work. Experience. Discover.
            </p>
            
            <p className="text-xs sm:text-base text-white leading-relaxed mb-3 sm:mb-4 max-w-md mx-auto md:mx-0">
              Empowering students through international exchange programs and professional development opportunities.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3 sm:space-x-4 justify-center md:justify-start">
              <SocialIcon href="#" ariaLabel="Facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </SocialIcon>
              
              <SocialIcon href="#" ariaLabel="Instagram">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </SocialIcon>
              
              <SocialIcon href="#" ariaLabel="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </SocialIcon>
              
              <SocialIcon href="#" ariaLabel="Twitter">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links Section */}
          <FooterSection title="Quick Links" className="md:ml-6 lg:ml-8 pt-4 md:pt-6 text-left">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <FooterLink to={link.to} isExternal={link.isExternal}>
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </FooterSection>

          {/* Resources Section */}
          <FooterSection title="Student" className="md:ml-2 lg:ml-4 pt-4 md:pt-6 text-left">
            {resources.map((resource) => (
              <li key={resource.to}>
                <FooterLink to={resource.to} isExternal={resource.isExternal}>
                  {resource.label}
                </FooterLink>
              </li>
            ))}
          </FooterSection>

          {/* Contact Info Section */}
          <div className="col-span-2 md:col-span-1 pt-4 md:pt-6 text-left -mr-4 md:-mr-6 lg:-mr-8">
            <h3 className="text-white font-bold text-sm sm:text-xl mb-2 sm:mb-3">Get in Touch</h3>
            <ul className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
              <ContactItem icon={<LocationIcon />}>
                {contactInfo.address.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < contactInfo.address.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </ContactItem>
              
              <ContactItem icon={<EmailIcon />}>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-white hover:text-[#003F68] transition-colors duration-200 break-all"
                >
                  {contactInfo.email}
                </a>
              </ContactItem>
              
              <ContactItem icon={<PhoneIcon />}>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                  className="text-white hover:text-[#003F68] transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </ContactItem>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-4 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 sm:space-y-3 md:space-y-0">
            <p className="text-white text-xs sm:text-sm md:text-base text-center md:text-left">
              © {CURRENT_YEAR} IAESTE LC JECRC. All rights reserved.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-6">
              <FooterLink to="#" isExternal>Privacy Policy</FooterLink>
              <FooterLink to="#" isExternal>Terms of Service</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

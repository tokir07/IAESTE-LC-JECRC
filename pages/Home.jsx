import React from 'react';
import Carousel from '../components/Carousel';
import homeImage from '../src/assets/images/home.jpg';
import agraImage from '../src/assets/images/Agra.jpg';
import dinnerImage from '../src/assets/images/Dinner.jpg';

export default function Home() {
  // Carousel slides data with background images
  const slides = [
    {
      id: 1,
      title: "Welcome to IAESTE LC JECRC",
      subtitle: "Work. Experience. Discover.",
      description: "Empowering students through international exchange programs and professional development opportunities worldwide.",
      buttonText: "Apply Now",
      buttonLink: "/apply",
      backgroundImage: homeImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #005a8f 100%)",
    },
    {
      id: 2,
      title: "Global Opportunities",
      subtitle: "Expand Your Horizons",
      description: "Join thousands of students who have gained valuable international work experience through our exchange programs.",
      buttonText: "Learn More",
      buttonLink: "/benefits",
      backgroundImage: agraImage,
      fallbackGradient: "linear-gradient(135deg, #1e3a5f 0%, #003F68 100%)",
    },
    {
      id: 3,
      title: "Build Your Future",
      subtitle: "Professional Development",
      description: "Develop essential skills, build international networks, and enhance your career prospects with IAESTE.",
      buttonText: "Get Started",
      buttonLink: "/membership",
      backgroundImage: dinnerImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #1e3a5f 100%)",
    },
  ];

  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ApplicationForm from '../components/ApplicationForm';
import { Analytics } from '@vercel/analytics/next';

const LandingPage: React.FC = () => {
  const [formVisible, setFormVisible] = React.useState(false);

  const handleApplyClick = () => setFormVisible(true);
  const handleCloseForm = () => setFormVisible(false);

  return (
    <div className="relative font-sans bg-black min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero onApplyClick={handleApplyClick} />
      </main>
      <ApplicationForm visible={formVisible} onClose={handleCloseForm} />
      <Analytics />
    </div>
  );
};

export default LandingPage;
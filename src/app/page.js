"use client";

import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import TextSection from '../components/TextSection/TextSection';
import CardStackScroll from '../components/CardStackScroll/CardStackScroll';
import CurvedLoop from '../components/CurvedLoop/CurvedLoop';
import FAQSection from '../components/FAQSection/FAQSection';
import EligibilitySection from '../components/EligibilitySection/EligibilitySection';
import Footer from '../components/Footer/Footer';
import DesktopHero from '../components/DesktopHero/DesktopHero'
import MobileHero from '../components/MobileHero/MobileHero'
import Guide from '../components/Guide/Guide'
import HeroBottom from '../components/HeroBottom/HeroBottom';

export default function Home() {
  return (

    <main className="min-h-screen bg-secondary-50 relative">
      <Header />
      {/* <HeroSection /> */}
      {/* <HeroNew /> */}
      <DesktopHero />
      <MobileHero />

      {/* <CurvedLoop 
        marqueeText="LOCK ✦ SHARE ✦ EARN ✦"
        speed={0.5}
        curveAmount={0}
        direction="right"
        interactive={true}
        className="custom-text-black"
      /> */}

      <div style={{ backgroundColor: '#f2f2f2' }} className="flex flex-col items-center justify-center py-5 px-4">
        <p className="text-4xl sm:text-5xl lg:text-[50px] bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-[500] leading-tight font-narkiss-hadash text-center">
          Something amazing is coming your way.
        </p>
        <p className="text-4xl sm:text-5xl lg:text-[50px] bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-[500] leading-tight font-narkiss-hadash text-center mt-4">
          We're finalizing development — launching soon.
        </p>
      </div>

      <CardStackScroll />
      <Guide />
      <FAQSection />
      <EligibilitySection />
      <HeroBottom />
      <Footer />


    </main>
  );
}

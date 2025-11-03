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
import HeroNew from '../components/HeroNew/HeroNew';
import HeroBottom from '../components/HeroBottom/HeroBottom';
import TextType from '../components/TypingText/TypingText';


const defaultContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo at fuga cum dolore pariatur culpa, iste cupiditate delectus soluta natus aut sunt, provident autem eveniet quisquam similique minima dolor voluptatem!"
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

      <section className="flex justify-center items-center py-12 px-4 bg-[#f1f1f1]">
        <TextType
          text={["Something amazing is coming your way!", "We’re finalizing development — launching soon."]}
          typingSpeed={50}
          pauseDuration={500}
          showCursor={true}
          initialDelay={1000}
          cursorCharacter="_"
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center font-narkiss-hadash bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent"
        />
      </section>

      <CardStackScroll />
      <Guide />
      <FAQSection />
      <EligibilitySection />
      <HeroBottom />
      <Footer />


    </main>
  );
}

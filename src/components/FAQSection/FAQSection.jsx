import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaPlus } from "react-icons/fa6";
import Button from "../ui/Button";

const FAQSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const iconRefs = useRef([]);
  const contentRefs = useRef([]);

  const faqData = [
  {
    question: "How Do I Monetize My Content on Vaultin?",
    answer:
      "Start earning on Vaultin in 3 easy steps: Sign up, post your content, and when it’s time to withdraw, complete identity verification and connect your bank account."
  },
  {
    question: "Who Can Sign Up on Vaultin?",
    answer:
      "Vaultin empowers creators of all kinds—whether you’re an artist, influencer, or content maker—to earn from your digital creations."
  },
  {
    question: "Can Users View My Content Without Payment?",
    answer:
      "No, your content stays protected behind our paywall. Only users who pay the set price can unlock access."
  },
  {
    question: "How Do I Withdraw My Earnings?",
    answer:
      "You can withdraw your earnings by linking a verified bank account in your Vaultin profile. Once your account is verified, simply request a payout from your dashboard. Withdrawals are processed securely, and the funds are transferred to your chosen account within a few business days."
  }
];


  const toggleItem = (index) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          rotation: expandedItem === index ? 45 : 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (expandedItem === index) {
          gsap.to(content, {
            height: content.scrollHeight,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out"
          });
        } else {
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.25,
            ease: "power2.in"
          });
        }
      }
    });
  }, [expandedItem]);

  return (
    <div id='faq' className="  shadow-black shadow-2xl relative z-10 translate-y-[24px] md:translate-y-[32px] rounded-b-[24px] md:rounded-b-[32px] bg-primary-light bg-gradient-to-br from-primary-light to-primary-dark flex items-start justify-center px-6 py-20 lg:py-30 ">
      <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col  lg:justify-start justify-center items-center lg:items-start text-center lg:text-left ">
          <h1 className="text-white text-3xl md:text-4xl lg:text-[40px] font-narkiss-hadash leading-tight mb-6">
            Get to know Vaultin
          </h1>
            {/* <Button
              variant="secondary"
            >
              View more
            </Button> */}
        </div>

        {/* Right Column - FAQ */}
        <div className="py-2 lg:col-span-8 space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:scale-x-101 transition-all duration-300 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full cursor-pointer p-4 md:p-6 lg:p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-primary-light text-lg lg:text-2xl  leading-tight pr-2">
                  {item.question}
                </h3>
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="flex items-center justify-center"
                >
                  <FaPlus className=" text-primary-light w-4 h-4 lg:w-6 lg:h-6"/>
                </div>
              </button>

              {/* Answer Section (expands DOWN only) */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-8 overflow-hidden h-0 opacity-0"
              >
                <div className="  pb-8">
                  <p className="text-primary-light text-md lg:text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

import React, { forwardRef } from 'react';
import { FeatureSteps } from "./FeatureSteps";
import CircularText from "./CircularText";
import { HyperText } from "./HyperText.tsx";

const ScrollAnimationSections = forwardRef<HTMLElement>((props, ref) => {
  return (
    <>
      <section className='bg-custom-black py-20 mt-0 relative'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="relative">
            {/* Circular Text in top left */}
            <div className="absolute top-0 left-0 z-10">
              <CircularText
                text="Destino Devconnect "
                spinDuration={30}
                onHover="speedUp"
                className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
              />
            </div>

            <div className="text-right mb-16">
              <h2 className="text-5xl md:text-6xl font-raleway font-bold mb-8 text-white">
                Latin America is the Future, Chile is the Catalyst
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl ml-auto">
                Latin America has emerged as the epicenter of blockchain innovation, 
                with Chile leading the charge in regulatory innovation. From progressive 
                fintech laws to open finance initiatives, this region is reshaping the 
                future of decentralized technology.
              </p>
            </div>

            <FeatureSteps
              title="Chile's Fintech Revolution"
              features={[
                {
                  step: "Fintech Powerhouse",
                  title: "Latin America's Financial Innovation Hub",
                  content:
                    "Chile leads Latin America with over 200 fintech companies and $1.2B in fintech investments. The 2023 Fintech Law created a sandbox environment where web3 startups can test innovative solutions while regulators learn and adapt.",
                  image: "/catedral.png",
                },
                {
                  step: "Open Banking Pioneer",
                  title: "API Infrastructure Ready for Web3",
                  content:
                    "Chile's Open Finance platform connects 80% of the banking system through standardized APIs. This existing infrastructure is perfectly positioned for web3 integration, creating unprecedented opportunities for DeFi and blockchain applications.",
                  image: "/panel.jpg",
                },
                {
                  step: "Untapped Potential",
                  title: "Web3's Gateway to Latin America",
                  content:
                    "Despite Chile's advanced fintech ecosystem, web3 adoption remains at just 3%. With 19M people, high smartphone penetration, and regulatory clarity, Chile represents the perfect market for web3's next breakthrough moment.",
                  image: "/apertura.jpg",
                },
              ]}
              autoPlayInterval={4000}
              className="bg-transparent"
            />
          </div>
        </div>
      </section>
    </>
  );
});

ScrollAnimationSections.displayName = 'ScrollAnimationSections';

export default ScrollAnimationSections; 
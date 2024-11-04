// @ts-nocheck

import { useEffect, useState, useRef } from "react";
import { ScrollProgress, ScrollSection, ScrollContainerP } from "./Scroll-Container.styles";

const ScrollContainer: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const newScrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(newScrollPercentage);
    // Cancel the previous animation frame request
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    // Schedule a new animation frame request
    rafId.current = requestAnimationFrame(() => {
      setScrollPercentage(newScrollPercentage);
    });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContainerP ref={scrollContainerRef}>
      <ScrollSection
        visible={scrollPercentage >= 0 && scrollPercentage <= 33}
        className="section__first"
      >
        <div className="section__first__content">
          <h1> 1. </h1>
          <h2>Create a LinkSafe.</h2>
          <p>With just a few prompts, you have your LinkSafe.</p>
        </div>
      </ScrollSection>
      <ScrollSection visible={scrollPercentage > 33 && scrollPercentage <= 66}>
        <div className="section__first__content">
          <h1> 2. </h1>
          <h2>Fund with Digital Asset(s).</h2>
          <p>Fund your link safe with algorand asset or NFT(s).</p>
        </div>
      </ScrollSection>
      <ScrollSection visible={scrollPercentage > 66 && scrollPercentage <= 100}>
        <div className="section__first__content">
          <h1> 3. </h1>
          <h2>Share with love. </h2>
          <p>Share your Link and claim to your algorand wallet </p>
        </div>
      </ScrollSection>
      <div className="scroll__percent">
        <ScrollProgress scrollPercentage={scrollPercentage} />
      </div>
    </ScrollContainerP>
  );
};

export default ScrollContainer;

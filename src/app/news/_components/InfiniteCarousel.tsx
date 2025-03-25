"use client";

import { useEffect, useRef } from "react";

import styles from "../styles/InfiniteCarousel.module.css";

interface Props {
  children: JSX.Element[];
  width?: "fit-content" | "100%";
}

export const InfiniteCarousel = ({
  children,
  width = "fit-content",
}: Props) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const addAnimation = () => {
      const scroller = scrollerRef.current;
      if (scroller) {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (scrollerInner) {
          const scrollerInnerContent = Array.from(scrollerInner.children);

          // Duplicate the first eight items
          for (let i = 0; i < 8; i++) {
            const item = scrollerInnerContent[i];
            const duplicatedItem = item!.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");

            scrollerInner.appendChild(duplicatedItem);
          }
        }
      }
    };

    addAnimation();
  }, []);

  return (
    <div className={styles.scroller} ref={scrollerRef}>
      <ul className={styles.scroller__inner}>
        {/* First set of images */}

        {children.map((child, index) => (
          <li key={`imageA-${index}`}>{child}</li>
        ))}
        {/* Second set of images */}
        {children.map((child, index) => (
          <li key={`imageB-${index}`}>{child}</li>
        ))}
        {/* Third set of images */}
        {children.map((child, index) => (
          <li key={`imageC-${index}`}>{child}</li>
        ))}
        {/* Fourth set of images */}
        {children.map((child, index) => (
          <li key={`imageD-${index}`}>{child}</li>
        ))}
        {/* Fifth set of images */}
        {children.map((child, index) => (
          <li key={`imageE-${index}`}>{child}</li>
        ))}
        {/* Sixth set of images */}
        {children.map((child, index) => (
          <li key={`imageF-${index}`}>{child}</li>
        ))}
        {/* Seventh set of images */}
        {children.map((child, index) => (
          <li key={`imageG-${index}`}>{child}</li>
        ))}
        {/* Eighth set of images */}
        {children.map((child, index) => (
          <li key={`imageH-${index}`}>{child}</li>
        ))}
      </ul>
    </div>
  );
};

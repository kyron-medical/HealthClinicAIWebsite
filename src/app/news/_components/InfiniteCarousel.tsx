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
    <div className={styles.scroller} ref={scrollerRef} data-oid="q-tu_gv">
      <ul className={styles.scroller__inner} data-oid="uuw666-">
        {/* First set of images */}

        {children.map((child, index) => (
          <li key={`imageA-${index}`} data-oid="gggsbim">
            {child}
          </li>
        ))}
        {/* Second set of images */}
        {children.map((child, index) => (
          <li key={`imageB-${index}`} data-oid="lz531m2">
            {child}
          </li>
        ))}
        {/* Third set of images */}
        {children.map((child, index) => (
          <li key={`imageC-${index}`} data-oid="ij-a1:4">
            {child}
          </li>
        ))}
        {/* Fourth set of images */}
        {children.map((child, index) => (
          <li key={`imageD-${index}`} data-oid="o134ak8">
            {child}
          </li>
        ))}
        {/* Fifth set of images */}
        {children.map((child, index) => (
          <li key={`imageE-${index}`} data-oid="9c0zc6c">
            {child}
          </li>
        ))}
        {/* Sixth set of images */}
        {children.map((child, index) => (
          <li key={`imageF-${index}`} data-oid="ixkwkex">
            {child}
          </li>
        ))}
        {/* Seventh set of images */}
        {children.map((child, index) => (
          <li key={`imageG-${index}`} data-oid="yhbtqee">
            {child}
          </li>
        ))}
        {/* Eighth set of images */}
        {children.map((child, index) => (
          <li key={`imageH-${index}`} data-oid="7y.1m4a">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

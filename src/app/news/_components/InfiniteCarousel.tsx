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
    <div className={styles.scroller} ref={scrollerRef} data-oid="2w-483z">
      <ul className={styles.scroller__inner} data-oid="cr9.a4y">
        {/* First set of images */}

        {children.map((child, index) => (
          <li key={`imageA-${index}`} data-oid="th1o_cd">
            {child}
          </li>
        ))}
        {/* Second set of images */}
        {children.map((child, index) => (
          <li key={`imageB-${index}`} data-oid="i2_gl_l">
            {child}
          </li>
        ))}
        {/* Third set of images */}
        {children.map((child, index) => (
          <li key={`imageC-${index}`} data-oid="157sxmw">
            {child}
          </li>
        ))}
        {/* Fourth set of images */}
        {children.map((child, index) => (
          <li key={`imageD-${index}`} data-oid="hc_3vyz">
            {child}
          </li>
        ))}
        {/* Fifth set of images */}
        {children.map((child, index) => (
          <li key={`imageE-${index}`} data-oid="pai5kl5">
            {child}
          </li>
        ))}
        {/* Sixth set of images */}
        {children.map((child, index) => (
          <li key={`imageF-${index}`} data-oid="4n9hqq9">
            {child}
          </li>
        ))}
        {/* Seventh set of images */}
        {children.map((child, index) => (
          <li key={`imageG-${index}`} data-oid="_t-z-yw">
            {child}
          </li>
        ))}
        {/* Eighth set of images */}
        {children.map((child, index) => (
          <li key={`imageH-${index}`} data-oid="p2weg3l">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

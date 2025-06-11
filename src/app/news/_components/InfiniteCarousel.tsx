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
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");

            scrollerInner.appendChild(duplicatedItem);
          }
        }
      }
    };

    addAnimation();
  }, []);

  return (
    <div className={styles.scroller} ref={scrollerRef} data-oid="8g.dm1h">
      <ul className={styles.scroller__inner} data-oid="_11nbke">
        {/* First set of images */}

        {children.map((child, index) => (
          <li key={`imageA-${index}`} data-oid="dq60_ie">
            {child}
          </li>
        ))}
        {/* Second set of images */}
        {children.map((child, index) => (
          <li key={`imageB-${index}`} data-oid="lkc1iyp">
            {child}
          </li>
        ))}
        {/* Third set of images */}
        {children.map((child, index) => (
          <li key={`imageC-${index}`} data-oid="jpc026b">
            {child}
          </li>
        ))}
        {/* Fourth set of images */}
        {children.map((child, index) => (
          <li key={`imageD-${index}`} data-oid="__e5r4z">
            {child}
          </li>
        ))}
        {/* Fifth set of images */}
        {children.map((child, index) => (
          <li key={`imageE-${index}`} data-oid="q9lm_dr">
            {child}
          </li>
        ))}
        {/* Sixth set of images */}
        {children.map((child, index) => (
          <li key={`imageF-${index}`} data-oid="_trz3ej">
            {child}
          </li>
        ))}
        {/* Seventh set of images */}
        {children.map((child, index) => (
          <li key={`imageG-${index}`} data-oid="96:lke1">
            {child}
          </li>
        ))}
        {/* Eighth set of images */}
        {children.map((child, index) => (
          <li key={`imageH-${index}`} data-oid="8mc.ums">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

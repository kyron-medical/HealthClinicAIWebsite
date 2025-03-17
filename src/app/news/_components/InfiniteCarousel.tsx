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
    <div className={styles.scroller} ref={scrollerRef} data-oid="v62a58c">
      <ul className={styles.scroller__inner} data-oid="1o.8pgw">
        {/* First set of images */}

        {children.map((child, index) => (
          <li key={`imageA-${index}`} data-oid="o5imspu">
            {child}
          </li>
        ))}
        {/* Second set of images */}
        {children.map((child, index) => (
          <li key={`imageB-${index}`} data-oid="p0rg3r7">
            {child}
          </li>
        ))}
        {/* Third set of images */}
        {children.map((child, index) => (
          <li key={`imageC-${index}`} data-oid="25ub9.1">
            {child}
          </li>
        ))}
        {/* Fourth set of images */}
        {children.map((child, index) => (
          <li key={`imageD-${index}`} data-oid="6k-9wa5">
            {child}
          </li>
        ))}
        {/* Fifth set of images */}
        {children.map((child, index) => (
          <li key={`imageE-${index}`} data-oid="4_wg44p">
            {child}
          </li>
        ))}
        {/* Sixth set of images */}
        {children.map((child, index) => (
          <li key={`imageF-${index}`} data-oid="ws2_qiz">
            {child}
          </li>
        ))}
        {/* Seventh set of images */}
        {children.map((child, index) => (
          <li key={`imageG-${index}`} data-oid="8vce68w">
            {child}
          </li>
        ))}
        {/* Eighth set of images */}
        {children.map((child, index) => (
          <li key={`imageH-${index}`} data-oid="cssscn1">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

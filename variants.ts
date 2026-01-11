import { Variants } from "framer-motion";

// 1. 매개변수 타입을 지정 (any 대신 string, number 등)
// 2. 함수의 반환 타입을 Variants로 지정
export const fadeIn = (direction: string, delay: number): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween", // 이제 Variants 타입 덕분에 올바르게 인식됩니다.
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

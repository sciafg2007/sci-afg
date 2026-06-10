import { Variants } from "framer-motion";

export const ModalAnim: Variants = {
  initial: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};


export const SideBarAnim: Variants = {
  initial: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  entry: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};

export const FilterAnim: Variants = {
  initial: {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};

export const ReferenceAnim: Variants = {
  initial: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};

export const loaderAnim: Variants = {
  initial: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};

export const CookieAnim: Variants = {
  initial: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    opacity: 0,
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};
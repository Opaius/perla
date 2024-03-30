"use client";
import React, { ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./styled-components";
import { createPortal } from "react-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const overlay = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const overlayChildren = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 11.5,
      stiffness: 100,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 11.5,
      stiffness: 100,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  },
};
export const Navbar = () => {
  const [active, setActive] = React.useState<string | null>(null);
  const [portalActive, setPortal] = React.useState<boolean>(false);
  function triggerPortal() {
    setPortal((prev) => {
      document.documentElement.style.overflow = !prev ? "hidden" : "visible";
      return !prev;
    });
  }
  return (
    <nav className="fixed top-5 z-10 flex left-5 md:justify-center w-full pointer-events-none *:pointer-events-auto">
      <Menu setActive={setActive}>
        <Logo
          className="z-30 md:hidden"
          onClick={() => {
            triggerPortal();
          }}
        />
        <Logo className="hidden md:block" />

        {createPortal(
          <AnimatePresence>
            {portalActive && (
              <motion.div
                variants={overlay}
                key="portal"
                initial="hidden"
                exit="hidden"
                animate="visible"
                className={`md:hidden fixed left-0 top-0 w-full h-full flex flex-col
                bg-background/90`}
              >
                <div className="flex flex-col mt-[100px] mx-5 gap-5 *:p-5 *:bg-foreground *:rounded-3xl">
                  <motion.div variants={overlayChildren} className="">
                    <Link href="/#oferte" onClick={() => triggerPortal()}>
                      Oferte
                    </Link>
                  </motion.div>
                  <motion.div variants={overlayChildren} className="">
                    <Link href="/camere">Camere</Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
        <div className="hidden md:block">
          <MenuItem setActive={setActive} active={active} item="Home">
            <div>Hi</div>
          </MenuItem>
        </div>
      </Menu>
    </nav>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  itemJSX,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  itemJSX?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer  hover:opacity-[0.9] text-text"
      >
        {item && itemJSX ? itemJSX : item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.45rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-foreground backdrop-blur-sm rounded-2xl overflow-hidden border border-text/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = React.useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        onMouseLeave={() => setActive(null)} // resets the state
        className="relative rounded-full border-text/[0.2] bg-foreground shadow-input flex md:justify-center space-x-4 md:px-8 md:py-6 px-4 py-4"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};

"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function HeroImage() {
  useGSAP(() => {
    gsap.fromTo(
      "#illustration",
      {
        x: 0,
        scale: 0.95,
        rotation: 0,
      },
      {
        rotate: 360,
        duration: 2,
        ease: "circ.out",
        scale: 1,
        repeat: -1,
        yoyo: true,
      }
    );
  });
  return (
    <div className="w-full  text-white flex justify-center items-center relative ">
      <Image
        id="notification"
        src="/notification.png"
        alt="Notification"
        width={64}
        height={64}
        className=" absolute z-10"
      />

      <Image
        id="illustration"
        src="/Illustration.png"
        alt="Illustration"
        className=" absolute"
        width={300}
        height={300}
      />
    </div>
  );
}

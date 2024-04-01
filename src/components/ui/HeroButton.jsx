"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export default function HeroButton() {
  function handelNotify() {
    toast.info("Notification Sent!");
  }
  return (
    <div className="w-full   ">
      <Button
        onClick={handelNotify}
        className="  w-full h-full border border-orange-400  bg-gradient-to-r from-red-950 via-[#DF522B] to-[#C77D2C] hover:from-red-600 hover:to-black text-white py-2 p-3 rounded-md"
      >
        Send Notification
      </Button>
    </div>
  );
}

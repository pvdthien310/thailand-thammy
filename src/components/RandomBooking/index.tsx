"use client";

import Image from "next/image";
import { RANDOM_BOOKING } from "@/data/booking";
import { useEffect, useState } from "react";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function RandomBooking() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentBooking = RANDOM_BOOKING[currentIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        if (RANDOM_BOOKING.length <= 1) {
          return previousIndex;
        }

        let nextIndex = previousIndex;

        while (nextIndex === previousIndex) {
          nextIndex = getRandomNumber(0, RANDOM_BOOKING.length - 1);
        }

        return nextIndex;
      });

      setIsOpen(true);
    }, 15000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(false);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  return isOpen ? (
    <div className="shadow-lg border border-gray-200 fixed bottom-3 right-3 lg:bottom-8 lg:right-8 bg-white p-2 rounded-lg z-40">
      <div className="flex gap-2">
        <Image
          src={currentBooking.avatar}
          alt={currentBooking.name}
          width={80}
          height={80}
          className="rounded-lg object-cover max-w-[80px] max-h-[80px]"
        />
        <div className="flex flex-col">
          <h3 className="font-body! font-semibold">
            {currentBooking.name}{" "}
            <span className="text-sm text-gray-500 font-body">
              Đặt lịch thành công
            </span>
          </h3>
          <p className="text-sm text-gray-500 font-body">
            {currentBooking.service}
          </p>
          <p className="text-sm text-gray-500 font-body">
            {currentBooking.time}
          </p>
        </div>
      </div>
    </div>
  ) : null;
}

export default RandomBooking;

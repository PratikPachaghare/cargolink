import React, { useEffect, useState, useRef } from "react";
import truckForward from "../../../../assets/truck_forword.png";
import truckReverse from "../../../../assets/truck_reverse.png";

const TruckAnimation = () => {
  const [scrollX, setScrollX] = useState(0);
  const [direction, setDirection] = useState("forward"); // default forward
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;

      // Truck position calculation
      const move = scrollProgress * (window.innerWidth - 300); // 300 = truck width
      setScrollX(move);

      // Detect scroll direction
      if (scrollTop > lastScrollY.current) {
        setDirection("forward"); // scrolling down
      } else if (scrollTop < lastScrollY.current) {
        setDirection("reverse"); // scrolling up
      }

      lastScrollY.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" top-10 left-0 w-full pointer-events-none">
      <img
        src={direction === "forward" ? truckForward : truckReverse}
        alt="truck"
        className="w-72"
        style={{ transform: `translateX(${scrollX}px)` }}
      />
    </div>
  );
};

export default TruckAnimation;

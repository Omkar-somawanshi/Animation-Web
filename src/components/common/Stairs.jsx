import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const currentPath = useLocation().pathname;
  console.log(currentPath);
  const stairParentRef = useRef(null);
  const pageRef =useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Show the parent
    tl.to(stairParentRef.current, {
      display: "block",
    });

    // Animate stairs in
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });

    // Move stairs down
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    // Hide parent
    tl.to(stairParentRef.current, {
      display: "none",
    });

    // Reset stairs
    tl.to(".stair", {
      y: "0%",
    });
    gsap.from (pageRef.current, {
        opacity:0,
        delay:1.3,
        scale:1.2

   } )
  }, [currentPath]);

  console.log(props.children); // Re-run animation on route change

  return (
    <div>
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-20 top-0 hidden"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div >
      <div  ref={pageRef}>{props.children}</div>{" "}
    </div>
  );
};

export default Stairs;

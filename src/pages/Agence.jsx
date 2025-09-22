import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
  ];

  useGSAP(function () {


    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        
        start: "top 10%",
        end: "top -110%",

        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          console.log((imageRef.current.src = imageArray[imageIndex]));
        },
      },
    });
  });

  return (
    <div className="relative bg-white min-h-screen w-full overflow-hidden">
      {/* Image Box - behind text */}
      <div
        ref={imageDivRef}
        className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-4xl top-[30vh] left-[30vw] z-0"
      >
        <img
          ref={imageRef}
          className="h-full w-full object-cover"
          src="https://k72.ca/uploads/teamMembers/HugoJoseph_640X960-640x960.jpg"
          alt=""
        />
      </div>

      {/* First Page */}
      <div className="font-[font2] text-black relative z-10">
        <div className="mt-[39vh] h-screen flex flex-col justify-center">
          <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
            Seventy <br />
            Two
          </h1>
        </div>
        <div className="pl-[40%] mt-20">
          <p className="text-4xl max-w-4xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            This content describes an agency's philosophy in three parts. It
            emphasizes that projects start with humility, grow through
            curiosity, and are brought to life by creativity in all its forms.
            The creative process thrives in an environment where people feel
            free to be their best selves, allowing talent to explode. Finally,
            the agency's culture is defined by openness and collaboration, with
            every team member contributing to a company they can be proud of.
          </p>
        </div>
      </div>

      {/* Second Page (plain black) */}
      <div className="relative bg-white min-h-screen w-full"></div>
    </div>
  );
};

export default Agence;

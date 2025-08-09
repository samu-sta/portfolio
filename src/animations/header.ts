import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector('header') as HTMLElement;

ScrollTrigger.create({
  trigger: header,
  start: "30",
  end: "+=1000",
  onEnter: () => {
    gsap.to(header, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        header.classList.add('stuck');
        gsap.fromTo(header,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    });
  },
  onLeaveBack: () => {
    
    header.classList.remove('stuck');
    gsap.set(header, {
      clearProps: "all"
    });
  }
});
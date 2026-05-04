import { useEffect } from "react";
import Lenis from "lenis";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const navLinks = ["Philosophy", "Process", "Projects", "Services"];

const Hero = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="mx-auto max-w-7xl px-8 py-6 flex items-center justify-between">
          <a href="#" className="font-serif-display text-lg tracking-tight">
            Amit Interiors
          </a>
          <ul className="hidden md:flex items-center gap-10 text-[13px] text-foreground/70">
            {navLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#consultation"
            className="rounded-full border border-foreground/15 bg-background/60 backdrop-blur px-4 py-2 text-[13px] hover:bg-foreground hover:text-background transition-colors"
          >
            Get Consultation
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Top right large */}
          <div className="absolute top-24 right-[6%] w-[22vw] max-w-[340px] aspect-[3/4] overflow-hidden rounded-sm">
            <img src={hero1} alt="Sunlit minimal living room" className="h-full w-full object-cover" width={896} height={1152} />
          </div>

          {/* Bottom left medium */}
          <div className="absolute bottom-[10%] left-[5%] w-[18vw] max-w-[280px] aspect-[3/4] overflow-hidden rounded-sm">
            <img src={hero2} alt="Travertine dining nook" className="h-full w-full object-cover" loading="lazy" width={896} height={1152} />
          </div>

          {/* Mid right small */}
          <div className="absolute bottom-[18%] right-[14%] w-[12vw] max-w-[180px] aspect-[3/4] overflow-hidden rounded-sm hidden md:block">
            <img src={hero3} alt="Calm bedroom" className="h-full w-full object-cover" loading="lazy" width={896} height={1152} />
          </div>

          {/* Top left tiny */}
          <div className="absolute top-[28%] left-[18%] w-[10vw] max-w-[150px] aspect-[3/4] overflow-hidden rounded-sm hidden lg:block">
            <img src={hero4} alt="Arched hallway" className="h-full w-full object-cover" loading="lazy" width={896} height={1152} />
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/50 mb-8">
            12+ Years Experience
          </span>
          <h1 className="font-serif-display font-light text-foreground text-[clamp(2.75rem,7vw,6.5rem)] leading-[1.02] max-w-5xl">
            Designing Calm,
            <br />
            Functional Spaces
          </h1>
          <p className="mt-8 text-[15px] text-foreground/60 max-w-md leading-relaxed">
            Interior design studio based in Surat, working across Gujarat.
          </p>

          <div className="mt-14 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-foreground/40">
            <span className="h-px w-8 bg-foreground/20" />
            100+ Projects Delivered
            <span className="h-px w-8 bg-foreground/20" />
          </div>
        </div>
      </section>

      {/* spacer to demonstrate parallax */}
      <section className="h-screen" />
    </div>
  );
};

export default Hero;

import { useEffect, useRef, useState } from "react";

export function useInViewAnimation(
  options = { threshold: 0.2, triggerOnce: true }
) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) observer.unobserve(entry.target);
        } else if (!options.triggerOnce) {
          setInView(false);
        }
      },
      { threshold: options.threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options.threshold, options.triggerOnce]);

  return { ref, inView };
}

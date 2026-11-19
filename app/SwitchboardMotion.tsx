'use client';

import { useEffect } from 'react';

export default function SwitchboardMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('vx-js');

    const cleanups: Array<() => void> = [];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const progress = document.querySelector<HTMLElement>('.vx-progress');
    const header = document.querySelector<HTMLElement>('.vx-header');
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const value = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (progress) progress.style.transform = `scaleX(${value})`;
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 10);
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (reduce || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-in'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );
      revealItems.forEach((item) => observer.observe(item));
      cleanups.push(() => observer.disconnect());
    }

    if (!reduce && finePointer) {
      const tilts = Array.from(document.querySelectorAll<HTMLElement>('[data-vx-tilt]'));
      tilts.forEach((element) => {
        let frame = 0;
        const max = Number(element.dataset.tiltStrength || 5);

        const move = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            element.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
            element.style.setProperty('--rx', `${(0.5 - y) * max * 1.6}deg`);
          });
        };

        const leave = () => {
          cancelAnimationFrame(frame);
          element.style.removeProperty('--rx');
          element.style.removeProperty('--ry');
        };

        element.addEventListener('pointermove', move);
        element.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          cancelAnimationFrame(frame);
          element.removeEventListener('pointermove', move);
          element.removeEventListener('pointerleave', leave);
        });
      });

      const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-vx-scene]'));
      scenes.forEach((scene) => {
        const layers = Array.from(scene.querySelectorAll<HTMLElement>('[data-vx-depth]'));
        let frame = 0;

        const move = (event: PointerEvent) => {
          const rect = scene.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            layers.forEach((layer) => {
              const depth = Number(layer.dataset.depth || 8);
              layer.style.setProperty('--mx', String(x * depth));
              layer.style.setProperty('--my', String(y * depth));
            });
          });
        };

        const leave = () => {
          cancelAnimationFrame(frame);
          layers.forEach((layer) => {
            layer.style.setProperty('--mx', '0');
            layer.style.setProperty('--my', '0');
          });
        };

        scene.addEventListener('pointermove', move);
        scene.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          cancelAnimationFrame(frame);
          scene.removeEventListener('pointermove', move);
          scene.removeEventListener('pointerleave', leave);
        });
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      root.classList.remove('vx-js');
    };
  }, []);

  return <div className="vx-progress" aria-hidden="true" />;
}

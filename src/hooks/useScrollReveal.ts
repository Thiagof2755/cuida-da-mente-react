import { useInView } from 'react-intersection-observer';

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'zoomIn' | 'zoomOut' | 'bounce' | 'flip' | 'rotate';
  duration?: 'fast' | 'normal' | 'slow';
  easing?: 'default' | 'bounce' | 'elastic';
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    animation = 'fadeInUp',
    duration = 'normal',
    easing = 'default'
  } = options;

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '0px 0px -50px 0px',
  });

  const getAnimationClass = () => {
    const baseClass = 'scroll-reveal';
    const animationClass = `scroll-reveal--${animation}`;
    const durationClass = `scroll-reveal--duration-${duration}`;
    const easingClass = easing !== 'default' ? `scroll-reveal--ease-${easing}` : '';

    if (inView) {
      return `${baseClass} ${animationClass} ${durationClass} ${easingClass} scroll-reveal--active`.trim();
    }

    return `${baseClass} ${durationClass} ${easingClass}`.trim();
  };

  return {
    ref,
    isVisible: inView,
    animationClass: getAnimationClass(),
  };
};

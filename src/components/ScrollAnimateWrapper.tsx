import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ScrollAnimateWrapperProps {
  children: ReactNode;
  className?: string;
  animationType?: 'default' | 'fade' | 'slide-left' | 'slide-right' | 'scale';
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
}

export const ScrollAnimateWrapper = ({
  children,
  className = '',
  animationType = 'default',
  delay = 0,
}: ScrollAnimateWrapperProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClass = animationType === 'default' 
    ? 'scroll-animate' 
    : `scroll-animate-${animationType}`;
  
  const delayClass = delay > 0 ? `scroll-animate-delay-${delay}` : '';

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};





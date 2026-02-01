import useScrollAnimation from '../hooks/useScrollAnimation';

export default function ScrollAnimatedSection({ children, animation = 'scroll-fade-in', delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div 
      ref={ref} 
      className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
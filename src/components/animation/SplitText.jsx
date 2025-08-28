import { animated, easings, useSprings } from '@react-spring/web';
import React, { useEffect, useRef, useState } from 'react';

const toPlainText = (children) => {
  const parts = React.Children.toArray(children)
    .map(c => (typeof c === 'string' ? c : ''))
    .join(' ');
  return parts.replace(/\s+/g, ' ').trim();
};

const SplitText = ({
  children,
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = easings.easeOutCubic,
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
  firstWordStyle = { color: '#fff' }, // 👈 new prop for styling the first word
}) => {
  const text = toPlainText(children);
  const words = text
    .split(' ')
    .filter(Boolean)
    .map(word => word.split(''));

  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next) => {
            await next(animationTo);
            animatedCount.current += 1;
            if (
              animatedCount.current === letters.length &&
              typeof onLetterAnimationComplete === 'function'
            ) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  // Precompute word start indices
  const letterStartIdxByWord = [];
  let running = 0;
  for (let w = 0; w < words.length; w++) {
    letterStartIdxByWord.push(running);
    running += words[w].length;
  }

  return (
    <span
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
    >
      {words.map((word, wordIndex) => {
        const startIndex = letterStartIdxByWord[wordIndex];
        return (
          <span
            key={wordIndex}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              marginRight: '0.3em',
              ...(wordIndex === 0 ? firstWordStyle : {}), // 👈 apply colour only to first word
            }}
          >
            {word.map((letter, letterIndex) => {
              const index = startIndex + letterIndex;
              return (
                <animated.span
                  key={index}
                  style={{
                    ...springs[index],
                    display: 'inline-block',
                    willChange: 'transform, opacity',
                  }}
                >
                  {letter}
                </animated.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;

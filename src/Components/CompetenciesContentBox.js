import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const CompetenciesContentBox = ({ title, text }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animate = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(animate, {
      root: null,
      rootMargin: '-40px',
      threshold: 1,
    });

    if (containerRef.current) observer.observe(containerRef.current);
  }, [isVisible]);

  return (
    <CompetenciesContentContainer
      ref={containerRef}
      style={{ opacity: `${isVisible ? '1' : '0'}` }}
      className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}
    >
      <h2 className="uppercase letter-spacing-sm">{title}</h2>
      <p>{text}</p>
    </CompetenciesContentContainer>
  );
};

const CompetenciesContentContainer = styled.div`
  padding: 1.3rem 0;

  > h2 {
    font-size: 2vw;
  }

  > p {
    font-size: 1.4vw;
  }

  @media (max-width: 920px) {
    > h2 {
      font-size: 3vw;
    }

    > p {
      font-size: 2vw;
    }
  }

  @media (max-width: 600px) {
    > h2 {
      font-size: 5vw;
    }

    > p {
      font-size: 3vw;
    }
  }
`;

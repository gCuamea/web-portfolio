import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const Competencies = () => {
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
      rootMargin: '0px',
      threshold: 1,
    });

    if (containerRef.current) observer.observe(containerRef.current);
  }, [isVisible]);

  return (
    <CompetenciesContainer>
      <CompetenciesContent
        ref={containerRef}
        style={{ opacity: `${isVisible ? '1' : '0'}` }}
        className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}
      >
        <h2 className="uppercase letter-spacing-sm">Competencias</h2>
        <CompetenciesContentBox>
          <h2 className="uppercase letter-spacing-sm">Tecnologías Web</h2>
          <p>
            HTML5, CSS3/SASS/Bootstrap 5/Styled components, JavaScript (ES6),
            Node.
          </p>
        </CompetenciesContentBox>
        <CompetenciesContentBox>
          <h2 className="uppercase letter-spacing-sm">
            Frameworks / librerías web
          </h2>
          <p>ReactJS, NodeJS, Express, JSON Web Tokens.</p>
        </CompetenciesContentBox>
        <CompetenciesContentBox>
          <h2 className="uppercase letter-spacing-sm">Frameworks de React</h2>
          <p>Redux, React Router, Jest, Enzyme.</p>
        </CompetenciesContentBox>
        <CompetenciesContentBox>
          <h2 className="uppercase letter-spacing-sm">
            Bases de datos & devops
          </h2>
          <p>MongoDB, SQL (DB2), Firestore (Firebase), Git.</p>
        </CompetenciesContentBox>
      </CompetenciesContent>
    </CompetenciesContainer>
  );
};

const CompetenciesContainer = styled.section`
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7rem 0;
`;

const CompetenciesContent = styled.div`
  width: 100%;
  margin: 0 20vw;
  height: 47rem;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  > h2 {
    margin: 2rem 0;
    font-size: 7rem;
    text-align: center;
  }
`;

const CompetenciesContentBox = styled.div`
  > h2 {
    font-size: 2rem;
  }

  > p {
    font-size: 1.6rem;
  }
`;

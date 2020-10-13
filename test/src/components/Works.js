import React from 'react';
import { WorksWrapper, WorksButton } from '../styles/Works.style';
import MinionIMG from '../assets/Group 2556@2x.png';

const Works = () => {
  return (
    <WorksWrapper>
      <div className="works-desc">
        <h2>
          The Process
          <br />
          About Our Work
        </h2>
        <p>
          Tempor culpa proident anim labore do consectetur voluptate ut occaecat mollit exercitation mollit aute. Amet
          reprehenderit exercitation est sint quis laborum labore deserunt consectetur sit.
        </p>
        <p>
          Duis enim sit do magna duis aliquip fugiat deserunt eu. Sunt dolore officia ullamco tempor qui incididunt ut
          laboris.
        </p>
        <WorksButton>Know More</WorksButton>
      </div>
      <div className="works-img">
        <img src={MinionIMG} title="works" alt="works"/>
      </div>
    </WorksWrapper>
  );
};

export { Works };

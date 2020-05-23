import React from 'react';

import GremsImg from '../../assets/grems_grandma_emma2.png';
import PeachesImg from '../../assets/small-aples.png';

import AppCarousel from '../common/appCarousel/AppCarousel';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <AppCarousel />
      <section className='home-about'>
        <img
          className='home-about-img-main'
          src={GremsImg}
          alt='Grandma Emma Large'
        />
        <div className='home-about-text-wrapper'>
          <h2 className='home-about-header'>Old Fashioned Goodness</h2>
          <p className='home-about-text'>
            Grandma Lucy Emma Dawson loved to bake and she loved sharing
            recipes. Among her favorites was her peach cobbler. I remember as a
            child coming to visit. Before I could even get in the door, I’d be
            greeted by the wonderful smells of nutmeg, cinnamon and of course,
            peaches cooking on the stove.
          </p>
          <p className='home-about-text'>
            I’d rush to remove my coat and then make a straight line to the
            kitchen where I’d sit anxiously waiting for that amazing cobbler to
            be done.
          </p>
          <h2 className='home-about-header'>Try it today.</h2>
          <p className='home-about-text'>
            The taste is so incredibly rich and flavorful that everyone will
            think it came straight from your oven instead of ours. But we won’t
            tell!
          </p>

          <img src={PeachesImg} alt='Peaches' />
        </div>
      </section>
    </div>
  );
};

export default Home;

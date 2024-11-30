import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
// import required modules
import { EffectCards } from 'swiper/modules';

import 'swiper/css';

export default function SwipeComponent (
    {
        children
    }
) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [key, setKey] = useState(0); 


  useEffect(() => {
    const handleResize = () => {
      const isNowLargeScreen = window.innerWidth >= 768;
        setIsLargeScreen(isNowLargeScreen);
        setKey((prevKey) => prevKey + 1); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
    key={key}
      spaceBetween={30}
      effect={isLargeScreen ? 'none' : 'cards'}
      grabCursor={!isLargeScreen}
      modules={isLargeScreen ? [] : [EffectCards]}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-screen"
      breakpoints={{

        768: {
            slidesPerView: 5,
            spaceBetween: 0
        }
    }}
    >
    { children.map((child,index)=><SwiperSlide key={index}>{child}</SwiperSlide>)} 
    </Swiper>
  );
};


SwipeComponent.propTypes = {
  children: PropTypes.node.isRequired
}

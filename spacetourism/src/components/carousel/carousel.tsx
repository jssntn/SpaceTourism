import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselProps, CrewMember } from '../../interfaces/interfaces';


export default function CrewCarousel(props: carouselProps) {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
return(
<Carousel responsive={responsive}>
  <li>Item 1</li>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
)
}








// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// // import styles from './carousel.module.css';
// import { carouselProps, CrewMember } from '../../interfaces/interfaces';

// export default function CrewCarousel(props: carouselProps) {
//   const responsive = {
//     all: {
//       breakpoint: { max: 4000, min: 0 },
//       items: 1,
//     },
//   };

//   return (
    

// }

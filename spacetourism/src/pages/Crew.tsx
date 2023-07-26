import Menu from '@/components/menu/menu';
import CrewCarousel from '@/components/carousel/carousel';
import { CrewMember } from '@/interfaces/interfaces';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '@/styles/Crew.module.css';
import { ButtonGroupProps } from 'react-multi-carousel';


export default function Crew() {
  const myCrew = [
      {
        name: 'Douglas Hurley',
        position: 'Commander',
        img: '/img/crew/douglas-hurley.svg',
        bio:
          'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      },
      {
        name: 'Mark Shuttleworth',
        position: 'Mission Specialist',
        img: '/img/crew/mark-shuttleworth.svg',
        bio:
          'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      },
      {
        name: 'Victor Glover',
        position: 'Pilot',
        img: '/img/crew/victor-glover.svg',
        bio:
          'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      },
      {
        name: 'Anousheh Ansari',
        position: 'Flight Engineer',
        img: '/img/crew/anousheh-ansari.svg',
        bio:
          'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      },
    ];

  const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 0 },
        items: 1
      }
    };
  
 

  return (
    <div className={styles.wrapper}>
      <Menu></Menu>
      <h2>
        <span>01 </span> PICK YOUR DESTINATION
      </h2>
      <Carousel className={styles.carousel} swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={false}
        dotListClass={styles.dotList}
        itemClass="carousel-item-padding-40-px"
        >
      {myCrew.map((item:CrewMember, index:number) => 
        {
          // console.log(item);
          return(
          <div className={styles.crewMember} key={index}>
          <h3>{item.name}</h3>
          <img src={item.img} alt={item.name} />
          
        </div>
        )
        }
      )}
    </Carousel>
    </div>
  );
}

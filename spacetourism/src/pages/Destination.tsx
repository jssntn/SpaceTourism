'use client'
import Menu from "@/components/menu/menu"
import styles from "@/styles/Destination.module.css"
import { useState } from "react"

interface destination {
    name: string,
    description: string,
    distance: string,
    travelTime: string
}


export default function Destination(){

    //DESTINATIONS
    const moon:destination = {
        name: "moon",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travelTime: "3 DAYS"
    }

    const mars:destination = {
        name: "mars",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL km",
        travelTime: "9 MONTHS"
    }

    const europa:destination = {
        name: "europa",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL km",
        travelTime: "3 YEARS"
    }

    const titan:destination = {
        name: "titan",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        travelTime: "7 YEARS"
    }

    const [destination, setDestination] = useState<destination>(moon)

    return(
        <div className={styles.wrapper}>
            <div className={styles.overlay}></div>
            <Menu />
            <h2><span>01 </span> PICK YOUR DESTINATION</h2>
            <div className={styles.content}>
                <div className={styles.moonImg}>
                    <img src={"/img/destination/"+destination.name+".svg"} alt="destination.svg" />
                </div>
                <div className={styles.mainContent}>
                    <ul>
                        <li style={destination.name=='moon'? { borderBottom: '3px solid white', fontWeight:'400' } : {} } onClick={()=>{setDestination(moon)}}>MOON</li>
                        <li style={destination.name=='mars'? { borderBottom: '3px solid white', fontWeight:'400' } : {} } onClick={()=>{setDestination(mars)}}>MARS</li>
                        <li style={destination.name=='europa'? { borderBottom: '3px solid white', fontWeight:'400' } : {} } onClick={()=>{setDestination(europa)}}>EUROPA</li>
                        <li style={destination.name=='titan'? { borderBottom: '3px solid white', fontWeight:'400' } : {} } onClick={()=>{setDestination(titan)}}>TITAN</li>
                    </ul> 

                    <h1>{destination.name.toUpperCase()}</h1>

                    <p>{destination.description}</p>

                    <img className={styles.hr} src="/img/destination/horizontalLine.svg" alt="hr.svg" />

                    <div className={styles.contentFooter}>

                        <div className={styles.distance}>
                            <h3>AVG. DISTANCE</h3>
                            <h2>{destination.distance.toUpperCase()}</h2>
                        </div>

                        <div className={styles.travelTime}>
                            <h3>EST. TRAVEL TIME</h3>
                            <h2>{destination.travelTime.toUpperCase()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

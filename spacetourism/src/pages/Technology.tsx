'use client'
import Menu from "@/components/menu/menu"
import styles from "@/styles/Technology.module.css"
import { useState } from "react"
import { Technology} from "@/interfaces/interfaces"

const launchVehicle: Technology = {
    name: 'LAUNCH VEHICLE',
    description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. A launch system includes the launch vehicle, launch pad, vehicle assembly and fuelling systems, range safety, and other related infrastructure.',
    img: '/img/technology/launchVehicle.svg'
}

const spaceport: Technology = {
    name: 'SPACEPORT',
    description: ' A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',   
    img: '/img/technology/spaceport.svg'
}

const spaceCapsule: Technology = {
    name: 'SPACE CAPSULE',
    description: ' A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',   
    img: '/img/technology/spaceCapsule.svg'
}

export default function Technology(){
    const [technology, setTechnology] = useState<Technology>(launchVehicle)
    return(
        <div className={styles.wrapper}>
            <Menu></Menu>
            <h2><span>03 </span> SPACE LAUNCH 101</h2>
            <div className={styles.body}>
                <div className={styles.content}>

                    <ul>
                        <li style={technology==launchVehicle ? {color:'#0B0D17',backgroundColor: 'white'}:{}} onClick={()=>{setTechnology(launchVehicle)}}>
                            1
                        </li>

                        <li style={technology==spaceport? {color:'#0B0D17',backgroundColor: 'white'}:{}} onClick={()=>{setTechnology(spaceport)}}>  
                            2
                        </li>

                        <li style={technology==spaceCapsule ? {color:'#0B0D17',backgroundColor: 'white'}:{}} onClick={()=>{setTechnology(spaceCapsule)}}>
                            3 
                        </li>
                    </ul>

                    <div className={styles.technologyInfo}>
                        <h3>THE TERMINOLOGY...</h3>
                        <h1>{technology.name}</h1>
                        <p>{technology.description}</p>
                    </div>
                    
                </div>

                <div className={styles.mainImage}>
                    <img src={(technology as Technology).img} alt={(technology as Technology).name.toLowerCase()} />
                </div>
            </div>
        </div>
    )
}

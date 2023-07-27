'use client'
import Menu from "@/components/menu/menu"
import styles from "@/styles/Technology.module.css"
import { useState } from "react"

export default function Technology(){
    const [technology, setTechnology] = useState()
    return(
        <div className={styles.wrapper}>
            <Menu></Menu>
            <h2><span>03 </span> SPACE LAUNCH 101</h2>
            <div className={styles.body}>
                <div className={styles.content}>
                    <ul>
                        <li>
                            <h3></h3>
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

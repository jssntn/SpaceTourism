import styles from './menu.module.css'
import { useRouter } from 'next/router'

export default function Menu(){
    const router = useRouter()
    const isActive = (pathname:string) => router.pathname === pathname

    return (
        <div className={styles.wrapper}>
            <div className={styles.menu}>
                <img className={styles.logo} src="/img/menu/logo.svg" alt="logo" />
                <img className={styles.hr} src="/img/menu/horizontalLine.svg" alt="hr.svg" />
                <ul>
                    <li style={isActive('/') ? { borderBottom: '2px solid white' } : {}}>
                        <span>0 0 </span>  <a href="#"> H O M E</a>
                    </li>
                    <li>
                        <span>0 1</span><a href="">  D E S T I N A T I O N</a>
                    </li>
                    <li>
                        <span>0 2</span><a href="">  C R E W</a>
                    </li>
                    <li>
                        <span>0 3</span> <a href=""> T E C H N O L O G Y</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
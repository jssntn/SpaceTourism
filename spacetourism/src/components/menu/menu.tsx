import styles from './menu.module.css'
import { useRouter } from 'next/router'

export default function Menu(){
    const router = useRouter()
    const isActive = (pathname:string) => router.pathname === pathname

    return (
            <div className={styles.menu}>
                <img className={styles.logo} src="/img/menu/logo.svg" alt="logo" />
                <img className={styles.hr} src="/img/menu/horizontalLine.svg" alt="hr.svg" />
                <ul>
                    <li style={isActive('/') ? { borderBottom: '3px solid white' } : {}}>
                        <a href="/"><span>0 0 </span>  H O M E</a>
                    </li>
                    <li style={isActive('/Destination') ? { borderBottom: '3px solid white' } : {}}>
                        <a href="/Destination"><span>0 1</span> D E S T I N A T I O N</a>
                    </li>
                    <li style={isActive('/Crew') ? { borderBottom: '3px solid white' } : {}}>
                        <a href="/Crew"> <span>0 2</span>  C R E W</a>
                    </li>
                    <li style={isActive('/Technology') ? { borderBottom: '3px solid white' } : {}}>
                        <a href="/Technology"><span>0 3</span> T E C H N O L O G Y</a>
                    </li>
                </ul>
            </div>
    )
}
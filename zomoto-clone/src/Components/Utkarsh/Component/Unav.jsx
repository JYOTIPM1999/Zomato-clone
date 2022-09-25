import styles from "./Unav.module.css"
import zomato from "../img/zomatologo.jpg"

export default function Unav(){

    return (
        
        <nav >
            <div >
                <ul>
                    <li><img src={zomato} alt="" /></li>
                    <li>|</li>
                    <li>Inverstor Relations</li>
                </ul>

            </div>
            <ul className={styles.menu}>
                <li >FINANCIALS</li>
                <li>NEWS & EVENTS</li>
                <li>GOVERNANCE</li>
                <li>ESG INITIATIVES</li>
                <li>RESOURCES</li>
            </ul>

            <div className={styles.burger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    
    )
}
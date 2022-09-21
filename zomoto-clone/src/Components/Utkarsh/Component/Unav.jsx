import styles from "./Unav.moudle.css"
import zomato from "../img/zomatologo.jpg"

export default function Unav(){

    return (
        <>
        <nav>
            <div>
                <ul>
                    <li><img src={zomato} alt="" /></li>
                    <li>|</li>
                    <li>Inverstor Relations</li>
                </ul>

            </div>
            <ul>
                <li>FINANCIALS</li>
                <li>NEWS & EVENTS</li>
                <li>GOVERNANCE</li>
                <li>ESG INITIATIVES</li>
                <li>RESOURCES</li>
            </ul>
        </nav>
        </>
    )
}
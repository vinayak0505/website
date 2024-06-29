import { Certificate, certificates } from "../constans";
import Styles from "./Certificates.module.scss";


const Item = ({ item }: { item: Certificate }) => {
    return <a className={Styles.item} href={item.link}>
        <img className={Styles.image} src={item.image} alt={item.title} />
        <div className={Styles.title}>{item.title}</div>
    </a>
}

const Certificates = () => {
    return (
        <div id="certificates" className={Styles.certificates}>
            <div className={Styles.title}>Certified Awesome</div>
            <div className={Styles.subtitle}>
                Keeping my self updated with latest technologies<br />
                Here are some of my certifications.
            </div>
            <div className={Styles.items}>
                {
                    certificates.map(item => <Item item={item} />)
                }
            </div>
        </div>
    )
}

export default Certificates;
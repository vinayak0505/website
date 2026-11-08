import { Certificate, certificates } from "../constans";
import Styles from "./Certificates.module.scss";

const Item = ({ item }: { item: Certificate }) => {
    const content = <>
        {item.image ? (
            item.link ? (
                <img className={Styles.image} src={process.env.PUBLIC_URL + item.image} alt={`${item.title}, issued by ${item.issuer}`} loading="lazy" />
            ) : (
                <a className={Styles.imageLink} href={process.env.PUBLIC_URL + item.image} target="_blank" rel="noreferrer" aria-label={`Open full image of ${item.title}`}>
                    <img className={Styles.image} src={process.env.PUBLIC_URL + item.image} alt={`${item.title}, issued by ${item.issuer}`} loading="lazy" />
                </a>
            )
        ) : (
            <div className={Styles.placeholder} aria-hidden="true">{item.category}</div>
        )}
        <div className={Styles.details}>
            <div className={Styles.title}>{item.title}</div>
            <div className={Styles.issuer}>{item.issuer}</div>
            {item.date && <div className={Styles.date}>{item.date}</div>}
            {item.detail && <div className={Styles.detail}>{item.detail}</div>}
        </div>
    </>;

    return item.link ? (
        <a className={Styles.item} href={item.link} target="_blank" rel="noreferrer">
            {content}
        </a>
    ) : (
        <article className={Styles.item}>{content}</article>
    );
}

const Certificates = () => {
    return (
        <div id="certificates" className={Styles.certificates}>
            <div className={Styles.title}>Certificates &amp; Recognition</div>
            <div className={Styles.subtitle}>
                Professional certifications, technical courses, and recognition.
            </div>
            <div className={Styles.items}>
                {
                    certificates.map((item) => <Item key={`${item.issuer}-${item.title}-${item.date ?? ""}`} item={item} />)
                }
            </div>
        </div>
    )
}

export default Certificates;
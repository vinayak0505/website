import Styles from './Expertise.module.scss';
import { expertise } from '../constants';

const Item = ({ img, title, info }: { img: string, title: string, info: string }) => {
    return (<div className={Styles.item}>
        <img className={Styles.icon} src={img} alt="" />
        <div className={Styles.about}>
            <div className={Styles.title}>{title}</div>
            <div className={Styles.info}>{info}</div>
        </div>
    </div>
    );
}

const Expertise = () => {
    return (
        <div id='expertise' className={Styles.expertise}>
            <div className={Styles.left}>
                {expertise.services.map((service) => (
                    <Item key={service.title} img={service.icon} title={service.title} info={service.description} />
                ))}
            </div>
            <div className={Styles.right}>
                <div className={Styles.title}>{expertise.title}</div>
                {expertise.descriptions.map((description) => (
                    <div key={description} className={Styles.about}>{description}</div>
                ))}
                <div className={Styles.gap}/>
                <div className={Styles.items}>
                    {expertise.profiles.map((profile) => (
                        <a key={profile.label} href={profile.url} target="_blank" rel="noreferrer">
                            <div className={Styles.title}>{profile.value}</div>
                            <div className={Styles.about}>{profile.label}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Expertise;
import Styles from './Experties.module.scss';
import frontend from '../assets/frontend.svg';
import backend from '../assets/backend.svg';
import devops from '../assets/devops.svg';
import { about, about2 } from '../constans';

const Item = ({ img, title, info }: { img: string, title: string, info: string }) => {
    return (<div className={Styles.item}>
        <img className={Styles.icon} src={img} alt={title} />
        <div className={Styles.about}>
            <div className={Styles.title}>{title}</div>
            <div className={Styles.info}>{info}</div>
        </div>
    </div>
    );
}

const Experties = () => {
    return (
        <div id='expertise' className={Styles.experties}>
            <div className={Styles.left}>
                <Item img={frontend}
                    title="Front End Developer"
                    info="With 2+ years of experience i can create a beautiful and interactive user interface use React, Redux and TypeScript"
                />
                <Item img={backend}
                    title="Backend End Developer"
                    info="With 2+ years of experience i create REST API's with Node, Express and TypeScript with MongoDB, PostgreSQL, MySQL and redis database"
                />
                <Item img={devops}
                    title="DevOps End Developer"
                    info="With 1+ years of experience i can deploy and maintain the application using AWS, GCP and Kubernetes"
                />
            </div>
            <div className={Styles.right}>
                <div className={Styles.title}>Things that i do</div>
                <div className={Styles.about}>{about}</div>
                <div className={Styles.about}>{about2}</div>
                <div className={Styles.gap}/>
                <div className={Styles.items}>
                    <a href='https://codechef.com/users/vinayakagg05' target='_blank' rel='noreferrer'>
                        <div className={Styles.title}>4Star</div>
                        <div className={Styles.about}>CodeChef</div>
                    </a>
                    <a href='https://leetcode.com/u/vinayakaggarwal05/' target='_blank' rel='noreferrer'>
                        <div className={Styles.title}>1000+</div>
                        <div className={Styles.about}>leetcode solved</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experties;
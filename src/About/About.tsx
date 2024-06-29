import { email, icons, info } from '../constans';
import Styles from './About.module.scss';

const About = () => {
    return (
        <div id='contact' className={Styles.about}>
            <div className={Styles.align}>
                <div className={Styles.title}>Let's make something<br />amazing together.</div>
                <div className={Styles.gap}></div>
                <div>
                    <span className={Styles.title}>Start by </span>
                    <a className={Styles.link} href={'mailto:' + email.emailId + "?subject=" + email.subject} target='_blank' rel='noreferrer'>Saying Hi</a>
                </div>
            </div>
            <div className={Styles.align}>
                {
                    info.map((item, index) => <div key={index} >
                        <div className={Styles.heading}>{item.heading}</div>
                        <div>{item.info}</div>
                    </div>)
                }
                <div className={Styles.gap}></div>
                <div className={Styles.icons}>
                    {
                        icons.map((item, index) => <a key={index} title={item.tooltip} href={item.link}>
                            <img className={Styles.icon} src={item.icon} alt={item.tooltip} />
                        </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default About;
import { email, icons, info } from '../constans';
import Styles from './About.module.scss';

const About = () => {
    return (
        <div id='contant' className={Styles.about}>
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
                    info.map((item, index) => <div>
                        <div key={index} className={Styles.heading}>{item.heading}</div>
                        <div key={index} >{item.info}</div>
                    </div>)
                }
                <div className={Styles.gap}></div>
                <div className={Styles.icons}>
                    {
                        icons.map((item, index) => <a title={item.tooltip} href={item.link}>
                            <img className={Styles.icon} key={index} src={item.icon} alt={item.tooltip} />
                        </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default About;
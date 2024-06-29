import { Fragment } from 'react/jsx-runtime';
import { experience } from '../constans';
import Styles from './Experience.module.scss';

const Divider = ({ color }: { color: string }) => {
    return (
        <div className={Styles.divider}>
            <div className={Styles.dot}>
                <div className={Styles.color} style={{ backgroundColor: color }} />
            </div>
            <div className={Styles.line}></div>
        </div>
    );
}
const Experience = () => {
    return <div id='experience' className={Styles.experience}>
        <div className={Styles.title}>My Work Experience</div>
        <div className={Styles.grid}>
            {
                experience.map((item, key) =>
                    <Fragment key={key}>
                        <div>
                            <div className={Styles.heading}>{item.company}</div>
                            <div className={Styles.subheading}>{item.duration}</div>
                        </div>
                        <Divider color={item.color} />
                        <div>
                            <div className={Styles.heading}>{item.designation}</div>
                            <div className={Styles.subheading}>{item.about}</div>
                        </div>
                    </Fragment>
                )
            }
        </div>
    </div>;
};

export default Experience;
import { skills } from '../constans';
import Styles from './Skills.module.scss';

const Skills = () => {
    return (
        <div id='skills' className={Styles.skills}>
            <div className={Styles.title}>Skillset</div>
            <div>My Superpowers (Not Really, But They're Pretty Cool)</div>
            <div className={Styles.items}>
                {
                    skills.map((skill, index) => <>
                        <div key={index} className={Styles.heading}>{skill.type}</div>
                        {
                            skill.items.map((item, i) => <div key={i} className={Styles.item}>
                                <img className={Styles.image} src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                                <div className={Styles.name}>{item.name}</div>
                            </div>)
                        }
                    </>)
                }
            </div>
        </div>
    )
}

export default Skills

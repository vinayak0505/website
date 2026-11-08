import { skills } from '../constans';
import Styles from './Skills.module.scss';

const Skills = () => {
    return (
        <div id='skills' className={Styles.skills}>
            <div className={Styles.title}>Skillset</div>
            <div className={Styles.subtitle}>Full-stack developer focused on Java and Spring Boot, with frontend leadership experience across web, mobile, and AI search tools.</div>
            <div className={Styles.legend} aria-label="Skill usage legend">
                <span><i className={Styles.diamond} />Most used</span>
                <span><i className={Styles.gold} />Frequently used</span>
                <span><i className={Styles.silver} />Used professionally</span>
                <span><i className={Styles.project} />Project experience</span>
            </div>
            <div className={Styles.items}>
                {skills.map((skill) => (
                    <section key={skill.type} className={Styles.group}>
                        <h2 className={Styles.heading}>{skill.type}</h2>
                        <div className={Styles.groupItems}>
                            {skill.items.map((item) => (
                                <div
                                    key={item.name}
                                    className={`${Styles.item} ${item.tier ? Styles[item.tier] : ""}`}
                                    title={item.tier ? ({ diamond: "Most used", gold: "Frequently used", silver: "Used professionally" }[item.tier]) : "Project experience"}
                                >
                                    {item.image ? (
                                        <img className={Styles.image} src={process.env.PUBLIC_URL + item.image} alt="" loading="lazy" />
                                    ) : (
                                        <span className={Styles.initial} aria-hidden="true">{item.name.slice(0, 2)}</span>
                                    )}
                                    <div className={Styles.name}>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Skills

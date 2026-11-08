import Styles from './Experties.module.scss';
import frontend from '../assets/frontend.svg';
import backend from '../assets/backend.svg';
import devops from '../assets/devops.svg';
import ai from '../assets/ai.svg';
import { about, about2 } from '../constans';

const Item = ({ img, title, info }: { img?: string, title: string, info: string }) => {
    return (<div className={Styles.item}>
        {img && <img className={Styles.icon} src={img} alt="" />}
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
                    title="Frontend Developer"
                    info="With 3+ years of experience, I build interactive user interfaces with React, Redux and TypeScript."
                />
                <Item img={backend}
                    title="Backend Developer"
                    info="With 3+ years of experience, I build backend applications and APIs with Node.js, Express, MongoDB, Java and Spring Boot."
                />
                <Item img={devops}
                    title="DevOps Engineer"
                    info="With 1+ years of experience, I deploy and maintain applications using AWS and GCP."
                />
                <Item
                    img={ai}
                    title="AI-assisted Development"
                    info="Created reusable context files for GitHub Copilot, enabling developers with limited frontend experience to build UI that follows our codebase and design conventions."
                />
            </div>
            <div className={Styles.right}>
                <div className={Styles.title}>Things that I do</div>
                <div className={Styles.about}>{about}</div>
                <div className={Styles.about}>{about2}</div>
                <div className={Styles.about}>
                    Beyond using AI tools, I make them more useful for the whole team by documenting how our codebase is structured and how UI should be built. Shared Copilot instructions let developers apply those conventions while generating UI, and I review the results to keep the code aligned with the project.
                </div>
                <div className={Styles.gap}/>
                <div className={Styles.items}>
                    <a href='https://codechef.com/users/vinayakagg05' target='_blank' rel='noreferrer'>
                        <div className={Styles.title}>4★</div>
                        <div className={Styles.about}>CodeChef</div>
                    </a>
                    <a href='https://leetcode.com/u/vinayakaggarwal05/' target='_blank' rel='noreferrer'>
                        <div className={Styles.title}>1400+</div>
                        <div className={Styles.about}>leetcode solved</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experties;
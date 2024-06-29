import { Project, projects } from "../constans";
import Styles from "./Projects.module.scss";

const Item = ({ item }: { item: Project }) => {
    return (
        <div className={Styles.item}>
            <img className={Styles.image} src={item.image} alt={item.title} />
            <div className={Styles.heading}>{item.title}</div>
            <div >{item.about}</div>
            <a className={Styles.button} href={item.link} target='_blank' rel='noreferrer'>Explore</a>
        </div>
    )
}
const Projects = () => {
    return (
        <div id="projects" className={Styles.projects}>
            <div className={Styles.title}>My Latest Work</div>
            <div className={Styles.sub}>
                <div>From Code to Clicks: Where Ideas Take Shape!</div>
                <a href="https://github.com/vinayak0505" target='_blank' rel='noreferrer' className={Styles.right}>Explore More on GitHub</a>
            </div>
            <div className={Styles.items}>
                {
                    projects.map((item,index) =>  <Item key={index} item={item} />)
                }
            </div>
        </div>
    )
}

export default Projects;
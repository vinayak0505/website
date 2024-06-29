import { Project, projects } from "../constans";
import Styles from "./Projects.module.scss";

const Item = ({ item }: { item: Project }) => {
    return (
        <div className={Styles.item}>
            <img className={Styles.image} src={item.image} alt={item.title} />
            <div className={Styles.heading}>{item.title}</div>
            <div >{item.about}</div>
            <a className={Styles.button} href={item.link} >Explore</a>
        </div>
    )
}
const Projects = () => {
    return (
        <div id="projects" className={Styles.projects}>
            <div className={Styles.title}>My Latest Work</div>
            <div className={Styles.sub}>
                <div>Perfect solution for digital experience</div>
                <a href="https://github.com/vinayak0505" className={Styles.right}>Explore More on GitHub</a>
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
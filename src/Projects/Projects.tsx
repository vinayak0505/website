import { Project, projects } from "../constans";
import Styles from "./Projects.module.scss";


const Item = ({ item }: { item: Project }) => {
    return <a className={Styles.item} href={item.link}>
        <img className={Styles.image} src={item.image} alt={item.title} />
        <div className={Styles.title}>{item.title}</div>
    </a>
}
const Projects = () => {
    return (
        <div id="projects" className={Styles.projects}>
            <div className={Styles.title}>My Latest Work</div>
            <div className={Styles.sub}>
                <div>Perfect solution for digital experience</div>
                <a href="https://github.com/vinayak0505" className={Styles.right}>Check Out All Projects on GitHub</a>
            </div>
            <div className={Styles.items}>
                {
                    projects.map(item => <Item item={item} />)
                }
            </div>
        </div>
    )
}

export default Projects;
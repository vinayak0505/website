import { Project, projects } from "../constans";
import Styles from "./Projects.module.scss";

const Item = ({ item, featured = false }: { item: Project, featured?: boolean }) => {
    return (
        <article className={featured ? Styles.featuredItem : Styles.compactItem}>
            {item.images.length > 0 ? (
                <div className={`${Styles.gallery} ${item.images.length === 2 ? Styles.twoImages : ""}`}>
                    {item.images.slice(0, 3).map((image) =>
                        <img key={image.src} className={Styles.image} src={process.env.PUBLIC_URL + image.src} alt={image.alt} loading="lazy" />
                    )}
                </div>
            ) : (
                <div className={Styles.placeholder} aria-label="Project work in progress">In progress</div>
            )}
            <div className={Styles.content}>
                <div className={Styles.headingRow}>
                    <h3 className={Styles.heading}>{item.title}</h3>
                    {item.status && <span className={Styles.status}>{item.status}</span>}
                </div>
                <p className={Styles.about}>{item.about}</p>
                {item.highlights && (
                    <ul className={Styles.highlights}>
                        {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                )}
                <div className={Styles.technologies}>
                    {item.technologies.map((technology) => <span className={Styles.technology} key={technology}>{technology}</span>)}
                </div>
                <div className={Styles.links}>
                    {item.links.map((link) =>
                        <a key={link.label} className={Styles.button} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                    )}
                </div>
            </div>
        </article>
    )
}
const Projects = () => {
    const featuredProjects = projects.filter((item) => item.featured);
    const otherProjects = projects.filter((item) => !item.featured);

    return (
        <div id="projects" className={Styles.projects}>
            <div className={Styles.title}>Things I’ve Built</div>
            <div className={Styles.sub}>
                <div>A closer look at products, experiments, and ideas I’ve built.</div>
                <a href="https://github.com/vinayak0505" target='_blank' rel='noreferrer' className={Styles.right}>Explore More on GitHub</a>
            </div>
            <div className={Styles.featuredItems}>
                {
                    featuredProjects.map((item) => <Item key={item.title} item={item} featured />)
                }
            </div>
            <h2 className={Styles.moreTitle}>More projects</h2>
            <div className={Styles.compactItems}>
                {otherProjects.map((item) => <Item key={item.title} item={item} />)}
            </div>
        </div>
    )
}

export default Projects;
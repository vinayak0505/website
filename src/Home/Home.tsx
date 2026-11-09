import { useEffect, useMemo, useRef } from 'react';
import Styles from './Home.module.scss';
import { homeContent } from '../constants';

const Home = ({ setShowTitle }: { setShowTitle: (value: boolean) => void }) => {
    const titleRef = useRef<HTMLDivElement>(null);

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setShowTitle(!entry.isIntersecting)
    ), [setShowTitle])


    useEffect(() => {
        if (titleRef?.current == null) return;
        observer.observe(titleRef.current)
        return () => observer.disconnect()
    }, [titleRef, observer])

    return (
        <div id='about' className={Styles.home}>
            <div className={Styles.top}>
                <div ref={titleRef} className={Styles.title}>{homeContent.greeting}<br />I'm <u>{homeContent.name}</u></div>
                <div className={Styles.subtitle}>{homeContent.role}<br />{homeContent.employer} · {homeContent.location}</div>
            </div>
            <a className={Styles.resume} href={homeContent.resume.url} target='_blank' rel='noreferrer'>{homeContent.resume.label}</a>
            <div className={Styles.bottom}>
                <div className={Styles.collage}>
                    <div className={Styles.metric}><span className={Styles.value}>{homeContent.education.metric}</span><span>{homeContent.education.metricLabel}</span></div>
                    <div className={Styles.detail}>{homeContent.education.degree}<br />{homeContent.education.institution}</div>
                </div>
                <div className={Styles.experience}>
                    <div className={Styles.metric}><span className={Styles.value}>{homeContent.experience.metric}</span><span>{homeContent.experience.metricLabel}</span></div>
                    <div className={Styles.detail}>{homeContent.experience.details[0]}<br />{homeContent.experience.details[1]}</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
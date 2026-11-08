import { useEffect, useMemo, useRef } from 'react';
import Styles from './Home.module.scss';

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
                <div ref={titleRef} className={Styles.title}>Hi there,<br />I'm <u>Vinayak Agarwal</u></div>
                <div className={Styles.subtitle}>Associate Full stack Developer<br />Goldman Sachs · Hyderabad (on-site)</div>
            </div>
            <a className={Styles.resume} href='https://drive.google.com/drive/folders/1rquZ_MipJIYiSyocuwfGbvmUqo3D9ngP' target='_blank' rel='noreferrer'>Download Resume</a>
            <div className={Styles.bottom}>
                <div className={Styles.collage}>
                    <div className={Styles.metric}><span className={Styles.value}>9</span><span>Out of 10 CGPA</span></div>
                    <div className={Styles.detail}>B.Tech in Computer Science and Engineering (July 2019 - July 2023)<br />Guru Tegh Bahadur Institute of Technology (GGSIPU)</div>
                </div>
                <div className={Styles.experience}>
                    <div className={Styles.metric}><span className={Styles.value}>3+</span><span>Years of experience since graduating</span></div>
                    <div className={Styles.detail}>4+ years counting full-time work from July 2022, during my final year<br />1.5 years of internship experience</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
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
                <div className={Styles.subtitle}>I design and develop<br />MERN Applications.</div>
            </div>
            <a className={Styles.resume} href='https://drive.google.com/drive/folders/1rquZ_MipJIYiSyocuwfGbvmUqo3D9ngP' target='_blank' rel='noreferrer'>Download Resume</a>
            <div className={Styles.bottom}>
                <div className={Styles.collage}> Out of 10 CGPA<br />Software Engineering (June 2019 - June 2023)<br />Guru Teg Bhadur Institute of Technology</div>
                <div className={Styles.experience}> Years of Experience<br />+1.5 Years of Internship</div>
            </div>
        </div>
    );
};

export default Home;
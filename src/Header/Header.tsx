import Styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={Styles.header}>
            <a href='#about' className={Styles.name}>Vinayak</a>
            <div className={Styles.nav}>
                <a href='#expertise' className={Styles.item}>Experties</a>
                <a href='#experience' className={Styles.item}>Experience</a>
                <a href='#projects' className={Styles.item}>Projects</a>
                <a href='#certificates' className={Styles.item}>Certificates</a>
                <a href='#contact' className={Styles.item}>Contact</a>
            </div>
        </div>
    );
};

export default Header;
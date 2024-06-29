import Styles from './Header.module.scss';

const Header = ({showTitle, showLine}: {showTitle: boolean, showLine: boolean}) => {
    return (
        <div className={Styles.header} style={{ borderBottom: showLine ? '1px solid var(--primary-color)' : 'none' }}>
            <a href='#about' className={Styles.name} style={{ opacity: showTitle ? '1' : '0' }}>Vinayak</a>
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
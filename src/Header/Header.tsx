import { useRef, useState } from 'react';
import Styles from './Header.module.scss';

const Header = ({showTitle, showLine}: {showTitle: boolean, showLine: boolean}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <header className={Styles.header} style={{ borderBottom: showLine ? '1px solid var(--primary-color)' : 'none' }}>
            <a
                href='#about'
                className={Styles.name}
                style={{ opacity: showTitle ? '1' : '0' }}
                aria-hidden={!showTitle}
                tabIndex={showTitle ? 0 : -1}
            >
                Vinayak
            </a>
            <button
                type="button"
                className={Styles.menuButton}
                ref={menuButtonRef}
                aria-expanded={isMenuOpen}
                aria-controls="section-navigation"
                aria-label={isMenuOpen ? "Close section navigation" : "Open section navigation"}
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>
            <nav
                id="section-navigation"
                className={`${Styles.nav} ${isMenuOpen ? Styles.navOpen : ""}`}
                aria-label="Section navigation"
                onKeyDown={(event) => {
                    if (event.key === 'Escape' && isMenuOpen) {
                        setIsMenuOpen(false);
                        menuButtonRef.current?.focus();
                    }
                }}
            >
                <a href='#expertise' className={Styles.item} onClick={() => setIsMenuOpen(false)}>Expertise</a>
                <a href='#experience' className={Styles.item} onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href='#projects' className={Styles.item} onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href='#certificates' className={Styles.item} onClick={() => setIsMenuOpen(false)}>Certificates</a>
                <a href='#skills' className={Styles.item} onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href='#contact' className={Styles.item} onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;
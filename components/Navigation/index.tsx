import Link from 'next/link';

import styles from './index.module.css';

export function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <Link href={'/'}>{'🏠'}</Link>
            <Link href={'/adv'}>{'/adv'}</Link>
            <Link href={'/more'}>{'/more'}</Link>
        </nav>
    );
}

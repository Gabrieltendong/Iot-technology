import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss'

const Navbar = () => {
    return (
        <div id={styles.navbar_wrapper} >
            <div>
                <div id={styles.logo_wrapper}>
                    <Link href={'/'}>
                        <Image
                            id={styles.logo}
                            src={'/assets/icons/IOT.png'}
                            layout='fill'
                        />
                    </Link>
                </div>
            </div>
            <div id={styles.navbar}>
                <Link href='#'> Nos formations</Link>
                <Link href='#'> Tarifs</Link>
                <Link href='#'> Entreprise</Link>
                <Link href='/ebook'>Ebook</Link >
                <Link href='/register'>Inscription</Link>
                <Link href='/login'>Connection</Link>
            </div>
        </div>
    )
}

export default Navbar;
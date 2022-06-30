import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss'

const Navbar = () => {
    return (
        <div id={styles.nabbar_wrapper} >
            <div>
                <div id={styles.logo_wrapper}>
                    <Image
                        id={styles.logo}
                        src={'/assets/icons/IOT.png'}
                        layout='fill'
                    />
                </div>
            </div>
            <div id={styles.navbar}>
                <Link href='#'>
                    <a>Nos formations</a>
                </Link>
                <Link href='#'>
                    <a>Tarifs</a>
                </Link>
                <Link href='#'>
                    <a>Entreprise</a>
                </Link>
                <Link href='/ebook'>
                    <a>Ebook</a>
                </Link >
                <Link href='/register'>
                    <a>Incription</a>
                </Link>
                <Link href='/login'>
                    <a>Connexion</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
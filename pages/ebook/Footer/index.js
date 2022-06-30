import styles from './style.module.scss'
import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'
import Image from 'next/image';

const Footer = () => {
    return (
        <div id={styles.footer_wrapper} >
            <div id={styles.logo_wrapper}>
                <div id={styles.logo}>
                    <Image
                        src={'/assets/icons/logo_white.png'}
                        layout='fill'
                    />
                </div>
            </div>
            <div>
                <div id={styles.rs_wrapper}>
                    <h3>Suivez nous sur</h3>
                    <div id={styles.icon_wrapper} >
                        <div className={styles.icon_rounder}>
                            <FaLinkedin 
                                color='#EB0000'
                                size={20}
                            />
                        </div>
                        <div className={styles.icon_rounder}>
                            <FaInstagram 
                                color='#EB0000'
                                size={20}
                            />
                        </div>
                        <div className={styles.icon_rounder}>
                            <FaFacebook 
                                color='#EB0000'
                                size={20}
                            />
                        </div>
                        <div className={styles.icon_rounder}>
                            <FaTwitter 
                                color='#EB0000'
                                size={20}
                            />
                        </div>
                        <div className={styles.icon_rounder}>
                            <FaYoutube 
                                color='#EB0000'
                                size={20}
                            />
                        </div>
                    </div>
                </div>
                <div id={styles.copyright_wrapper}>
                    <h3>2022-IOT Technology</h3>
                    <p>politique de confidentialite</p>
                </div>
            </div>
            <div>
                <h3>Nous contacter</h3>
                <p>28, Rue Lorem ipsum, Paris, France</p>
                <p>Tel: (000) 00 000 00</p>
                <p>Email: email@email.com</p>
            </div>
        </div>
    )
}

export default Footer;
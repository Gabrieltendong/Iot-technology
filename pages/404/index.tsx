import Link from "next/link"
import Image from 'next/image'
import { useEffect } from "react"
import { useRouter } from "next/router"
import styles from './style.module.scss'

const NotFound = () => {
 const router = useRouter();

 useEffect(() => {
    // setTimeout(() => {
    //     router.push('/');
    // }, 3000)
 }, [])

 return (
    <>

    <div className={styles.container}>
         <div id={styles.image_wrapper}>
            <Image src='/assets/icons/img1.svg' alt="" layout='fill'/>
         </div>
         <h1 className={styles.h1}>La page demandée n'a pas été trouvée</h1>
         <p>Retour à la maison <Link href="/">Acceuil</Link></p>
     </div>
     </>
 );
}

export default NotFound;

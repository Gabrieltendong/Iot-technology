import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaUser, FaKey } from 'react-icons/fa'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'

import styles from './style.module.scss'

const Forgot_password = () => {
  return (
    <div>
      <Head>
        <title>Inscription</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={styles.forgot_password_wrapper}>
        <div id={styles.logo_wrapper}>
          <Image
            src={'/assets/icons/IOT.png'}
            layout='fill'
          />
        </div>
        <div id={styles.card}>
          <h3>réinitialisation de votre mot de passe</h3>
          <div id={styles.divided}></div>
          <p>Entrez votre email et on vous envera un lien pour réinitialiser votre mot de passe</p>
          <Input
            label={'Email'}
          />
          <Button
            text={'Envoyer'}
            style={styles.btn}
          />
        </div>
        <footer>
          <span>© 2022 - IOT Technology</span>
        </footer>
      </main>
    </div>
  )
}

export default Forgot_password 

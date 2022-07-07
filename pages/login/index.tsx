import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaUser, FaKey, FaMailBulk } from 'react-icons/fa'
import Button from '../../components/common/Button'
import styles from './style.module.scss'

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={styles.login_wrapper}>
        <div id={styles.logo_wrapper}>
          <Image
            src={'/assets/icons/IOT.png'}
            layout='fill'
          />
        </div>
        <div id={styles.card}>
          <h3>Connection</h3>
          <div className={styles.input_wrapper}>
            <label>Email</label>

            <div className={styles.input} >
                <FaUser 
                  color='#EB0000'
                  size={14}
                />
                <div className={styles.vertical_divided} >
                </div>
                <input
                  placeholder=''
                />
            </div>
          </div>
          <div className={styles.input_wrapper}>
            <label>Mot de passe</label>
            <div className={styles.input} >
                <FaKey
                  color='#EB0000'
                  size={14}
                />
                <div className={styles.vertical_divided} />
                <input
                  placeholder=''
                />
            </div>
            <Link href={'/forgot-password'}>Mot de passe oublié?</Link>
          </div>
          <Button
            text={'Connection'}
            style={styles.btn}
          />
        </div>
        <h2>Utilisez une autre méthode pour vous connecter </h2>
        <div id={styles.content_rs}>
            <div className={styles.rs_wrapper}>
              <Image src={'/assets/icons/google.png'} layout='fill'
              />
            </div>
            <div className={styles.rs_wrapper}>
              <Image src={'/assets/icons/github.png'} layout='fill'
              />
            </div>
            <div className={styles.rs_wrapper}>
              <Image src={'/assets/icons/linkedin.png'} layout='fill'
              />
            </div>
        </div>
        <p>Vous n’avez pas de compte ? 
          <Link href={'/register'}>Créer un compte gratuitement</Link>
        </p>

        <footer>
          <span>© 2022 - IOT Technology</span>
        </footer>
      </main>
    </div>
  )
}

export default Login 

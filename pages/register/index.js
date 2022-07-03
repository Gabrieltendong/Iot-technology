import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaUser, FaKey } from 'react-icons/fa'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'

import styles from './style.module.scss'

const Register = () => {
  return (
    <div>
      <Head>
        <title>Inscription</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={styles.register_wrapper}>
        <div id={styles.logo_wrapper}>
          <Image
            src={'/assets/icons/IOT.png'}
            layout='fill'
          />
        </div>
        <div id={styles.card}>
          <h3>Inscription</h3>
          <div id={styles.grid}>
            <div id={styles.col_1}>
              <div className={styles.item}>
                <div className={styles.row}>
                  <Image
                    src={'/assets/icons/1.png'}
                    height={40}
                    width={40}
                  />
                  <h3>Apprentissage rapide</h3>
                </div>
                <p>Profitez d'un apprentissage rapide des fondamentaux.</p>
              </div>
              <div className={styles.item}>
                <div className={styles.row}>
                  <Image
                    src={'/assets/icons/video.png'}
                    height={40}
                    width={40}
                  />
                  <h3>Vidéos à la demande</h3>
                </div>
                <p>Profitez d'un support de cours adapté et attrayant.</p>
              </div>
              <div className={styles.item}>
                <div className={styles.row}>
                  <Image
                    src={'/assets/icons/2.png'}
                    height={40}
                    width={40}
                  />
                  <h3>Progressez</h3>
                </div>
                <p>Notez votre progression et revenez plus tard.</p>
              </div>
            </div>
            <div id={styles.divided}></div>
            <div id={styles.col_2}>
              <div id={styles.content_rs}>
                <Image
                  src={'/assets/icons/link_google.png'}
                  height={50}
                  width={100}
                />
                <Image
                  src={'/assets/icons/link_github.png'}
                  height={50}
                  width={100}
                />
                <Image
                  src={'/assets/icons/link_linkedin.png'}
                  height={50}
                  width={100}
                />
              </div>
              <div id={styles.row}>
                <div className={styles.outline}></div>
                <p>OU</p>
                <div className={styles.outline}></div>
              </div>
              <Input
                label={'Prénom'}
              />
              <Input
                label={'Nom'}
              />
              <Input
                label={'Émail'}
              />
              <Input
                label={'Mot de passe'}
              />
              <p id={styles.link_cgu}>En créant un compte vous acceptez les  
                <Link href={'#'}>
                  <a> conditions générales d'utilisation</a>
                </Link>
              </p>
              <Button
                text={'Inscription'}
                style={styles.btn}
              />
              <p id={styles.link_login}>Vous avez déjà un compte ?  
                <Link href={'/register'}>
                  <a>Connectez-vous</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <footer>
          <span>© 2022 - IOT Technology</span>
        </footer>
      </main>
    </div>
  )
}

export default Register 

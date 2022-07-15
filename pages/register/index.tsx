import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaUser, FaKey } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import { AppDispatch } from '../../src/app/store'
import { clearData, registerSelector, signUp } from '../../src/features/user/registerSlice'
import { UserRegister } from '../../src/interface/user.register'

import styles from './style.module.scss'

const Register = () => {
  const dispatch: AppDispatch = useDispatch()
  const {data, status, error} = useSelector(registerSelector)
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputRef = useRef()

  const register = (e) => {
    e.preventDefault()
    const data: UserRegister = { first_name, last_name, email, password }
    dispatch(signUp(data))
  }

  useEffect(() => {
    inputRef?.current?.focus()
    dispatch(clearData())
  }, [])

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

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
              {
                Object.keys(data).length != 0 && 
                <div className="alert alert-success" role="alert">
                  Veuillez valider votre adresse email
                </div>
              }
              {
                error && 
                <div className="alert alert-danger" role="alert">
                  {
                    typeof error=='string'?error
                    :
                    error.map((err) => (
                      <p className={styles.errorMessage}>* {err}</p>
                    ))
                  }
                </div>
              }
              <form onSubmit={register}>
                <Input
                  label={'Prénom'}
                  onChange={(e) => setFirst_name(e.target.value)}
                  inputRef={inputRef}
                  onKeyDown={handleEnter}
                />
                
                <Input
                  label={'Nom'}
                  onChange={(e) => setLast_name(e.target.value)}
                  onKeyDown={handleEnter}
                />
                <Input
                  label={'Email'}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleEnter}
                />
                <Input
                  label={'Mot de passe'}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p id={styles.link_cgu}>En créant un compte vous acceptez les  
                  <Link href={'#'}>
                    <a> conditions générales d'utilisation</a>
                  </Link>
                </p>
                <Button
                  text={'Inscription'}
                  style={styles.btn}
                  type="submit"
                  isLoading={status=="loading"?true:false}
                />
              </form>
              <p id={styles.link_login}>Vous avez déjà un compte ?  
                <Link href={'/login'}>
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

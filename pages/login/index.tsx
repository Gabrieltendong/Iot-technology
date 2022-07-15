import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaUser, FaKey, FaMailBulk } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/common/Button'
import { AppDispatch } from '../../src/app/store'
import { auth, loginSelector } from '../../src/features/user/loginSlice'
import { UserLogin } from '../../src/interface/user.login'
import styles from './style.module.scss'

const Login = () => {

  const router = useRouter()
  const dispatch: AppDispatch = useDispatch()
  const {data, status, error} = useSelector(loginSelector)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (e) => {
    e.preventDefault()
    const data: UserLogin = { email, password }

    dispatch(auth(data))
  }

  useEffect(() => {
    if(Object.keys(data).length != 0){
      router.push('/')
    }
  }, [data])

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
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
          </div>
          <form onSubmit={login}>
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
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <Link href={'/forgot-password'}>Mot de passe oublié?</Link>
            </div>
            <Button
              text={'Connection'}
              style={styles.btn}
              type="submit"
              isLoading={status=="loading"?true:false}
            />
          </form>
        </div>
        <h2>Utilisez une autre méthode pour vous connecter </h2>
        <div id={styles.content_rs}>
            <div className={styles.rs_wrapper}>
              <Image 
                src={'/assets/icons/google.png'} 
                layout='fill'
              />
            </div>
            <div className={styles.rs_wrapper}>
              <Image 
                src={'/assets/icons/github.png'} 
                layout='fill'
              />
            </div>
            <div className={styles.rs_wrapper}>
              <Image 
                src={'/assets/icons/linkedin.png'} 
                layout='fill'
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

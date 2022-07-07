import Head from 'next/head'
import Image from 'next/image'
import { FaBookmark } from 'react-icons/fa'
import Button from '../../components/common/Button'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from './style.module.scss'

export default function Home() {
  return (
    <div id={styles.ebook_wrapper}>
      <Head>
        <title>Ebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div id={styles.header}>
          <Navbar />
          <div id={styles.header_content}>
              <div id={styles.header_text_wrapper}>
                <h1>apprenez davantage avec nos ebooks</h1>
                <p>Que vous soyez un passioné de la lecture ou une révision. Nous avons sélectionnez pour vous des ebooks. La révision est agréable avec ce format. Où que vous soyez vous pourrez réviser.</p>
                <Button
                  text={'En savoir plus'}
                  style={styles.btn}
                />
              </div>
              <div id={styles.box_content}>
                <div id={styles.box_1}>
                    <div className={styles.content_image_header}>
                      <Image src={'/assets/kubernetes.png'} layout="fill" />
                    </div>
                </div>
                <div id={styles.box_2}>
                    <div className={styles.content_image_header}>
                      <Image src={'/assets/docker.png'}layout="fill" />
                    </div>
                </div>
                <div id={styles.box_3}>
                    <div className={styles.content_image_header}>
                      <Image src={'/assets/git.png'} layout="fill" />
                    </div>
                </div>
              </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.ebook_item}>
          <div className={styles.ebook_item_image}>
            <Image
              src={'/assets/kubernetes.png'} layout="fill" />
          </div>
          <div className={styles.ebook_item_text}>
            <div className={styles.hr} />
            <h2>L’essentiel de CKA Kubernetes</h2>
            <p>Revivez les temps forts de cette habilitation. Avec des quizs. Ne ratez pas votre habilitation. De plus augmentez votre taux d'employabilité. </p>
            <span>10€</span>
            <Button
                  text={'Acheter'}
                  style={styles.btn}
                />
          </div>
        </section>
        <section className={styles.ebook_item}>
          <div className={styles.ebook_item_text}>
            <div className={styles.hr} />
            <h2>L’essentiel de Docker</h2>
            <p>Docker c'est imposé comme la référence ces dernières années. Maitrisez enfin la conteneurisation et soyez expert de cette technologie. </p>
            <span>10 €</span>
            <Button text={'Acheter'} style={styles.btn} />
          </div>
          <div className={styles.ebook_item_image}>
            <Image
              src={'/assets/docker.png'} layout="fill" />
          </div>
        </section>
        <section className={styles.ebook_item}>
          <div className={styles.ebook_item_image}>
            <Image src={'/assets/git.png'} layout="fill" />
          </div>
          <div className={styles.ebook_item_text}>
            <div className={styles.hr} />
            <h2>L’essentiel de Git</h2>
            <p>Maitriser l'essentiel de Git. Le versionning est l'art de maitriser la version de son code et le maintenir.Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2. Le principal contributeur actuel de Git, et ce depuis plus de 16 ans. En 2016, il s’agit du logiciel de gestion de versions le plus populaire qui est utilisé par plus de douze millions de personnes.</p>
            <span>10 €</span>
            <Button text={'Acheter'} style={styles.btn} />
          </div>
        </section>
        <section className={styles.ebook_item}>
          <div className={styles.ebook_item_text}>
            <div className={styles.hr} />
            <h2>L’essentiel de Linux</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas sed vitae sed cras mattis ut elit fermentum. In volutpat penatibus nam feugiat varius sed tristique. At malesuada urna vel augue elementum bibendum tempor. </p>
            <span>10 €</span>
            <Button text={'Acheter'}style={styles.btn} />
          </div>
          <div className={styles.ebook_item_image}>
            <Image src={'/assets/linux.png'} layout="fill" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

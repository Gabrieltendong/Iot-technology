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
                <h1>apprenez d’avantage avec nos ebooks</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ut integer et, consequat, enim ultrices nunc. Egestas et sed ut eu feugiat eleifend ornare bibendum enim. Facilisi sit venenatis, quam feugiat morbi lorem quis duis massa. Pulvinar quis in nunc, ultrices aliquam sed eget id. Feugiat gravida at amet tincidunt in sed at facilisi. Nec, mauris sed sapien, eleifend. Mauris.</p>
                <Button
                  text={'En savoir plus'}
                  style={styles.btn}
                />
              </div>
              <div id={styles.box_content}>
                <div id={styles.box_1}>
                    <div className={styles.content_image_header}>
                      <Image
                        src={'/assets/kubernetes.png'}
                        layout="fill"
                      />
                    </div>
                </div>
                <div id={styles.box_2}>
                    <div className={styles.content_image_header}>
                      <Image
                        src={'/assets/docker.png'}
                        layout="fill"
                      />
                    </div>
                </div>
                <div id={styles.box_3}>
                    <div className={styles.content_image_header}>
                      <Image
                        src={'/assets/git.png'}
                        layout="fill"
                      />
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
              src={'/assets/kubernetes.png'}
              layout="fill"
            />
          </div>
          <div className={styles.ebook_item_text}>
            <div className={styles.hr} />
            <h2>L’essentiel de CKA Kybernetes</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas sed vitae sed cras mattis ut elit fermentum. In volutpat penatibus nam feugiat varius sed tristique. At malesuada urna vel augue elementum bibendum tempor. </p>
            <span>75 €</span>
            <Button
                  text={'Achecter'}
                  style={styles.btn}
                />
          </div>
        </section>
        <section className={styles.ebook_item}>
          <div className={styles.ebook_item_text}>
            <div className={styles.hr} />
            <h2>L’essentiel de docker</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas sed vitae sed cras mattis ut elit fermentum. In volutpat penatibus nam feugiat varius sed tristique. At malesuada urna vel augue elementum bibendum tempor. </p>
            <span>75 €</span>
            <Button
                  text={'Achecter'}
                  style={styles.btn}
                />
          </div>
          <div className={styles.ebook_item_image}>
            <Image
              src={'/assets/docker.png'}
              layout="fill"
            />
          </div>
        </section>
        <section className={styles.ebook_item}>
          <div className={styles.ebook_item_image}>
            <Image
              src={'/assets/git.png'}
              layout="fill"
            />
          </div>
          <div className={styles.ebook_item_text}>
            <div className={styles.hr} />
            <h2>L’essentiel de git</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas sed vitae sed cras mattis ut elit fermentum. In volutpat penatibus nam feugiat varius sed tristique. At malesuada urna vel augue elementum bibendum tempor. </p>
            <span>75 €</span>
            <Button
                  text={'Achecter'}
                  style={styles.btn}
                />
          </div>
        </section>
        <section className={styles.ebook_item}>
          <div className={styles.ebook_item_text}>
            <div className={styles.hr} />
            <h2>L’essentiel de Linux</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas sed vitae sed cras mattis ut elit fermentum. In volutpat penatibus nam feugiat varius sed tristique. At malesuada urna vel augue elementum bibendum tempor. </p>
            <span>75 €</span>
            <Button
                  text={'Achecter'}
                  style={styles.btn}
                />
          </div>
          <div className={styles.ebook_item_image}>
            <Image
              src={'/assets/linux.png'}
              layout="fill"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

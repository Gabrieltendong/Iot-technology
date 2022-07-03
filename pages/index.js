import Head from 'next/head'
import Image from 'next/image'
import { FaBookmark } from 'react-icons/fa'

import Button from '../components/common/Button'
import Footer from '../components/layout/Footer'
import NavbarCustom from '../components/layout/Navbar'
import styles from './style.module.scss'

export default function Home() {
  return (
    <div id={styles.home_wrapper}>
      <Head>
        <title>Iot Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div id={styles.header_content}>
          <NavbarCustom />
          <div id={styles.content_text}>
            <h1>Titre d'entete</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
            <Button 
              style={styles.btn_header}
              text='Découvrir'
            />
          </div>
        </div>
      </header>
      <main>

        {/* ----------------- section avantage ------------------ */}
        <section id={styles.section_avatange}>
          <div className={styles.section_title}>
            <h1 className={styles.title_section}>Titre accrocheur descriptif des avantages</h1>
            <p className={styles.subTitle_section}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text has been the industry's standard dummy</p>
          </div>
          <div id={styles.avatange_wrapper}>
            <div className={styles.space_beetwen}>
              <div className={styles.margin_vertical}>
                <div className={styles.row}>
                  <h4 className={styles.right_text}>Echanger avec vos mentors</h4>
                  <Image
                    src={'/assets/icons/9.png'}
                    height={90}
                    width={90}
                  />
                </div>
                <p className={`${styles.right_text} `}>Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply </p>
              </div>
              <div className={styles.margin_vertical}>
                <div className={styles.row}>
                  <h4 className={styles.right_text}>Echanger avec vos mentors</h4>
                  <Image
                    src={'/assets/icons/calendar.png'}
                    height={90}
                    width={90}
                  />
                </div>
                <p className={styles.right_text}>Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy </p>
              </div>
            </div>
            <div id={styles.image_wrapper}>
              <Image
                src={'/assets/dashboad.webp'}
                layout='fill'
              />
            </div>
            <div className={styles.space_beetwen}>
              <div className={styles.margin_vertical}>
                <div className={styles.row}>
                  <Image
                    className={styles.margin_right}
                    src={'/assets/icons/school.png'}
                    height={90}
                    width={90}
                  />
                  <h4 className={`${styles.left_text} ${styles.margin_left}`}>Apprenez</h4>
                </div>
                <p className={`${styles.left_text}`}>Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply </p>
              </div>
              <div className={styles.margin_vertical}>
                <div className={styles.row}>
                  <Image
                    className={styles.margin_right}
                    src={'/assets/icons/star.png'}
                    height={90}
                    width={90}
                  />
                  <h4 className={`${styles.left_text} ${styles.margin_left}`}>Choisissez vos lecons</h4>
                </div>
                <p className={styles.left_text}>Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- section our service --------------- */}
        <section id={styles.section_our_service}>
          <div className={styles.section_title}>
            <h1 className={styles.title_section}>Titre accrocheur descriptif des avantages</h1>
            <p className={styles.subTitle_section}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text has been the industry's standard dummy, Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          </div>
          <div id={styles.car_wrapper}>
            <div className={styles.card}>
                <h1>Nos formations</h1>
                <div className={styles.card_body}>
                  <div className={styles.alin_center}>
                    <div className={styles.card_image}>
                      <Image
                        src={'/assets/Typescript_logo.png'}
                        layout='fill'
                      />
                    </div>
                    <h5>Typscript</h5>
                  </div>
                  <div className={styles.alin_center}>
                    <div className={styles.card_image}>
                      <Image
                        src={'/assets/Solidity_logo.png'}
                        layout='fill'
                      />
                    </div>
                    <h5>Solidity</h5>
                  </div>
                </div>
                <div className={styles.card_footer}>
                    <Image
                      src={'/assets/icons/icon_add.png'}
                      height={40}
                      width={40}
                    />
                    <p className={styles.btn_see_more}>Voir plus</p>
                </div>
            </div>
            <div className={styles.card}>
              <h1>Nos formations</h1>
              <div className={styles.card_body}>
                <div className={styles.alin_center}>
                  <div className={styles.card_image}>
                    <Image
                      src={'/assets/Linux_Logo.png'}
                      layout='fill'
                    />
                  </div>
                  <h5>Linux</h5>
                </div>
                <div className={styles.alin_center}>
                  <div className={styles.card_image}>
                    <Image
                      src={'/assets/Github.png'}
                      layout='fill'
                    />
                  </div>
                  <h5>Github</h5>
                </div>
              </div>
              <div className={styles.card_footer}>
                  <Image
                    src={'/assets/icons/icon_add.png'}
                    height={40}
                    width={40}
                  />
                  <p className={styles.btn_see_more}>Voir plus</p>
              </div>
            </div>
          </div>
        </section>

        {/* --------------- section our certifications --------------- */}
        <section id={styles.section_our_certification}>
            <div id={styles.section_our_certification_text}>
                <h1>Nos certifications</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text,orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            </div>
            <div id={styles.content_cert_image}>
              <div id={styles.img1}></div>
              <div id={styles.img2}></div>
            </div>
        </section>

        {/* --------------- section subscription --------------- */}
        <section id={styles.section_subcription}>
                <h1>Abonnez-vous des maintenant!</h1>
                <p>Lancez vous dans le developpement web </p>
                <Button 
                  text='Commencer'
                  style={styles.btn_subscription}
                />
        </section>
      </main>
      <Footer />
    </div>
  )
}

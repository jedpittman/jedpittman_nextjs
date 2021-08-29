import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jed Pittman</title>
        <meta name="description" content="Jed Pittman Data Engineer, Developer, Tech Lead" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Jed Pittman - Data Engineer, Developer Tech Lead
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Tech Leadership</h2>
            <p>I&apos;m passionate about building sustainable software and healthy teams to support projects for the long-term.</p>
          </div>

          <div className={styles.card}>
            <h2>Learning</h2>
            <ul><li>AWS Certified Cloud Practitioner (2020)</li>
            <li>Cloudera CCA 175 (Spark+Hadoop Certification) (2020)</li>
            <li>FreeCodeCamp – ResponsiveWebDesign (2019) </li></ul>
          </div>

          <div className={styles.card}>
            <h2>Projects</h2>
            <p><a href="https://www.jobhopper.net">Jobhopper: Visualize Job Transitions</a></p>
            <p><a href="https://github.com/jedpittman">Jed Pittman's GitHub Profile</a></p>
          </div>

          <div className={styles.card}>
            <h2>Contact</h2>
            <p>An <a href="https://jpc-resources-public.s3.us-east-2.amazonaws.com/2021_no_email_public_resume.docx">updated resume</a> is available.</p>
            <p>Learn what I can bring to your project.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

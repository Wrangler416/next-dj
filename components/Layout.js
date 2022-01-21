import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>DJ Event Tracker</title>
                <meta name='description' content={description} /> 
                <meta name='keywords' content={keywords} /> 
            </Head>
            <Header />
            <div className={styles.container}>
            {children}
            <Footer />
            </div>
          
        </div>
    )
}


Layout.defaultProps = {
    title: 'DJ Events Tracker',
    description: 'Find the latest DJ Events and more',
    keywords: 'dj, music, edm, events,'
}

import Layout from '@/components/Layout'
import styles from '@/styles/NotFound.module.css'
import Link from 'next/link'
import {FaExclamationTriangle} from 'react-icons/fa'

export default function NotFoundPage() {
    return (
        <Layout title="page not found">
            <div className={styles.error}>
                <h1><FaExclamationTriangle />404</h1>
                <h3>Sorry there is nothing here</h3>
                <Link href="/">
                    Go Home
                </Link>

            </div>
        </Layout>
    )
}

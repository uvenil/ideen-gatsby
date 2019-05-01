import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Seite nicht gefunden</h1>
            <p><Link to="/">Zur Startseite</Link></p>
        </Layout>
    )
}

export default NotFound
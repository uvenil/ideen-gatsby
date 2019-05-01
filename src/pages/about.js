import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>Über diese Seite</h1>
            <p>Hier werden geniale Ideen präsentiert. Gerne umsetzen und dabei Ursprung der Idee nennen.</p>
            <p><Link to="/contact">Für Fragen gerne kontaktieren!</Link></p>
        </Layout>
    )
}

export default AboutPage
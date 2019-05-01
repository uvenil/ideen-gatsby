import React from 'react'

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Kontakt</h1>
            <p>
                Am einfachsten bin ich per Email zu erreichen: <a href="mailto:uvenil@web.de?subject=NeueIdee&X-Mailer=Idee&body=Idee:%0D%0AAutor:%0D%0AGeplantes Projekt:" target="_blank">uvenil(at)web.de</a>
            </p>
        </Layout>
    )
}

export default ContactPage
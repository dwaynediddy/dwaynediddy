import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
        <Head>
            <title>Dwayne Diddy</title>
        </Head>
        <header className="navbar">
            <Navbar />
        </header>
        <main className="main">
            {children}
        </main>
        <footer className="footer">
            <Footer />
        </footer>
    </div>
  )
}

export default Layout
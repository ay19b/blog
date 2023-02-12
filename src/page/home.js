import React from 'react'
import Content from '../component/content/content'
import Feature from '../component/feature/feature'
import Footer from '../component/footer/footer'
import Header from '../component/header/header'
import ScrollToTop from '../component/scroll/scroll'
import News from '../component/trending/news'

export default function Home() {
  return (
    <>
       <Header />
       <News />
       <Feature />
       <Content />
       <Footer />
       <ScrollToTop />
    </>
  )
}

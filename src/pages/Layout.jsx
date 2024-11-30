
import Navbar from '../components/Navbar'
import BlogBlock from '../components/BlogBlock'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import PropTypes from 'prop-types';

export default function Layout({
    children
}) {
  return (
  <>
  <Navbar />
  {
    children
  }
  <BlogBlock />
  <CTA />
  <Footer />
  </>
  )
}

Layout.propTypes={
  children:PropTypes.node.isRequired
}

// Write your code here
import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Layout = () => (
  <div className="layout-container">
    <div className="header-container">
      <Header />
    </div>
    <Body />
    <div className="footer-container">
      <Footer />
    </div>
  </div>
)

export default Layout

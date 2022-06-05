import Navbar from './components/Navbar';
import HeroContainer from './components/HeroContainer';
import Features from './components/Features';
import Article from './components/Article';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='font-public'>
      <Navbar />
      <HeroContainer />
      <Features />
      <Article />
      <Footer />
    </div>
  )
}

export default App
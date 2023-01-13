import './App.css';
import Content from './component/content/content';
import Feature from './component/feature/feature';
import Footer from './component/footer/footer';
import Header from './component/header/header'
import News from './component/trending/news'
import ScrollToTop from './component/scroll/scroll'

function App() {
  return (
    <div className="App">
       <Header />
       <News />
       <Feature />
       <Content />
       <Footer />
       <ScrollToTop />
    </div>
  );
}

export default App;

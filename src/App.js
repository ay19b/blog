import './App.css';
import Album from './component/album/album';
import Content from './component/content/content';
import Footer from './component/footer/footer';
import Header from './component/header/header'
import News from './component/trending/news'

function App() {
  return (
    <div className="App">
       <Header />
       <News />
       <Album />
       <Content />
       <Footer />
    </div>
  );
}

export default App;

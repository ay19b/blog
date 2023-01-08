import './App.css';
import Album from './component/album/album';
import Header from './component/header/header'
import News from './component/trending/news'

function App() {
  return (
    <div className="App">
       <Header />
       <News />
       <Album />
    </div>
  );
}

export default App;

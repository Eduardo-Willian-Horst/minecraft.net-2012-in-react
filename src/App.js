import Header from './Header';
import BodyTop from './BodyTop';
import Social from './Social';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className='container-body'>
      <Header/>
      <div className='corpo'>
        <div>
          <BodyTop/>
          <Social/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;

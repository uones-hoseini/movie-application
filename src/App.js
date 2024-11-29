
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavogation from './components/MobileNavogation';

function App() {
  return (
    <main className='pb-14 lg:pb-0'>
    <Header/>
    <div className="pt-16">
      <Outlet/>
      <Footer/>
      <MobileNavogation/>
    </div>
    </main>
  );
}

export default App;

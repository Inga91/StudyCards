
import '../../style/App.scss';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';


function App() {
  return (
    <>
      <Header className='container'/>
      <Main className='container'/>
      <Footer />
    </>
  );
}

export default App;

import '../../style/App.scss';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <>
      <Header className='container'/>
      <Main className='container'/>
      <Footer />
    </>
    </Router>
  );
}

export default App;

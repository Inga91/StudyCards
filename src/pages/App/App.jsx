import '../../style/App.scss'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Header className="container" />
            <Main className="container" />
            <Footer />
        </BrowserRouter>
    )
}

export default App

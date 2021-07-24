import React,{Fragment} from 'react'
import GlobalStyle from './components/GlobalStyle'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Fragment>
            <GlobalStyle/>
            <Navbar/>
            <Home/>
            <Footer/>
        </Fragment>
    )
}

export default App;

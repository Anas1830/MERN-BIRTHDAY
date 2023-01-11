
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter , Route} from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
import CreateNotes from './screens/CreateNotes/CreateNotes';


const App = () => ( 
  <BrowserRouter>
   <Header />
   <main>
  
    
    <Route  path='/' component={LandingPage} exact/>
    <Route path='/mynotes' component={MyNotes}  />
    
   </main>
   <Route path='/createnote' component={CreateNotes} />
   
   
   <Footer />
  </BrowserRouter>
);
  


export default App;

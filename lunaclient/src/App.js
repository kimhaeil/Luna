import logo from './logo.svg';
import './App.css';


function Header(){
    return  <header>
                <h1><a href="/">Luna</a></h1>
            </header>
}

function Nav(){
    return  <nav>
                <ol>
                    <li><a href="getStroes">Get Store</a></li>
                </ol>
             </nav>
}

function App() {
  return (
    <div>
        <Header></Header>
        <Nav></Nav>
    </div>
  );
}

export default App;

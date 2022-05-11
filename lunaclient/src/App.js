import logo from './logo.svg';
import './App.css';


function Header(props){
    return  <header>
                <h1><a href="/" onClick={function(event){
                  event.preventDefault();
                  props.onChangeMode()
                }}>Luna</a></h1>
            </header>
}

function Nav(props){
  const brands = []
  for(let i=0; i<props.items.length; i++){
    let c = props.items[i];
    brands.push(<li>
                    <a id={c.id} href={'/read/'+c.id} onClick={event=>{
                      event.preventDefault();
                      props.onChangeMode(event.target.id);
                    }} >{c.contents}</a>
                </li>);
  }
    return  <nav>
                <ol>
                   {brands}
                </ol>
             </nav>
}

function App() {
  const items = [
    {id: 1, contents:'Nike'},
    {id: 2, contents:'Adidasss'},
    {id: 3, contents:'Puma'}
  ]
  return (
    <div>
        <Header onChangeMode = {function(){
          alert("Header");
        }}></Header>
        <Nav items={items} onChangeMode={(id) => {
          alert(id);
        }}></Nav>
    </div>
  );
}

export default App;

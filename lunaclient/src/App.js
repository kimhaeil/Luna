import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function GetStores(){
  axios.get("http://127.0.0.1:8000/select/")
  .then((Response) => {console.log(Response.data)})
  .catch((Error) => {console.log(Error)})
}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

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
                      props.onChangeMode(Number(event.target.id));
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
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const items = [
    {id: 1, contents:'Nike', model :'Neymar'},
    {id: 2, contents:'Adidasss', model: 'Sonny'},
    {id: 3, contents:'Puma', model: 'Park'}
  ]
  GetStores()
  let content = null;
  if(mode==='WELCOME'){
    content = <Article title='Welcome' body='Hello Luna'></Article>
  }else if(mode === 'READ')
  {
    let body, title = null;
    for(let i=0; i< items.length; i++){
      if(items[i].id === id){
        body = items[i].contents;
        title = items[i].model;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
        <Header onChangeMode = {function(){
          setMode('WELCOME');
        }}></Header>
        <Nav items={items} onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}></Nav>
        <GetStores></GetStores>
        {content}
    </div>
  );
}

export default App;

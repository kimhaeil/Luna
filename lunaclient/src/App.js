import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function GetStores() {
  axios
    .get("http://127.0.0.1:8000/select/")
    .then((Response) => {
      console.log(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });
}

function Article(props) {
  const [open, setOpen] = useState(false);
  return (
    <article>
        <Box
          x={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>Home</Button>
            <Button onClick={()=>{
              setOpen(true);
            }}>Search</Button>
          </ButtonGroup>
          <Dialog open={open}>
            <DialogTitle>Search</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Here is search calender
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant="text" >Ok</Button>
              <Button variant="text" onClick={()=> {setOpen(false);}} >Cancel</Button>
            </DialogActions>
          </Dialog>
        </Box>
    </article>
  );
}

function Header(props) {
  return (
    <header>
      <h1>
        {" "}
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {" "}
          Luna{" "}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const brands = [];
  for (let i = 0; i < props.items.length; i++) {
    let c = props.items[i];
    brands.push(
      <li>
        <a
          id={c.id}
          href={"/read/" + c.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {" "}
          {c.contents}{" "}
        </a>{" "}
      </li>
    );
  }
  return (
    <nav>
      <ol> {brands} </ol>{" "}
    </nav>
  );
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const items = [
    {
      id: 1,
      contents: "Nike",
      model: "Neymar",
    },
    {
      id: 2,
      contents: "Adidasss",
      model: "Sonny",
    },
    {
      id: 3,
      contents: "Puma",
      model: "Park",
    },
  ];
  GetStores();
  let content = null;
  if (mode === "WELCOME") {
    content = (
      <Article title="Welcome" body="Hello Luna">
        {" "}
      </Article>
    );
  } else if (mode === "READ") {
    let body,
      title = null;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        body = items[i].contents;
        title = items[i].model;
      }
    }
    content = (
      <Article title={title} body={body}>
        {" "}
      </Article>
    );
  }

  return (
    <Container fixed>
      <Header
        onChangeMode={function () {
          setMode("WELCOME");
        }}
      >
        {" "}
      </Header>{" "}
      <Nav
        items={items}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      >
        {" "}
      </Nav>{" "}
      <GetStores> </GetStores> {content}{" "}
    </Container>
  );
}

export default App;

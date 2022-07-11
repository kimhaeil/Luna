import { Box } from "@mui/material";
import React, {
  useState,
  useEffect,
  useRef,
} from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function Login() {
  const maxLength = (value) => value.length < 10;

  const name = useInput("ID:", maxLength);

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  const id = useRef();
  setTimeout(() => id.current.focus(), 5000);

  const onClick = () => console.log("hellog");
  const login = useClick(onClick);

  return (
    <React.Fragment>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <label>ID:</label>
        <input ref={id} placeholder="ID" {...name} />
        <label>PW:</label>
        <input type="password" name="input_pw" />

        <Box>
          <button ref={login} type="button">
            Login
          </button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

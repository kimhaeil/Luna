import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>main page</h1>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Home;
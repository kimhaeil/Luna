import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>main page</h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profiles/value1">value1</Link>
                </li>
                <li>
                    <Link to="/profiles/value2">value2</Link>
                </li>
                <li>
                    <Link to="/profiles/void">empty</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Home;
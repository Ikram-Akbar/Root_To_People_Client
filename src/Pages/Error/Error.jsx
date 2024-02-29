import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
           <h5>404 not found </h5> 
           <Link to="/home">Go Back to Home </Link>
        </div>
    );
};

export default Error;
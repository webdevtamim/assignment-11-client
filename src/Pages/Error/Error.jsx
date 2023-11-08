import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="grid justify-center min-h-screen content-center gap-2 text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p>Page Not Found</p>
            <p>The page you're looking for does not exist.</p>
            <Link>
                <button className="btn">Back to home</button>
            </Link>
        </div>
    );
};

export default Error;
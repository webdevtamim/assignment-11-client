const Blogs = () => {
    return (
        <div className="max-w-[1000px] mx-auto py-28 px-5">
            <div className="collapse collapse-arrow bg-[#F03737] mb-7 shadow-lg">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-white">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content bg-white pt-4 text-[#222] font-medium">
                    <p>
                        Access tokens and refresh tokens are essential components of authentication and authorization systems, often used in web and mobile applications. <br />
                        - A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. <br />
                        - The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                    </p>
                    <br /><br />
                    <h4 className="font-bold text-lg">How they work:</h4>
                    <ul className="space-y-2 list-disc pt-3 pl-10">
                        <li>When a user logs in, they receive both an access token and a refresh token.</li>
                        <li>The access token is used to access protected resources immediately, while the refresh token is securely stored on the client side. </li>
                        <li>The client includes the access token in the HTTP headers of API requests to access protected resources. </li>
                        <li>The API server validates the access token to ensure the client has the required permissions and that the token is not expired. </li>
                        <li>Access tokens have a short lifespan to limit their potential exposure in case of a security breach. </li>
                        <li>When the access token expires, the client can use the refresh token to obtain a new access token without the user's involvement. </li>
                        <li>The client sends the refresh token to a token endpoint on the authentication server, which validates the refresh token. </li>
                        <li>If the refresh token is valid, the server issues a new access token, and the client can continue making API requests.</li>
                    </ul>
                    <br /><br />
                    <h4 className="font-bold text-lg">Where to Store Them on the Client-side:</h4>
                    <ul className="space-y-2 pt-3 pl-5">
                        <li>- Access tokens should be stored securely on the client side, typically in memory or in a secure storage mechanism (e.g., HTTP-only cookies or browser storage).</li>
                        <li>- Refresh tokens should be stored securely, and their storage should be more robust since they have a longer lifespan. Some common options include server-side storage, HTTP-only cookies, or secure storage mechanisms in mobile apps.</li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#F03737] mb-7 shadow-lg">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-white">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content bg-white pt-4 text-[#222] font-medium">
                    <p>
                        Express.js and NestJS are both popular frameworks for building web applications and APIs using JavaScript or TypeScript, but they have different goals and design philosophies.
                        <br /><br />
                        NestJS offers cross-platform support, allowing developers to build applications for various platforms. Express. js is platform-independent and can be used on different operating systems.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#F03737] mb-7 shadow-lg">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-white">
                    Explanation of my code
                </div>
                <div className="collapse-content bg-white pt-4 text-[#222] font-medium">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
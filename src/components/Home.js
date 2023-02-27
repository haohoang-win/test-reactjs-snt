const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="title">Home</div>
                <h3>Your application should have the following features</h3>
                <ul>
                    <li>Login</li>
                    <span>The user should be able to log in using API key and secret.
                        <br />
                        When a user is logged in, on refresh, the user should still remain logged in.
                        <br />
                        Api	&nbsp;
                        <a target='_blank' href="https://www.petfinder.com/developers/v2/docs/">https://www.petfinder.com/developers/v2/docs</a>
                        &nbsp;login by API key and Secret to get jwt token for the animal page below
                        <b> ( user input API key + secret to login )</b>
                        <br />
                        <b>API key: </b><span className="api">v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ</span>
                        <br />
                        <b>Secret: </b><span className="api">91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H</span>
                    </span>
                    <li>Animal page</li>
                    <span>
                        - This page is only visible to user after logged in.
                        <br />
                        - Api: <a target='_blank' href="https://www.petfinder.com/developers/v2/docs/#get-animals">https://www.petfinder.com/developers/v2/docs/#get-animals</a>
                        &nbsp;( need to get token in login step )
                        <br />
                        - Show a list of animal
                        <br />
                        - Pagination ( optional )
                    </span>
                    <li>Logout</li>
                    <span>
                        - Once the user logs out, the animal page should not be accessible anymore.
                        <br />
                        - On refresh, the user should still remain logged out.
                    </span>
                </ul>
                <h3>Things to look out for</h3>
                <ul>
                    <li>Best practices for code structure</li>
                    <li>Good UI/UX</li>
                    <li>no usage of UI framework/library, only reactJs and css, ( no bootstrap, Material UI, Tailwind, .. )</li>
                    <li>responsiveness ( optional )</li>
                    <li>redux, redux thunk for state management (if ReactJs, optional)</li>
                    <li>no more than <b>5 days after receiving</b> this assignment (send whatever you have done to us, there is no need to complete 100%)</li>
                </ul>
                <h3>Submission</h3>
                <ul>
                    <li>Kindly send a public git repository to us (  anna@sntsolutions.io ) with including TESTR1 in email subject</li>
                    <li><b>send whatever you have done to us, there is no need to complete 100%</b></li>
                    <li><b>send us the salary range that you expect ( REQUIREMENT  ) </b></li>
                </ul>
            </div>
        </>
    )
}

export default Home;
// import { UserContext } from '../context/UserContext';
// import { useContext } from 'react';

import { useSelector } from "react-redux";
import Alert from "../components/Alert";

const PrivateRoute = (props) => {
    // const { user } = useContext(UserContext);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    if (!isAuthenticated) {
        return (
            <>
                <Alert>
                    You don't have permission to acces this route.
                </Alert>
            </>
        )
    }

    return (
        <>
            {props.children}
        </>
    )
}

export default PrivateRoute;
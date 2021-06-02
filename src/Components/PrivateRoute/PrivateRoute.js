import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AllContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, vehicles} = useContext(AllContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [vehicle, setVehicle] = vehicles;
    return (
            <Route
            {...rest}
            render={({ location }) =>
            loggedInUser.name || loggedInUser.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
    );
};

export default PrivateRoute;
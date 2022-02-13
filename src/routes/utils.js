/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

// KEYCLOAK PRIVATE ROUTE
// import { useKeycloak } from '@react-keycloak/web'
// API LOGIN | FIRESTORE AUTH | OTHERS..
// import { useGlobalContext } from '../context/globalContext'

function PrivateRoute({ component: Component, ...rest }) {
    // const { keycloak } = useKeycloak()
    // const {currentUser} = useGlobalContext()

    const condition = true

    return (
        <Route
            {...rest}
            render={props =>
                condition ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    )

    // API LOGIN | FIRESTORE AUTH | OTHERS..

    // return (
    //     <Route
    //         {...rest}
    //         render={props =>
    //             currentUser ? (
    //                 <Component {...props} />
    //             ) : (
    //                 <Redirect
    //                     to={{
    //                         pathname: '/login',
    //                         state: { from: props.location },
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // )

    // KEYCLOAK PRIVATE ROUTE

    // return (
    //     <Route
    //         {...rest}
    //         render={props =>
    //             keycloak?.authenticated ? (
    //                 <Component {...props} />
    //             ) : (
    //                 <Redirect
    //                     to={{
    //                         pathname: '/login',
    //                         state: { from: props.location },
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // )
}

export default PrivateRoute

import  React from 'react'
import { Switch, Route } from 'react-router'
import Home from '../pages/Home'
import ModifyUser from '../pages/ModifyUser'
import User from '../pages/User'

const Routes = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/addUser">
                    <ModifyUser />
                </Route>
                <Route path="/editUser/:userId">
                    <ModifyUser />
                </Route>
                <Route path="/user/:userId">
                    <User />
                </Route>
            </Switch>
        </React.Fragment>   
    )
}

export default Routes
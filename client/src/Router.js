import{
    Switch,
    Route
} from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Main from './pages/Main'
import { PrivateRoute } from './components/PrivateRouter'

const Router = () => {
    return(
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Main} />
        </Switch>
    )
}

export default Router
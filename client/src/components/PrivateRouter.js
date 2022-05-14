import {useEffect, useState} from 'react'
import {Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import {url} from '../config'

export const PrivateRoute = ({...props}) => {
    const [isAuth, setIsAuth] = useState(null);
    useEffect(() => {
        // cek data login
        axios.get(url + '/auth/logged-in', {
            headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
        }).then((res) => {
            setIsAuth(res.data.result.loggedIn)
        })
    }, [])

    if(isAuth === false) return (<Redirect to="/login"></Redirect>)
    return (<Route {...props} />) 
}
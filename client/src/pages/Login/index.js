import axios from 'axios';
import logoAdmin from '../../assets/admin-dasi.png';
import {Button, Container, Row, Col, Form, Spinner, Alert} from 'react-bootstrap';
import {Formik} from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import {url} from '../../config'
import {useEffect, useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [statusMsg, setStatusMsg] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [role, setRole] = useState('')
    const history = useHistory()

    useEffect(() => {
        axios.get(url + '/auth/logged-in', {
            headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
        }).then((res) => {
            setIsAuth(res.data.result.loggedIn)
            setRole(res.data.result.role)
        })
    }, [])

    // jika sudah login, diarahkan ke dashboard
    if(isAuth === true){
        if(role === 'admin'){ // jika admin yg login
            return (<Redirect to="/admin" />)
        }else if(role === 'rumah_sakit'){ // jika rumah sakit yang login
            return (<Redirect to="/rumah-sakit" />)
        }else if(role === 'pmi'){
            return (<Redirect to="/pmi" />)
        }
    }
    
    return (
        <div className="App">
            <>
            <Container>
            <div className="row d-flex justify-content-center">
                <div className="col-md-12"> 
                <Formik 
                    initialValues={{username: '', password: '', role: ''}}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        axios.post(url + '/auth/login', {
                            username: values.username,
                            password: values.password
                        }).then((res) => {
                            setTimeout(() => {
                                if(res.data.result.success === true){
                                    sessionStorage.setItem('token', res.data.result.token)

                                    if(res.data.result.role === 'admin'){
                                        history.push('/admin')
                                    }else if(res.data.result.role === 'rumah_sakit'){
                                        history.push('/rumah-sakit')
                                    }else if(res.data.result.role === 'pmi'){
                                        history.push('/pmi')
                                    }
                                }else{
                                    resetForm({values: ''})
                                    setMsg(res.data.result.msg)
                                    setStatusMsg(true)
                                }

                                setLoading(false)
                                setSubmitting(false)
                            }, 500)
                        })
                        setLoading(true)
                    }}
                >

                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                     <div className="loginBox">
                         <div className="row">
                             
                         <img src={logoAdmin} className="adminLogo"/>
                         </div>
                        <h3>
                            Login</h3>

                        {statusMsg === true ? <Alert variant="danger">{msg}</Alert> : null}

                        <hr />
                        <form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="username">Username</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                {errors.username && touched.username && errors.username}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </Form.Group>
                            {/* <Form.Group className="mb-3">
                                <Form.Label>Role</Form.Label>
                                <Form.Select
                                    id="role"
                                    name="role"
                                    onChange={handleChange}
                                >
                                    <option value="">...</option>
                                    <option value="admin">Admin</option>
                                    <option value="rumah_sakit">Rumah Sakit</option>
                                    <option value="pmi">PMI</option>
                                </Form.Select>
                            </Form.Group> */}
                            <Row>
                                <Col md={12}>
                                    {loading === true ? 
                                        <Button variant="primary" className="w-100" disabled>
                                            <Spinner animation="border" />
                                        </Button>
                                        : 
                                        <Button variant="primary" className="w-100" type="submit"><FontAwesomeIcon icon={faRightToBracket} /> Login</Button>
                                    }

                                    
                                </Col>
                            </Row>
                        </form>
                     </div>   
                        
                    )}

                </Formik>

                </div>
            </div>
            </Container>
            </>
        </div>
        
    );

}

export default Login;
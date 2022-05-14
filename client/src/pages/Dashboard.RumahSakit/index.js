import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Sidebar from './Sidebar';
import axios from 'axios'
import {url} from '../../config'
import Logout from '../../components/Logout';
import {Link} from 'react-router-dom'

const DashboardRumahSakit = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [role, setRole] = useState('')

    useEffect(() => {
        // ambil data yang sedang login
        axios.get(url + '/auth/logged-in', {
            headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
        }).then((res) => {
            setFirstname(res.data.result.firstname)
            setLastname(res.data.result.lastname)
            setRole(res.data.result.role)
        })
    }, [])

    return(
        <>
            <Container fluid={true} className="">
                <Row>
                    <Sidebar firstname={firstname} lastname={lastname}/>
                    <Col md={9} className="p-5">
                        
                        <Logout />
                        <h1>Welcome {firstname}</h1>
                        <hr />
                        <Row>
                            <Col md={4}>
                                <Link to={"/"} style={{color: 'black', textDecoration: 'none'}}>
                                    <Card>
                                        <Card.Body>
                                            <h5>Kamar A</h5>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <h5>Kamar B</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <h5>Kamar C</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DashboardRumahSakit
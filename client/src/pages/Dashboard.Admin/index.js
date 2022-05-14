import React, {useEffect, useState} from 'react';
import '../../assets/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from './Sidebar';
import axios from 'axios'
import {url} from '../../config'
import Logout from '../../components/Logout';

const DashboardAdmin = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [role, setRole] = useState('')

    // total
    const [totalRs, setTotalRs] = useState('')

    useEffect(() => {
        // ambil data yang sedang login
        axios.get(url + '/auth/logged-in', {
            headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
        }).then((res) => {
            setFirstname(res.data.result.firstname)
            setLastname(res.data.result.lastname)
            setRole(res.data.result.role)
        })

        // ambil data rumah sakit - hitung total rs yg terdaftar
        axios.get(url + '/rs/count').then((res) => { setTotalRs(res.data.result.total) })
    }, [])

    return(
        <>
            <Container fluid={true} className="">
                <Row>
                    <Sidebar firstname={firstname} lastname={lastname} role={role}/>
                    <Col md={9} className="p-5">
                        
                        <Logout />

                        <h1>Welcome {firstname}</h1>
                        <hr />
                        <div className="row justify-content-md-center">
                            <Col md={3} className="text-center grad-bg-orange text-white card-dashboard">
                                <div className="p-4" >
                                    <h1 className="card-title"><b>0</b></h1>
                                    <div className="card-body">
                                        <h4 className="card-subtitle mb-2 fw-thin">Akun PMI</h4>                           
                                    </div>
                                </div>
                            </Col>
                        
                            <Col md={3} className="text-center grad-bg-orange text-white card-dashboard">
                                <div className="p-4" >
                                    <h1 className="card-title"><b>{totalRs}</b></h1>
                                    <div className="card-body">
                                        <h4 className="card-subtitle mb-2 fw-thin">Akun Rumah Sakit</h4>                           
                                    </div>
                                </div>
                            </Col>
                        
                            <Col md={3} className="text-center grad-bg-orange text-white card-dashboard">
                                <div className="p-4" >
                                    <h1 className="card-title"><b>0</b></h1>
                                    <div className="card-body">
                                        <h4 className="card-subtitle mb-2 fw-thin">Akun Admin</h4>                           
                                    </div>
                                </div>
                            </Col>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DashboardAdmin
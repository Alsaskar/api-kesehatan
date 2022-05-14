import axios from 'axios';
import {Button, Container, Row, Col, Form, Spinner, Alert} from 'react-bootstrap';
import {Formik} from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {url} from '../../config'
import {useEffect, useState} from 'react'
import Sidebar from '../Dashboard.Admin/Sidebar'
import AOS from 'aos';

const AddRumahSakit = () => {
    useEffect(() => {

        AOS.init();
        AOS.refresh();
      }, []);
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [role, setRole] = useState('')

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

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
        
        <Container fluid={true}>
        <Row>
            <Sidebar firstname={firstname} lastname={lastname} role={role}/>

            <Col>
                <Container className="p-5"  data-aos="fade-right" data-aos-duration="1300">
                    <Row className="justify-content-md-center">
                        <Col md={7}>
                            <h1>Tambah Data Rumah Sakit</h1>
                            <hr />

                            <Formik
                                initialValues={{
                                    firstname: '',
                                    lastname: '',
                                    username: '',
                                    password: '',
                                    nama_rs: '',
                                    alamat: '',
                                    jumlah_dokter: '',
                                    jumlah_perawat: ''
                                }}
                                onSubmit={(values, {setSubmitting, resetForm}) => {
                                    axios.post(url + '/rs/add', {
                                        firstname: values.firstname,
                                        lastname: values.lastname,
                                        username: values.username,
                                        password: values.password,
                                        nama: values.nama_rs,
                                        alamat: values.alamat,
                                        jumlah_dokter: values.jumlah_dokter,
                                        jumlah_perawat: values.jumlah_perawat,
                                    }).then((res) => {
                                        setTimeout(() => {
                                            setMessage(res.data.result.message)
                                            setLoading(false)
                                            
                                            resetForm({values: ''})
                                            setSubmitting(false)
                                        }, 500)
                                        
                                    })

                                    setLoading(true)
                                }}
                            >

                                {({
                                    values,
                                    handleChange,
                                    handleSubmit
                                }) => (

                                    <form onSubmit={handleSubmit}>

                                    {message === '' ? '' : <Alert variant="primary">{message}</Alert>}

                                    <h4 className="fw-bold">Data Akun</h4>
                                    <hr />
                                    <Row className="mb-5">
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label htmlFor="firstname" className="fw-bold">Nama Depan</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="firstname"
                                                    id="firstname"
                                                    placeholder="Nama Depan"
                                                    onChange={handleChange}
                                                    value={values.firstname}
                                                    required
                                                >

                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label htmlFor="lastname" className="fw-bold">Nama Belakang</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="lastname"
                                                    id="lastname"
                                                    placeholder="Nama Depan"
                                                    onChange={handleChange}
                                                    value={values.lastname}
                                                    required
                                                >

                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label htmlFor="username" className="fw-bold">Username</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    placeholder="Username"
                                                    onChange={handleChange}
                                                    value={values.username}
                                                    required
                                                >

                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label htmlFor="password" className="fw-bold">Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    onChange={handleChange}
                                                    value={values.password}
                                                    required
                                                >

                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    

                                    <h4 className="fw-bold">Data Rumah Sakit</h4>
                                    <hr></hr>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="nama_rs" className="fw-bold">Nama</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nama_rs"
                                            id="nama_rs"
                                            placeholder="Nama Rumah Sakit"
                                            onChange={handleChange}
                                            value={values.nama_rs}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="alamat" className="fw-bold">Alamat</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="alamat"
                                            id="alamat"
                                            placeholder="Alamat Rumah Sakit"
                                            onChange={handleChange}
                                            value={values.alamat}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="jumlah_dokter" className="fw-bold">Jumlah Dokter</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="jumlah_dokter"
                                            id="jumlah_dokter"
                                            placeholder="Jumlah Dokter"
                                            onChange={handleChange}
                                            value={values.jumlah_dokter}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="jumlah_perawat" className="fw-bold">Jumlah Perawat</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="jumlah_perawat"
                                            id="jumlah_perawat"
                                            placeholder="Jumlah Perawat"
                                            onChange={handleChange}
                                            value={values.jumlah_perawat}
                                            required
                                        />
                                    </Form.Group>
                                    {loading === true ? <Button variant="primary" disabled>
                                        <Spinner animation="border"/>
                                    </Button>
                                    : <Button variant="primary" type="submit"><FontAwesomeIcon icon={faPaperPlane} /> &nbsp;Simpan</Button>
                                    }
                                    
                                </form>

                                )}

                            </Formik>

                            
                        </Col>
                    </Row>
                    
                </Container>
            </Col>
        </Row>
    
        </Container>
                
        </>
    );
}

export default AddRumahSakit
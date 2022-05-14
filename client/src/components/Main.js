import react from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ambulanceCar from '../assets/ambulance-car.png';
import ruangan from '../assets/ruangan.png';
import {  } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';


const Footer = () =>{
    return (
        <>
        <main>
        <Container className="p-4 my-5">
            <Row className="my-5">
                <Col sm={6}>
                    <img src={ambulanceCar} className="img-illustration"/>
                </Col>
                <Col sm={6}   data-aos-delay="300" data-aos="zoom-out" className="align-self-center " >
                    <h1>Lebe Hemat Waktu & Tenaga</h1>
                    <p>Ingin mencari tahu tentang informasi ketersediaan ruangan rumah sakit? Ingin mencari tahu jumlah kantong darah yang tersedia? Atau ingin mencari tahu jumlah mobil ambulance yang ready? Tenang saja, website ini menjadi jawaban untuk pertanyaan di atas.</p>
                </Col>
            </Row>
            <Row className="bg-bug">
                <Col sm={6} className="text-end align-self-center"  data-aos="fade-down">
                <h1>Praktis dan Mudah Digunakan</h1>
                    <p>Tinggal ketik link dan enter, informasi terkait pertanyaan di atas langsung tersedia dan dilaporkan secara realtime. Mulai dari ketersediaan ruangan yang ada di rumah sakit, ketersediaan kantong darah, maupun jumlah mobil ambulance yang siap digunakan</p>
                </Col>
                <Col sm={2}/>
                <Col sm={4}>
                <img src={ruangan} className="img-illustration"/>
                </Col>
            </Row>
        </Container>
        </main>
        </>
    );
}
export default Footer;
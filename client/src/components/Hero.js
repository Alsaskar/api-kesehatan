import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faBriefcaseMedical, faTruckMedical } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';

const Hero = () =>{
    return (
        <>
        <Container fluid={true} className="text-white grad-bg p-5" >
          <Row className="my-3 text-center">
            <Col>
            <h1><b>Ketersediaan fasilitas kesehatan di Kota Manado</b></h1>
            <p>Kesejahteraan penduduk merupakan sasaran utama dari pembangunan sebagaimana tertuang dalam GBHN. Pembangunan yang dilaksanakan adalah dalam rangka membentuk manusia Indonesia seutuhnya dari seluruh masyarakat Indonesia.</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4} sm={6} xs={12}  data-aos="zoom-in-down" >
            <FontAwesomeIcon icon={faHospital} className="icon"/>
              <h1 className="fw-bolder">
                <CountUp
                  start={0}
                  end={75}
                  duration={1.5}
                />
              </h1>
              <h4>Ruangan</h4>
            </Col>
            
            <Col md={4} sm={6} xs={12} data-aos="zoom-in-down" data-aos-delay="300">
            <FontAwesomeIcon icon={faBriefcaseMedical} className="icon" />
              <h1 className="fw-bolder">
                <CountUp
                  start={0}
                  end={75}
                  duration={1.5}
                />
              </h1>
              <h4>Kantong Darah</h4>
            </Col>
            <Col md={4} sm={12} xs={12} data-aos="zoom-in-down" data-aos-delay="600">
            <FontAwesomeIcon icon={faTruckMedical} className="icon" />
              <h1 className="fw-bolder">
                <CountUp
                  start={0}
                  end={75}
                  duration={1.5}
                />
              </h1>
              <h4>Ambulance</h4>
            </Col>
          </Row>
          {/* <Button variant="primary"><FontAwesomeIcon icon={faPlus} /> Simpan</Button> */}
        </Container>
        </>
      );
}
export default Hero;
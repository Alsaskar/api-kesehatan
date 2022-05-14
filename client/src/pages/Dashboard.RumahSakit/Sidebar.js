import AdminDasi from '../../assets/admin-dasi.png'
import '../../assets/style.css';
import {Row, Col, Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh, faHospital } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Sidebar = ({firstname, lastname}) => {

    return(
        <Col md={3} className="grad-bg p-4 sidebar">
            <Col className="fixed">
            <Row className="text-center text-white mb-3">
                <Col>
                    <img src={AdminDasi} className="adminLogo" />
                    <h4>{firstname + ' ' + lastname}</h4>
                    <h5><i>Operator RS</i></h5>
                    <hr />
                </Col>
                <Link to="/rumah-sakit" className="btn btn-default text-white mb-3 dashboard">
                    <FontAwesomeIcon icon={faGaugeHigh} />&nbsp; Dashboard</Link>
                <hr />
            </Row>
            <Dropdown className="mb-2">
                <Dropdown.Toggle variant="default" className="text-white" id="dropdown-basic">
                    <FontAwesomeIcon icon={faHospital}/> Manage Kamar
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/add-kamar">Tambah Data</Dropdown.Item>
                    <Dropdown.Item href="/">Lihat Data</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <Dropdown className="mb-2">
                <Dropdown.Toggle variant="default" className="text-white" id="dropdown-basic">
                    <FontAwesomeIcon icon={faBriefcaseMedical}/> Manage PMI
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/">Tambah Data</Dropdown.Item>
                    <Dropdown.Item href="/">Lihat Data</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2">

                <Dropdown.Toggle variant="default" className="text-white" id="dropdown-basic">
                    <FontAwesomeIcon icon={faHospital}/> Manage Rumah Sakit
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/">Tambah Data</Dropdown.Item>
                    <Dropdown.Item href="/">Lihat Data</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2">
                <Dropdown.Toggle variant="default" className="text-white" id="dropdown-basic">
                    <FontAwesomeIcon icon={faUserTie}/> Manage Admin
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/">Tambah Akun</Dropdown.Item>
                    <Dropdown.Item href="/">Lihat Data</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            </Col>
        </Col>
    );

}

export default Sidebar;
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Logout = () => {
    return(
        <Row>
            <Col md={12} className="text-end">
                <Link to="/login" className="btn btn-info text-white" onClick={() => sessionStorage.removeItem('token')}>
                    Logout <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </Col>
        </Row>
    )
}

export default Logout
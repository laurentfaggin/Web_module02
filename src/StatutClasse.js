import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Etudiant} from './Etudiant.js'

export function StatutClasse({etudiants}){
    const reussite = etudiants.filter(e => e.note >= 6);
    const echec = etudiants.filter(e => e.note < 6);

    return(
        <Container>
            <Row>
                <Col>
                    <table className="table table-bordered table-striped text-left">
                        <thead>
                            <tr>
                                <th scope="col-3">Nom</th>
                                <th scope="col-3">Matricule</th>
                            </tr>
                        </thead>
                        <tbody>            
                            {reussite.map((e, index) =>                
                            <Etudiant etudiant={e} key={index} />               
                            )}            
                        </tbody>
                    </table>
                </Col>
                <Col>
                    <table className="table table-bordered table-striped text-left">
                        <thead>
                            <tr>
                                <th scope="col-3">Nom</th>
                                <th scope="col-3">Matricule</th>
                            </tr>
                        </thead>
                        <tbody>            
                            {echec.map((e, index) =>                
                            <Etudiant etudiant={e} key={index} />               
                            )}            
                        </tbody>
                        </table>
                </Col>
            </Row>
        </Container>
    )
}
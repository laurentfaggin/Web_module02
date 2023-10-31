import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AfficherEtudiant } from './AfficherEtudiant.js';

export function StatutClasse({etudiants}){
    const reussite = etudiants.filter(e => e.note >= 6);
    const echec = etudiants.filter(e => e.note < 6);
    console.log(reussite)
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
                            <AfficherEtudiant etudiants={reussite}/>                                       
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
                            <AfficherEtudiant etudiants={echec}/>     
                        </tbody>
                        </table>
                </Col>
            </Row>
        </Container>
    )
}
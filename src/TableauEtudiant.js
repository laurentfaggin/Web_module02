import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { AfficherEtudiant } from './AfficherEtudiant.js'


export function TableauEtudiant({etudiants}){
    return (
        <Container>
            <table className="table table-bordered table-striped text-left">
                <thead>
                    <tr>
                        <th scope="col-6">Nom</th>
                        <th scope="col-6">Matricule</th>
                    </tr>
                </thead>
                <tbody>    
                    <AfficherEtudiant etudiants={etudiants}/>      
                </tbody>
            </table>
        </Container>
    )
}

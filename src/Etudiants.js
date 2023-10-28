import React from 'react';
import {Etudiant} from './Etudiant.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

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
                    {etudiants.map((e, index) =>                
                    <Etudiant etudiant={e} key={index} />               
                    )}            
                </tbody>
            </table>
        </Container>
    )
}
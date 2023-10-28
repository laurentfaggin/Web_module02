import React from 'react';

export function Etudiant({etudiant}){
    return(
        <tr>
        <td>{etudiant.nom}</td>
        <td>{parseInt(etudiant.matricule,10)}</td>
        </tr>
    )
}
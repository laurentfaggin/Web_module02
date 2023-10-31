import {Etudiant} from './Etudiant.js';


export function AfficherEtudiant({etudiants}){
      return (<>{etudiants.map((e, index) =>                
        <Etudiant etudiant={e} key={index} /> 
      )}</>)
  }
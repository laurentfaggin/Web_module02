import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Horloge} from "./Horloge.js"
import {Recette} from './Recette.js'
import {TableauEtudiant} from './Etudiants'
import { StatutClasse } from './StatutClasse';


const root = ReactDOM.createRoot(document.getElementById('root'));

const recette = {
  titre: "Oeufs brouilles",
  description: "Preparer des oeufs brouilles est la simplicite meme. Un peu de sel et de poivre"+
  "pour assaisonner, un peu de beurre pour la cuisson et des oeufs frais: c'est tout ce qu'il faut"+
  "pour un dejeuner ideal. Vous pouvez modifier cette recette pour inclure vos ingredients"+
  "preferes tels que le fromage, la salsa, les legumes et les herbes.",
  ingredients: [
    "2 oeufs",
    "Sel",
    "Poivre",
    "1 c. a table (15ml) de beurre"
  ],
  instructions:[
    "Dans un petit bol, fouetter les oeufs, le sel et le poivre. Faire fondre le beurre dans une poele antiadhesive a feu moyen",
    "Verser le melange d'oeufs dans la poele et reduire a feu moyen-doux. Quand les oeufs commencent a prendre, "+
    "les decoller doucement des parois et du fon de la poele pour former des gros grumeaux tendres.",
    "Cuire jusqu'a ce que les oeufs epaissisent et qu'il ne reste plus de liquide visible, mais sans quw les oeufs soient secs"
  ]
}

const horaire = {heures:23, minutes:35}
const etudiants = [
  {'note' : 8.5, 'nom' : 'Adam Bernard', 'matricule' : '486123'},
  {'note' : 10.0, 'nom' : 'Charles Demers', 'matricule' : '375911'},
  {'note' : 6.0, 'nom' : 'Eric Fillion', 'matricule' : '025893'},
  {'note' : 5.5, 'nom' : 'Guy Huard', 'matricule' : '507962'},
  {'note' : 6.0, 'nom' : 'Ian Jacob', 'matricule' : '935700'},
  {'note' : 7.0, 'nom' : 'Kim Labrecque', 'matricule' : '135796'},
  {'note' : 10.0, 'nom' : 'Michel Nolet', 'matricule' : '579461'},
  {'note' : 2.5, 'nom' : 'Olivier Paquet', 'matricule' : '356919'},
  {'note' : 0.0, 'nom' : 'Quentin Roberge', 'matricule' : '791222'},
  {'note' : 9.5, 'nom' : 'Sylvie Tanguay', 'matricule' : '777855'},
];


function Affiche(){
  return <>
    <Recette recette={recette} />
    <Horloge horloge heures={horaire.heures} minutes={horaire.minutes} />
    <TableauEtudiant etudiants={etudiants} />
    <StatutClasse etudiants={etudiants} />
  </>
}

root.render(
    <Affiche />
);
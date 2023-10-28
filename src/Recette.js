import React from 'react';
import {Entete} from './Entete.js'
import {Ingredients} from './Ingredients.js'
import {Instructions} from './Instructions.js'


export function Recette({recette}){
    console.log(recette);
    return <>
       <Entete titre={recette.titre} description={recette.description} />
       <Ingredients ingredients={recette.ingredients}/>
       <Instructions instructions={recette.instructions}/>
       </>
  }
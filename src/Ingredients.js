import React from 'react';
import {Ingredient} from './Ingredient.js'
import { TitreSecondaire } from './Titresecondaire.js';

export function Ingredients({ingredients}){
    return (
      <div>
        <TitreSecondaire titre={"Ingredients"}/>
        <ul>
          {ingredients.map(i => 
            <Ingredient ingredient={i} key={i} />)}
        </ul>
      </div>
    )
  }
import React from 'react';
import {Ingredient} from './Ingredient.js'

export function Ingredients({ingredients}){
    return (
      <div>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(i => 
            <Ingredient ingredient={i} key={i} />)}
        </ul>
      </div>
    )
  }
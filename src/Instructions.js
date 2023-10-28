import React from 'react';
import {Instruction} from "./Instruction.js"

export function Instructions({instructions}){
    return (
      <div>
        <h2>Instructions</h2>
        <ol>
          {instructions.map(i => 
            <Instruction instructions={i} key={i} />)}
        </ol>
      </div>
    )
  }
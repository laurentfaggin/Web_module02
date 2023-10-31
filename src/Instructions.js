import {Instruction} from "./Instruction.js"
import { TitreSecondaire } from './Titresecondaire.js';

export function Instructions({instructions}){
    return (
      <div>
        <TitreSecondaire titre={"Instructions"}/>
        <ol>
          {instructions.map(i => 
            <Instruction instructions={i} key={i} />)}
        </ol>
      </div>
    )
  }
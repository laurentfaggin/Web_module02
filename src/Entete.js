import React from 'react';
import {TitrePrincipal} from "./TitrePrincipal.js"
import {Description} from "./Description.js"

export function Entete({titre,description}){
    return (
      <div>
        <TitrePrincipal titre={titre} />
        <Description description={description} />
      </div>
    );
  }
  
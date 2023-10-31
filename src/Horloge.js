
export function Horloge({heures, minutes}){
  if(heures < 0 || heures > 23){
    return <>
      <p>l'heure doit etre comprise entre 0 et 23!</p>
    </>
  }
  else if(minutes < 0 || minutes > 59){
    <>
    <p>les minutes doivent etre comprises entre 0 et 59!</p></>
  }
  else{
    let postHeures;  
    postHeures = heures >= 0 && heures < 12 ? "AM" : "PM";
    heures = heures >= 0 && heures < 12 ? heures : heures%12;
    return <p><strong>{heures}:{minutes} {postHeures}</strong></p>;
  }
}
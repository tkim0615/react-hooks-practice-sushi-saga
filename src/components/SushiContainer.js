import React,{useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
const numSushi=4
function SushiContainer({sushis, handleEaten}) {
  const[index, setIndex] = useState(0);
 

  const handleClick = () => {
    setIndex(index + 4);
  };



  return (
    <div className="belt">
      {sushis.slice(index, index+numSushi).map(sushi => <Sushi key={sushi.id} sushi={sushi} handleEaten={handleEaten}  />)}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;

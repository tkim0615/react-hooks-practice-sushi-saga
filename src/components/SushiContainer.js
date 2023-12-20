import React,{useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
const numSushi=4
function SushiContainer() {
  const [sushis, setSushis] = useState([]);
  const[index, setIndex] = useState(0);
  useEffect(() => {
    fetch("http://127.0.0.1:3001/sushis")
    .then((res) => res.json())
    .then((data) => setSushis(data));
  }, []);

  const handleClick = () => {
    setIndex(index + 4);
  };

  




  return (
    <div className="belt">
      {sushis.slice(index, index+numSushi).map(sushi => <Sushi key={sushi.id} sushi={sushi}  />)}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;

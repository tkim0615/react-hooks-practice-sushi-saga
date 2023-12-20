import React,{useState,useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
const budget = 100

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(budget);
  useEffect(() => {
    fetch("http://127.0.0.1:3001/sushis")
    .then((res) => res.json())
    .then((data) => setSushis(data));
  }, []);

  
 function handleEaten(eatenSushi) {
    if(!eatenSushi.eaten && eatenSushi.price <= money){  
      setMoney(money - eatenSushi.price)
   
      const updatedSushiArray = sushis.map( sushi =>{
      if(sushi.id === eatenSushi.id){
        return {...sushi, eaten: true}
      }else{
        return sushi
      }
    })
    setSushis(updatedSushiArray)
  }
 }

 const emptyPlates = sushis.filter(sushi =>{
  if(sushi.eaten === true){
    return true
  }
 })




  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEaten={handleEaten} />
      <Table money={money} plates={emptyPlates } />
    </div>
  );
}

export default App;

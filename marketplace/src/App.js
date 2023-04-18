import "./App.css";
import CarBrands from "./components/CarBrands/CarBrands.jsx";

const carList = [
  { brand: "Lamborghini", model: "Murcielago" },
  { brand: "Ferrari", model: "F40" },
  { brand: "Alfa Romeo", model: "155 GTA" },
  { brand: "BMW", model: "E30 M3" },
  { brand: "Lancia", model: "Delta Integrale" },
];

function App() {
  return (
    <div className="App">
      <CarBrands list={carList}/>
    </div>
  );
}

export default App;

import './App.css';
import Mascota from './components/mascota';

function App() {

  const mascotas = [
    {id: 1, nombre: "Max", edad: "3", sexo: "Macho", raza: "Golden Retriever", tamanio: "Grande"},
    {id: 2, nombre: "Gomita", edad: "2", sexo: "Hembra", raza: "Criollo", tamanio: "Mediano"},
    {id: 3, nombre: "Fredo", edad: "3", sexo: "Macho", raza: "Criollo", tamanio: "Grande"},
    {id: 4, nombre: "Lupe", edad: "4", sexo: "Hembra", raza: "Pit Bull", tamanio: "Grande"},
    {id: 5, nombre: "Chacha", edad: "3", sexo: "Hembra", raza: "Criolla", tamanio: "Grande"}, 
  ]
  const mapeo = (mascota) => {
    return <Mascota  mascota={mascota}/>
  }
  return (
    <div className="App">
      <h1>Clientes caninos de veterinaria</h1>
      {mascotas.map(mapeo)}
    </div>
  );
}

export default App;

import React from "react";
class Mascota extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Nombre: {this.props.mascota.nombre}</h2>
        <ul>
          <li>Edad: {this.props.mascota.edad} </li>
          <li>Sexo: {this.props.mascota.sexo} </li>
          <li>Raza: {this.props.mascota.raza}</li>
          <li>Tamaño:{this.props.mascota.tamanio}</li>
        </ul>
      </>
    );
  }
}
export default Mascota;

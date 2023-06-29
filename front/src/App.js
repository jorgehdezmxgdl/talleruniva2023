import * as React from "react";
import Login from "./Componentes/Login";
import Main from "./Componentes/Main";


export default function App() {
  const [cambio,  setCambio]  = React.useState(0);

  const ftCambio = () => {
     setCambio(1);
  };

  return (
     <>
       {cambio === 0 ? <Login ftCambio={ftCambio} /> : <Main />}
     </>
  );
}
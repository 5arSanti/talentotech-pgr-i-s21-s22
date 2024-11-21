import { ComponenteBasico } from "../Components/ComponenteBasico";
import { ComponenteConEstados } from "../Components/ComponenteConEstados";
import { ComponenteConPropiedades } from "../Components/ComponenteConPropiedades";

import "./App.css";

const App = () => {
    return(
        <div>
            <p>Hola, esta es mi primera pagina web con React.js</p>
            <ComponenteBasico/>

            <ComponenteConPropiedades/>
            
            <ComponenteConPropiedades 
                nombre={"Carlos Patiño"} 
                correo={"correo2.propiedades@email.com"}
            />

            <ComponenteConEstados/>
        </div>
    )
}

export default App;


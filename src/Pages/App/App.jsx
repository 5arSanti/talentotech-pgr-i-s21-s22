import { ComponenteBasico } from "../Components/ComponenteBasico";
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
        </div>
    )
}

export default App;


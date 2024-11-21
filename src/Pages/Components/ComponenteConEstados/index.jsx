import React from "react";

const ComponenteConEstados = () => {
    const [estado, setEstado] = React.useState(true);

    const handleCambioEstado = () => {
        setEstado(!estado);
    }

    return(
        <div>
            <p>Valor en el estado: {estado ? "Verdadero" : "Falso"}</p>
            <button
                onClick={handleCambioEstado}
            >
                Pulse aca para cambiar el estado
            </button>
        </div>
    );
}

export { ComponenteConEstados };

import React from "react";

const ComponenteConEfectos = () => {
    const [estadoAsincrono, setEstadoAsincrono] = React.useState("");

    React.useEffect(() => {
        setTimeout(() => {
            setEstadoAsincrono("Cambio de estado asincrono")
        }, 5000)
    }, []);

    return(
        <div>
            <p>Valor del estado asincrono: {estadoAsincrono}</p>
        </div>
    );
}

export { ComponenteConEfectos };


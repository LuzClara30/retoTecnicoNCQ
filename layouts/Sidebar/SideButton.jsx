//Explicaión del código:
//Representa un botón que se utiliza para abrir y cerrar la barra lateral.
//El botón cambia de estilo y posición según el estado de 'open'.
const SideButton = ({ open, onClick }) => {
    return (
        <div className={`py-3 flex ${open ? "justify-end" : "justify-center"}`}>
        <button
            onClick={onClick} //Función que se ejecuta al hacer clic en el botón cambiando el estado de 'open'
            type="button"
            className="inline-flex  p-2 items-center  text-sm text-white rounded-lg  hover:bg-secondary  "
        >
            <svg //estilo del svg del botón
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
            </svg>
        </button>
        </div>
    );
    };
    
    export default SideButton;
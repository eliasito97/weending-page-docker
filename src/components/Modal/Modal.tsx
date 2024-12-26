import React, { ReactNode, MouseEvent } from "react";

// Definición de la interfaz para las propiedades del modal
interface ModalProps {
	isOpen: boolean; // Define si el modal está abierto
	onClose: () => void; // Función para cerrar el modal
	children: ReactNode; // Contenido del modal
}

// Componente Modal con tipado TypeScript
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	// Si el modal no está abierto, no renderiza nada
	if (!isOpen) return null;

	// Maneja el clic fuera del modal
	const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLElement).id === "modal-overlay") {
			onClose();
		}
	};

	return (
		<div
			id="modal-overlay"
			onClick={handleOutsideClick}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
		>
			{/* Contenedor del modal */}
			<div
				className="relative w-full max-w-md rounded-lg shadow-lg flex flex-col items-center p-6 bg-white modal_tarek"
				onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
			>
				{/* Botón para cerrar el modal */}
				<button
					className="absolute top-2 right-2 text-black-600 hover:text-black-900"
					onClick={onClose}
					aria-label="Close modal"
				>
					&times;
				</button>

				{/* Contenido del modal */}
				<div className="w-full flex justify-center mb-4">{children}</div>
			</div>
		</div>
	);
};

export default Modal;

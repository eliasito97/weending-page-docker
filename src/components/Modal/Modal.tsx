import React, { ReactNode, MouseEvent } from "react";
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}
const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	const handleOutsideClick = (e) => {
		if (e.target.id === "modal-overlay") {
			onClose();
		}
	};
	return (
		<div
			id="modal-overlay"
			onClick={handleOutsideClick}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
		>
			<div
				className="relative w-full max-w-md modal_tarek rounded-lg shadow-lg flex flex-col items-center p-6"
				onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
			>
				{/* Botón de cerrar */}
				<button
					className="absolute top-2 right-2 text-black-600 hover:text-black-900 "
					onClick={onClose}
				>
					&times;
				</button>

				{/* Contenido del Creditos */}
				<div className="w-full flex justify-center mb-4">
					{children}
				</div>

			</div>
		</div>

	);
};

export default Modal;
import React from "react";
import Image from "next/image";
import MapButton from "../MapButton/MapButton";
import { SlLocationPin } from "react-icons/sl";
import Modal from "@/components/Modal/Modal";
import {useState} from "react";

function Location() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className="flex flex-col text-center items-center justify-center m-5 mb-10">
			<div className="flex flex-col items-center text-center justify-center text-2xl">
				<Image
					src={"/assets/tarek/iconos/recepcion.jpg"}
					alt={"Frame 1"}
					width={1200}
					height={1200}
					className="w-20 h-20 mb-10"
					priority
				/>
				<p className="font-semibold text-5xl mb-10 text-blue-900">
					Recepción
				</p>
				<p className="text-4xl text-blue-300 mb-2">Hora: 12:30 p.m.</p>
				<p className="text-4xl text-blue-300 mb-2">La Orquídea</p>
				<p className="text-4xl text-blue-300 mb-10">
					Av. D'Orbigny 320
				</p>
				<div className="flex flex-row mb-10">
					<SlLocationPin className="inline text-5xl text-blue-400" />
					<MapButton
						link="https://maps.app.goo.gl/C77L7Hq1ZxCoGshSA"
						label="Ver Mapa"
					/>
				</div>
				<Image
					src={"/assets/tarek/tarek12.jpg"}
					alt={"Frame 1"}
					width={1200}
					height={1200}
					className="w-auto h-auto rounded-2xl mb-10"
					onClick={() => setIsModalOpen(true)}
					priority
				/>
				<p className="font-semibold text-5xl mb-10 text-blue-900">
					Vestimenta
				</p>
				<p className="text-4xl text-blue-300 mb-10">Semi Formal</p>
				<Image
					src={"/assets/tarek/iconos/vestimenta.png"}
					alt={"Frame 1"}
					width={1200}
					height={1200}
					className="w-20 h-20 mb-10"
					priority
				/>
				<p className="text-4xl text-blue-300">No usar color blanco</p>
			</div>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<video
					src="/assets/tarek/videogay2.mp4" // Ruta del video
					controls // Habilita los controles del reproductor
					autoPlay={true} // Indica si se reproduce automáticamente
					loop={true} // Reproduce en bucle
					muted={true} // Silencia el video por defecto
					height={500}
					width={400}
					className="rounded-xl mb-8" // Clases Tailwind
				/>
			</Modal>
		</div>
	);
}

export default Location;

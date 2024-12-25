import React from "react";
import Image from "next/image";
import MapButton from "../MapButton/MapButton";
import { SlLocationPin } from "react-icons/sl";
import Modal from "@/components/Modal/Modal";
import {useState} from "react";

function Location() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);

	const openModalWithContent = (content: React.ReactNode) => {
		setModalContent(content);
		setIsModalOpen(true);
	};
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
				<p className="font-semibold text-5xl mb-10 title">
					Recepción
				</p>
				<p className="text-4xl text mb-2">Hora: 13:30 p.m.</p>
				<p className="text-4xl text mb-2">La Tiquipaya</p>
				<p className="text-4xl text mb-10">
					Salón de eventos Tiquipaya
				</p>
				<Image
					src={"/assets/tarek/mapa.jpg"}
					alt={"Frame 1"}
					width={400}
					height={400}
				/>
				<div className="flex flex-row mb-10 py-10">

					<SlLocationPin className="inline text-5xl title"/>
					<MapButton
						link="https://maps.app.goo.gl/z3DTSwtuPfeNpuwa7?g_st=iw"
						label="Ver Mapa"
					/>

				</div>

				<Image
					src={"/assets/tarek/tarek12.jpg"}
					alt={"Frame 1"}
					width={700}
					height={700}
					className="w-auto h-auto rounded-2xl mb-10"
					onClick={() =>
						openModalWithContent(
							<>
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
								<p className="title font-semibold text-center mt-4 text-4xl">Disfruta de nuestro video especial</p>
							</>
						)
					}
					priority
				/>
				<p className="font-semibold text-5xl mb-10 title">
					Vestimenta
				</p>
				<p className="text-4xl text mb-10">Semi Formal</p>
				<Image
					src={"/assets/tarek/iconos/vestimenta.png"}
					alt={"Frame 1"}
					width={1200}
					height={1200}
					className="w-20 h-20 mb-10"
					priority
				/>

			</div>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<div className="flex flex-col items-center">
					{modalContent}
				</div>
			</Modal>
		</div>
	);
}

export default Location;

import React from "react";
import MapButton from "../MapButton/MapButton";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import {useState} from "react";
import Creditos from "@/components/Creditos/Creditos";
import {Header} from "@/components/Header";

function Attendance() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);

	const openModalWithContent = (content: React.ReactNode) => {
		setModalContent(content);
		setIsModalOpen(true);
	};
	return (
		<div className="flex flex-col text-center items-center justify-center m-2">
			<p className="mb-8 text-center text-4xl text">
				"por encima de todo, vistanse de amor, que es el vínculo pefecto
				- Colosenses 3:14"
			</p>
			<h3 className="font-semibold text-5xl title mb-10">
				Confirma tu asistencia
			</h3>
			<p className="text-4xl text mb-10">
				Tu presencia es importante para nosotros, por favor confirma tu
				asistencia hasta el 15 de Diciembre
			</p>
			<div className="flex md:flex-row flex-col mb-10 items-center">
				<CiCalendarDate className="inline text-5xl title"/>
				<MapButton
					link="https://api.whatsapp.com/send?phone=59170171064&text=%C2%A1Hola%20Tarek!%20%F0%9F%91%8B%20%C2%A1Confirmo%20mi%20asistencia%20a%20la%20boda!%20%F0%9F%8E%89%20Estoy%20emocionado%2Fa%20de%20celebrar%20este%20d%C3%ADa%20tan%20especial%20junto%20a%20ustedes.%20%C2%A1Nos%20vemos%20pronto!%20%F0%9F%91%B0%F0%9F%A4%B5%20%20Nombre%3A"
					label="Confirma Con el Novio"
				/>
				<CiCalendarDate className="inline text-5xl title"/>
				<MapButton
					link="https://api.whatsapp.com/send?phone=59175148825&text=%C2%A1Hola%20Danni!%20%F0%9F%91%8B%20%C2%A1Confirmo%20mi%20asistencia%20a%20la%20boda!%20%F0%9F%8E%89%20Estoy%20emocionado%2Fa%20de%20celebrar%20este%20d%C3%ADa%20tan%20especial%20junto%20a%20ustedes.%20%C2%A1Nos%20vemos%20pronto!%20%F0%9F%91%B0%F0%9F%A4%B5%20%20Nombre%3A"
					label="Confirma Con la Novia"

				/>
			</div>
			<p className="text-4xl text mb-10">
				Con mucha ilusión queremos vivir este momento rodeados de
				personas que han formado parte de nuestra historia.
			</p>
			<p className="text-4xl text mb-10">
				Será un honor contar con tu presencia.
			</p>
			<h3 className="font-semibold text-5xl title mb-10">
				¡Te esperamos!
			</h3>
			<div className="flex flex-row mb-10">
				<button
					onClick={() =>
						openModalWithContent(
							<>
								<Image
									src={"/assets/tarek/batman.png"}
									width={350}
									height={350}
									className="rounded-xl"
									priority
								/>
								<div
									className="relative h-32 w-full overflow-hidden text-center"
								>
								<Creditos/>
								</div>

							</>
						)
					}
					className="cuadrados py-2 px-4 rounded-3xl buttons text-4xl">
					<p className="title">
						¡No aprietes ese botón!
					</p>
				</button>
			</div>
			<div className="relative md:ml-60 md:-top-10 mt-5 md:mt-0">
				<Image
					src={"/assets/tarek/flores1.png"}
					alt={"Frame 1"}
					width={2500}
					height={2500}
					className="imagenaux1 mb-10 rounded-2xl"
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

export default Attendance;

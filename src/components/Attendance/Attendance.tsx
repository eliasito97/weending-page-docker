import React from "react";
import MapButton from "../MapButton/MapButton";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";

function Attendance() {
	return (
		<div className="flex flex-col text-center items-center justify-center m-2">
			<p className="mb-8 text-center text-4xl text-blue-300">
				"por encima de todo, vistanse de amor, que es el vínculo pefecto
				- Colosenses 3:14"
			</p>
			<h3 className="font-semibold text-5xl text-blue-900 mb-10">
				Confirma tu asistencia
			</h3>
			<p className="text-4xl text-blue-300 mb-10">
				Tu presencia es importante para nosotros, por favor confirma tu
				asistencia hasta el 15 de Diciembre
			</p>
			<div className="flex flex-row mb-10">
				<CiCalendarDate className="inline text-5xl text-blue-400"/>
				<MapButton
					link="https://api.whatsapp.com/send?phone=59170171064&text=%C2%A1Hola%20Tarek!%20%F0%9F%91%8B%20%C2%A1Confirmo%20mi%20asistencia%20a%20la%20boda!%20%F0%9F%8E%89%20Estoy%20emocionado%2Fa%20de%20celebrar%20este%20d%C3%ADa%20tan%20especial%20junto%20a%20ustedes.%20%C2%A1Nos%20vemos%20pronto!%20%F0%9F%91%B0%F0%9F%A4%B5%20%20Nombre%3A"
					label="Confirma Con el Novio"
				/>
				<CiCalendarDate className="inline text-5xl text-blue-400"/>
				<MapButton
					link="https://api.whatsapp.com/send?phone=59175148825&text=%C2%A1Hola%20Danni!%20%F0%9F%91%8B%20%C2%A1Confirmo%20mi%20asistencia%20a%20la%20boda!%20%F0%9F%8E%89%20Estoy%20emocionado%2Fa%20de%20celebrar%20este%20d%C3%ADa%20tan%20especial%20junto%20a%20ustedes.%20%C2%A1Nos%20vemos%20pronto!%20%F0%9F%91%B0%F0%9F%A4%B5%20%20Nombre%3A"
					label="Confirma Con la Novia"

				/>
			</div>
			<p className="text-4xl text-blue-300 mb-10">
				Con mucha ilusión queremos vivir este momento rodeados de
				personas que han formado parte de nuestra historia.
			</p>
			<p className="text-4xl text-blue-300 mb-10">
				Será un honor contar con tu presencia.
			</p>
			<h3 className="font-semibold text-5xl text-blue-900 mb-10">
				¡Te esperamos!
			</h3>
			<Image
				src={"/assets/frame2.jpg"}
				alt={"Frame 2"}
				width={1200}
				height={1200}
				className="w-auto h-auto mb-10 rounded-2xl"
				priority
			/>
		</div>
	);
}

export default Attendance;

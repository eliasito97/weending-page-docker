import React from "react";
import MapButton from "../MapButton/MapButton";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";

function Attendance() {
	return (
		<div className="flex flex-col text-center items-center justify-center m-2">
			<h3 className="font-semibold text-5xl title mb-10">
				Confirma tu asistencia
			</h3>
			<p className="text-4xl title mb-10">
				Tu presencia es importante para nosotros, por favor confirma tu
				asistencia hasta el 20 de Diciembre
			</p>
			<div className="flex flex-row mb-10">
				<CiCalendarDate className="inline text-5xl title"/>
				<MapButton
					link="https://api.whatsapp.com/send?phone=59177480070&text=%C2%A1Hola%20Boris!%20%F0%9F%91%8B%20%C2%A1Confirmo%20mi%20asistencia%20a%20la%20boda!%20%F0%9F%8E%89%20Estoy%20emocionado%2Fa%20de%20celebrar%20este%20d%C3%ADa%20tan%20especial%20junto%20a%20ustedes.%20%C2%A1Nos%20vemos%20pronto!%20%F0%9F%91%B0%F0%9F%A4%B5%20%20Nombre%3A"
					label="Confirma con el Novio"
				/>
				<CiCalendarDate className="inline text-5xl title"/>
				<MapButton
					link="https://api.whatsapp.com/send?phone=59172709762&text=%C2%A1Hola%20Cindy!%20%F0%9F%91%8B%20%C2%A1Confirmo%20mi%20asistencia%20a%20la%20boda!%20%F0%9F%8E%89%20Estoy%20emocionado%2Fa%20de%20celebrar%20este%20d%C3%ADa%20tan%20especial%20junto%20a%20ustedes.%20%C2%A1Nos%20vemos%20pronto!%20%F0%9F%91%B0%F0%9F%A4%B5%20%20Nombre%3A"
					label="Confirma con la Novia"

				/>
			</div>
			<p className="text-4xl title mb-10">
				Con mucha ilusión queremos vivir este momento rodeados de
				personas que han formado parte de nuestra historia.
			</p>
			<p className="text-4xl title mb-10">
				Será un honor contar con tu presencia.
			</p>
			<h3 className="font-semibold text-5xl title mb-10">
				¡Te esperamos!
			</h3>
			<Image
				src={"/assets/2.png"}
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

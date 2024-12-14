import React from "react";
import Image from "next/image";
import MapButton from "../MapButton/MapButton";
import {SlLocationPin} from "react-icons/sl";

function Location() {
	return (
		<div className="flex flex-col text-center items-center justify-center mb-10">
			<div className="flex flex-col items-center text-center justify-center text-2xl">

				<p className="font-semibold text-5xl mb-10 title">
					Recepción Social
				</p>
				<p className="text-4xl title mb-2">Salón de eventos "Los Pinos" </p>
				<p className="text-4xl title mb-2">Av. Tadeo Haenke y Av. J. Manuel Villavicencio</p>
				<p className="text-4xl title mb-10">
					Cochabamba, Diciembre 2024
				</p>
				<div className="flex flex-row mb-10">
					<SlLocationPin className="inline text-5xl title"/>
					<MapButton
						link="https://maps.app.goo.gl/B3fi3wG3tjTp4spC9"
						label="Ver Mapa"
					/>
				</div>
				<p className="text-4xl  title">
					PASE PARA 2 PERSONAS
				</p>
			</div>
		</div>
	);
}

export default Location;


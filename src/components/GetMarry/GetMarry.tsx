import React from "react";
import WeedingDay from "../WeedingDay/WeedingDay";

function GetMarry() {
	return (
		<div className="flex flex-col text-center items-center justify-center">
			<div className="text-center flex-1 mb-10">
				{/*<h2 className="text-5xl font-extrabold text-blue-900 mb-10">*/}
				{/*	¡Nos Casamos!*/}
				{/*</h2>*/}
				<WeedingDay />
				{/*<p className="text-4xl text-blue-300">faltan...</p>*/}
				<h2 className="text-3xl font-extrabold title">
					Capilla "Los Pinos" - 14:30 Horas
				</h2>
			</div>
		</div>
	);
}

export default GetMarry;

import React from "react";
import Image from "next/image";

function TimeLine() {
	return (
		<div className="flex flex-col justify-center items-center text-center m-5 mb-10">
			<div className="text-center mb-8">
				<h2 className="text-5xl font-semibold text-blue-900">
					Itinerario
				</h2>
			</div>
			<div className="flex-1 mb-10">
				<section className="grid grid-cols-5 gap-3 mb-2">
					<div className="">
						<Image
							src={"/assets/tarek/iconos/ceremonia.png"}
							alt={"Frame 1"}
							width={1500}
							height={1500}
							className="w-10 h-10 rounded-2xl"
							priority
						/>
					</div>
					<div className="">
						<Image
							src={"/assets/tarek/iconos/recepcion.jpg"}
							alt={"Frame 1"}
							width={1500}
							height={1500}
							className="w-10 h-10 rounded-2xl"
							priority
						/>
					</div>
					<div className="">
						<Image
							src={"/assets/tarek/iconos/brindis.png"}
							alt={"Frame 1"}
							width={1500}
							height={1500}
							className="w-10 h-10 rounded-2xl"
							priority
						/>
					</div>
					<div className="">
						<Image
							src={"/assets/tarek/iconos/comida.png"}
							alt={"Frame 1"}
							width={1500}
							height={1500}
							className="w-10 h-10 rounded-2xl"
							priority
						/>
					</div>
					<div className="">
						<Image
							src={"/assets/tarek/iconos/fin.png"}
							alt={"Frame 1"}
							width={1500}
							height={1500}
							className="w-10 h-10 rounded-2xl"
							priority
						/>
					</div>
				</section>
				<section className="grid grid-cols-5 gap-3 border-t-4 mr-6 ml-5 border-black">
					<div className="border-l-2 border-black size-3"></div>
					<div className="border-l-2 border-black ml-1"></div>
					<div className="border-l-2 border-black ml-5"></div>
					<div className="border-l-2 border-black ml-7"></div>
					<div className="border-r-2 border-black"></div>
				</section>
				<section className="grid grid-cols-5 gap-3">
					<div className="">
						<p className="text-sm font-bold text-blue-900">
							16 : 00 p.m.
						</p>
						<p className="text-sm text-blue-400">Ceremonia Civil</p>
					</div>
					<div className="">
						<p className="text-sm font-bold text-blue-900">
							18 : 00 p.m.
						</p>
						<p className="text-sm text-blue-400">Recepción</p>
					</div>
					<div className="">
						<p className="text-sm font-bold text-blue-900">
							20 : 00 p.m.
						</p>
						<p className="text-sm text-blue-400">Brindis</p>
					</div>
					<div className="">
						<p className="text-sm font-bold text-blue-900">
							21 : 00 p.m.
						</p>
						<p className="text-sm text-blue-400">Comida</p>
					</div>
					<div className="">
						<p className="text-sm font-bold text-blue-900">
							2 : 00 a.m.
						</p>
						<p className="text-sm font-bold text-blue-900">
							Felices por siempre
						</p>
					</div>
				</section>
			</div>
			<div className="grid grid-cols-2 m-1 gap-5 md:grid-cols-2">
				<Image
					src={"/assets/tarek/tarek8.jpg"}
					alt={"Image 1"}
					width={1200}
					height={1200}
					className="w-full h-full rounded-xl"
					priority
				/>
				<Image
					src={"/assets/tarek/tarek1.jpg"}
					alt={"Image 2"}
					width={1200}
					height={1200}
					className="w-full h-full rounded-xl"
					priority
				/>
			</div>
		</div>
	);
}

export default TimeLine;

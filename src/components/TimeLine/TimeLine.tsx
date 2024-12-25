import React from "react";
import Image from "next/image";
import {useState} from "react";
import Creditos from "@/components/Creditos/Creditos";
import Modal from "@/components/Modal/Modal";


function TimeLine() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);

	const openModalWithContent = (content: React.ReactNode) => {
		setModalContent(content);
		setIsModalOpen(true);
	};
	return (
		<div className="flex flex-col justify-center items-center text-center m-4 mb-10">
			<div className="text-center mb-4">
				<h2 className="text-4xl font-semibold title">
					Itinerario
				</h2>
			</div>
			<div className="flex-1 mb-10">
				<section className="grid grid-cols-4 gap-2 mb-2">
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
				<section className="grid grid-cols-4 gap-2 border-t-4 mr-4 ml-4 border-black">
					<div className="border-l-2 border-black size-4"></div>
					<div className="border-l-2 border-black ml-2"></div>
					<div className="border-l-2 border-black ml-4"></div>
					<div className="border-l-2 border-black ml-6"></div>
					<div className="border-r-2 border-black"></div>
				</section>
				<section className="grid grid-cols-4 gap-4">
					<div className="">
						<p className="text-sm font-bold title">
							13 : 30 p.m.
						</p>
						<p className="text-sm title">Recepción</p>
					</div>
					<div className="">
						<p className="text-sm font-bold title">
							15 : 30 p.m.
						</p>
						<p className="text-sm title">Brindis</p>
					</div>
					<div className="">
						<p className="text-sm font-bold title">
							16 : 00 p.m.
						</p>
						<p className="text-sm title">Comida</p>
					</div>
					<div className="">
						<p className="text-sm font-bold title">
							∞
						</p>
						<p className="text-sm title">
							Felices por siempre
						</p>
					</div>
				</section>
			</div>
			<div className="grid grid-cols-2 m-1 gap-5 md:grid-cols-2">
				<Image
					src={"/assets/tarek/tarek8.jpg"}
					alt={"Image 1"}
					width={1000}
					height={1000}
					className="w-full h-full rounded-xl"
					onClick={() =>
						openModalWithContent(
							<>
								<Image
									src={"/assets/tarek/tarekgay.jpg"}
									width={350}
									height={350}
									alt={"Frame 1"}
									className="rounded-xl"
									priority
								/>
								<p className="title font-semibold text-center mt-4 text-4xl">Disfruta de nuestra imagen especial</p>
							</>
						)
					}
					priority
				/>
				<Image
					src={"/assets/tarek/tarek1.jpg"}
					alt={"Image 2"}
					width={1000}
					height={1000}
					className="w-full h-full rounded-xl"
					onClick={() =>
						openModalWithContent(
							<>
								<Image
									src={"/assets/tarek/tarekgay2.jpg"}
									width={350}
									height={350}
									alt={"Frame 1"}
									className="rounded-xl"
									priority
								/>
								<p className="title font-semibold text-center mt-4 text-4xl">Disfruta de nuestra imagen especial</p>
							</>
						)
					}
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

export default TimeLine;

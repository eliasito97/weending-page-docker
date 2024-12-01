import Image from "next/image";
import { PiCrossLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Modal from "@/components/Modal/Modal";
import {useState} from "react";
import React from "react";
export function Gratitude() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);

	const openModalWithContent = (content: React.ReactNode) => {
		setModalContent(content);
		setIsModalOpen(true);
	};
	return (
		<div className="container flex mx-auto px-5 flex-col justify-center items-center text-center mb-10">
			<Image
				src={"/assets/gratitude-birds.png"}
				alt={"Frame 1"}
				width={1200}
				height={1200}
				className="mb-10 w-20 h-20"
				priority
			/>
			<div className="max-w-3xl text-center items-center justify-center text mb-10">
				<p className="mb-10 md:mt-8 text-5xl font-semibold title">
					Padres de la Novia
				</p>
				<p className="mb-10 md:mt-8 text-4xl">
					Lucio Daniel Peramas Eyzaguirre

				</p>
				<p className="mb-10 md:mt-8 text-4xl">
					Lenny Vargas Fernandez
				</p>
				<p className="mb-10 md:mt-8 font-semibold text-5xl title">
					Padres del Novio
				</p>
				<p className="mb-10 md:mt-8 text-4xl">
					Gonzalo Dante Chavarria Arevalo{" "}
					<PiCrossLight className="inline title"/>
				</p>
				<p className="mb-10 md:mt-8 text-4xl">Monica jorge Bouchabki Lens</p>
			</div>
			<div className="mb-10 w-full">
				<Swiper
					spaceBetween={60}
					slidesPerView={3}
					navigation
					loop={true}
					pagination={{clickable: true}}
					onClick={() =>
						openModalWithContent(
							<>
								<Image
									src={"/assets/tarek/tarekgay.jpg"}
									width={360}
									height={360}
									className="rounded-xl"
									priority
								/>
								<p className="title font-semibold text-center mt-4 text-4xl">Disfruta de nuestra imagen especial</p>
							</>
						)
					}
					className="rounded-xl"
				>
					<SwiperSlide>
						<Image
							src={"/assets/tarek/tarek4.jpg"}
							width={1000}
							height={500}
							className="rounded-xl"
							priority
						/>
					</SwiperSlide>
					{/*<SwiperSlide>*/}
					{/*	<Image*/}
					{/*		src={"/assets/tarek/aaaaa.jpg"}*/}
					{/*		width={1000}*/}
					{/*		height={500}*/}
					{/*		className="rounded-xl"*/}
					{/*		priority*/}
					{/*	/>*/}
					{/*</SwiperSlide>*/}
					<SwiperSlide>
						<Image
							src={"/assets/tarek/tarek7.jpg"}
							width={1000}
							height={500}
							className="rounded-xl"
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={"/assets/tarek/tarek.jpg"}
							width={1000}
							height={500}
							className="rounded-xl"
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={"/assets/tarek/tarek9.jpg"}
							width={1000}
							height={500}
							className="rounded-xl"
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={"/assets/tarek/tarek11.jpg"}
							width={1000}
							height={500}
							className="rounded-xl"
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={"/assets/tarek/tarek13.jpg"}
							width={360}
							height={360}
							className="rounded-xl"
							priority
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="text-center">
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<div className="flex flex-col items-center">
						{modalContent}
					</div>
				</Modal>
			</div>
		</div>
	);
}

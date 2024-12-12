import Image from "next/image";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { FaHeart } from "react-icons/fa";
export function Header() {
	return (
		<div className="container flex flex-col items-center mx-auto px-5 mb-10">
			<Image
				src={"/assets/1.png"}
				alt={"Frame 1"}
				width={1200}
				height={1200}
				className="w-auto h-auto mb-10 rounded-2xl ayuda"
				priority
			/>
			<div className="max-w-3xl text-center items-center">
				<h1 className="mb-10 text-5xl title">
					Nuestra Boda
				</h1>
				<h2 className="mb-10 text-8xl name">
					Cindy & Boris
				</h2>
			</div>
			{/*<div className="text-center items-center m-5 text-4xl">*/}
			{/*	<p className="mb-10 title">*/}
			{/*		Presiona el*/}
			{/*		<span className="pr-3 pl-4">*/}
			{/*			<FaHeart className="inline text-blue-900 text-1xl" />*/}
			{/*		</span>*/}
			{/*		para escuchar nuestra canción*/}
			{/*	</p>*/}
			{/*	<MusicPlayer />*/}
			{/*</div>*/}
			{/*<Image*/}
			{/*	src={"/assets/banner.jpg"}*/}
			{/*	alt={"Frame 1"}*/}
			{/*	width={1200}*/}
			{/*	height={1200}*/}
			{/*	className="w-auto h-auto rounded-2xl mb-8"*/}
			{/*	priority*/}
			{/*/>*/}
			<p className="mb-8 text-center text-4xl title">
				TENEMOS EL HONOR DE INVITARLOS
				A NUESTRA CEREMONIA RELIGIOSA Y CIVIL EL PROXIMO
			</p>
		</div>
	);
}

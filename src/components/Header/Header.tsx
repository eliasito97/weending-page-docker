import Image from "next/image";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { FaHeart } from "react-icons/fa";
export function Header() {
	return (
		<div className="container flex flex-col items-center mx-auto px-5 mb-10">
			<Image
				src={"/assets/frame1.jpg"}
				alt={"Frame 1"}
				width={1200}
				height={1200}
				className="w-auto h-auto mb-10 rounded-2xl"
				priority
			/>
			<div className="max-w-3xl text-center items-center">
				<h1 className="mb-10 text-5xl text-blue-300">
					Nuestra Boda Civil
				</h1>
				<h2 className="mb-10 text-8xl font-semibold text-blue-900">
					Tarek & Daniela
				</h2>
			</div>
			<div className="text-center items-center m-5 text-4xl">
				<p className="mb-10 text-blue-300">
					Presiona el
					<span className="pr-3 pl-4">
						<FaHeart className="inline text-blue-900 text-1xl"/>
					</span>
					para escuchar nuestra canción
				</p>
				<MusicPlayer/>
			</div>
			<video
				src="/assets/tarek/videogay1.mp4" // Ruta del video
				controls // Habilita los controles del reproductor
				autoPlay={true} // Indica si se reproduce automáticamente
				loop={true} // Reproduce en bucle
				muted={true} // Silencia el video por defecto
				height={500}
				width={400}
				className="rounded-xl mb-8" // Clases Tailwind
			/>
				<p className="mb-8 text-center text-4xl text-blue-300">
					... "En este día especial, queremos rodearnos de nuestras familias y amigos para celebrar el amor que nos une.
					Compartan con nosotros en nuestra boda CIVIL".
					...
				</p>
		</div>
);
}

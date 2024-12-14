import Image from "next/image";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { FaHeart } from "react-icons/fa";
import ImageDownloader from "@/components/DownloadImage/DownloadImage";
export function Header() {
	return (
		<div className="container flex flex-col items-center mx-auto px-5 mb-10">
			<div className="relative md:mr-60 md:top-10">
				<Image
					src={"/assets/1.png"}
					alt={"Frame 1"}
					width={500}
					height={500}
					className="rounded-2xl pe-8 justify-start"
					priority
				/>
			</div>

			<div className="flex flex-col text-center items-center justify-center m-2">
				<h3 className="font-semibold text-5xl title mb-10">
					Sugerencia
				</h3>
				<p className="text-4xl text mb-10">
					SU PRESENCIA Y BUENOS DESEOS SON
					SUFICIENTES PARA NOSOTROS, EN CASO
					QUE DESEEN HACERNOS UN OBSEQUIO.
				</p>
				<Image
					src={"/qr.jpg"}
					alt={"Frame 2"}
					width={400}
					height={400}
					className="rounded-2xl"
					priority
				/>
			</div>
			<div className="relative md:ml-60 md:-top-10 mt-5 md:mt-0">
				<Image
					src={"/assets/2.png"}
					alt={"Frame 2"}
					width={500}
					height={500}
					className="rounded-2xl"
					priority
				/>
			</div>
		</div>
	);
}

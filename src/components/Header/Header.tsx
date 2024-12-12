import Image from "next/image";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { FaHeart } from "react-icons/fa";
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

			<div className="max-w-3xl text-center items-center">
				<h1 className="mb-10 text-5xl title">
					Nuestra Boda
				</h1>
				<h2 className="mb-10 text-8xl name">
					Cindy & Boris
				</h2>
			</div>
			<p className="text-center text-4xl title">
				TENEMOS EL HONOR DE INVITARLOS
				A NUESTRA CEREMONIA RELIGIOSA Y CIVIL EL PROXIMO
			</p>
		</div>
	);
}

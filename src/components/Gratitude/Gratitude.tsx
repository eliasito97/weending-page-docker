import Image from "next/image";
import { PiCrossLight } from "react-icons/pi";

export function Gratitude() {
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
			<div className="max-w-3xl text-center items-center justify-center text-blue-300 mb-10">
				<p className="mb-10 md:mt-8 text-5xl font-semibold text-blue-900">
					Padres de la Novia
				</p>
				<p className="mb-10 md:mt-8 text-4xl">
					Lucio Daniel Peramas Eyzaguirre

				</p>
				<p className="mb-10 md:mt-8 text-4xl">
					Lenny Vargas Fernandez
				</p>
				<p className="mb-10 md:mt-8 font-semibold text-5xl text-blue-900">
					Padres del Novio
				</p>
				<p className="mb-10 md:mt-8 text-4xl">
					Gonzalo Dante Chavarria Arevalo{" "}
					<PiCrossLight className="inline text-black" />
				</p>
				<p className="mb-10 md:mt-8 text-4xl">Monica jorge Bouchabki Lens</p>
			</div>
			<div className="grid grid-cols-2 mb-10 gap-5 md:grid-cols-2">
				<Image
					src={"/assets/tarek/tarek2.jpg"}
					alt={"Image 1"}
					width={1200}
					height={1200}
					className="w-full h-full rounded-xl "
					priority
				/>
				<Image
					src={"/assets/tarek/tarek3.jpg"}
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

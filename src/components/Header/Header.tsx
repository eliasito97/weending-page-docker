import Image from "next/image";


const variants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
};
export function Header() {
	return (
		<div className="container flex flex-col items-center mx-auto px-5 mb-10">
			<div className="relative md:mr-0 md:top-10">
				<Image
					src={"/assets/tarek/flores2.png"}
					alt={"Frame 1"}
					width={2500}
					height={2500}
					className="imagenaux mb-10 rounded-2xl"
					priority
				/>
			</div>
			<div className="max-w-3xl text-center items-center">
				<h1 className="mb-10 text-5xl text">
					Nuestra Boda Civil
				</h1>
				<h2 className="mb-10 text-8xl font-semibold title">
					Daniela & Tarek
				</h2>
			</div>
			<video
				src="/assets/tarek/videogay3.mp4" // Ruta del video
				controls // Habilita los controles del reproductor
				autoPlay={true} // Indica si se reproduce automáticamente
				loop={true} // Reproduce en bucle
				muted={true} // Silencia el video por defecto
				height={500}
				width={400}
				className="rounded-xl mb-8" // Clases Tailwind
			/>
				<p className="mb-8 text-center text-4xl text">
					"En este día especial, queremos rodearnos de nuestras familias y amigos para celebrar el amor que nos une.
					Compartan con nosotros en nuestra boda CIVIL".
				</p>
		</div>
);
}

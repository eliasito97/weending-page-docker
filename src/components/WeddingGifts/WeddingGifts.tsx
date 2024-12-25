import React from "react";
import Image from "next/image";


function WeddingGifts() {
	return (
		<div className="flex flex-col text-center items-center justify-center m-2">
			<h3 className="font-semibold text-5xl title mb-10">
				Regalos
			</h3>
			<p className="text-4xl text mb-10">
				Tu presencia será nuestro mayor regalo, pero si estas pensando
				en regalarnos algo, un poco de efectivo también suena bien!
				para asi iniciar nuestro nuevo hogar juntos.
			</p>
			{/*<ImageDownloader />*/}
			<Image
				src={"/assets/tarek/qr.jpg"}
				alt={"Frame 1"}
				width={400}
				height={400}
				className="mb-10"
				priority
			/>
		</div>
	);
}

export default WeddingGifts;

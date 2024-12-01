import React from "react";
import ImageDownloader from "../DownloadImage/DownloadImage";

function WeddingGifts() {
	return (
		<div className="flex flex-col text-center items-center justify-center m-2">
			<h3 className="font-semibold text-5xl title mb-10">
				Regalos
			</h3>
			<p className="text-4xl text mb-10">
				Tu presencia será nuestro mayor regalo, pero si estas pensando
				en regalarnos algo, un poco de efectivo también suena bien!
				¿Nos echas una mano para empezar nuestra vida juntos.?
			</p>
			<ImageDownloader />
		</div>
	);
}

export default WeddingGifts;

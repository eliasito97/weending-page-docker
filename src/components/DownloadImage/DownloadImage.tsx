import React from "react";
import { IoGiftOutline } from "react-icons/io5";

const ImageDownloader = () => {
	const downloadImage = () => {
		const imageSrc = "/image.jpeg";
		const link = document.createElement("a");
		link.href = imageSrc;
		link.download = "downloaded_image.jpeg";
		link.click();
	};

	return (
		<div className="mb-10">
			<button
				className="cuadrados hover:bg-secondary-50 p-2 rounded-3xl text-3xl title"
				onClick={downloadImage}>
				<IoGiftOutline className="inline text-5xl title" />
				Lluvia de sobres
			</button>
		</div>
	);
};

export default ImageDownloader;

import React from "react";

interface MapButtonProps {
	link: string;
	label: string;
}

const MapButton: React.FC<MapButtonProps> = ({ link, label }) => {
	const handleClick = () => {
		window.location.href = link;
	};

	return (
		<div className="m-2 ">
			<button
				className="cuadrados py-2 px-4 rounded-3xl buttons text-4xl"
				onClick={handleClick}>
				{label}
			</button>
		</div>
	);
};

export default MapButton;

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Playfair_Display({ weight: "400", style:['italic'],subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nuestra Boda T & D",
	description: "Pagina creada por Alex Wong",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

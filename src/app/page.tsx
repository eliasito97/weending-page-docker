"use client";

import CountDown from "@/components/CountDown/CountDown";
import GetMarry from "@/components/GetMarry/GetMarry";
import { Gratitude } from "@/components/Gratitude";
import { Header } from "@/components/Header";
import { TransitionPage } from "@/components/TransitionPage";
import Location from "@/components/Location/Location";
import TimeLine from "@/components/TimeLine/TimeLine";
import Attendance from "@/components/Attendance/Attendance";
import { motion } from "framer-motion";
import WeddingGifts from "@/components/WeddingGifts/WeddingGifts";

const variants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
};
export default function Home() {
	return (
		<>
			<TransitionPage />
			<main>
				<motion.div
					className="text-center mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{once: false, amount: 0.2}}
					transition={{duration: 0.8}}
					variants={variants}
				>
					<Header/>
				</motion.div>
				<motion.div
					className="text-center mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{once: false, amount: 0.2}}
					transition={{duration: 0.8}}
					variants={variants}
				>
					<Gratitude/>
				</motion.div>
				<motion.div
					className="text-center mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{once: false, amount: 0.2}}
					transition={{duration: 0.8}}
					variants={variants}
				>
					<GetMarry/>
				</motion.div>
				<motion.div
					className="text-center mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{once: false, amount: 0.2}}
					transition={{duration: 0.8}}
					variants={variants}
				>
					<CountDown/>
				</motion.div>
				<motion.div
					className="text-center mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{once: false, amount: 0.2}}
					transition={{duration: 0.8}}
					variants={variants}
				>
					<Location/>
				</motion.div>

				<motion.div
					className="text-center mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{once: false, amount: 0.2}}
					transition={{duration: 0.8}}
					variants={variants}
				>
					<TimeLine/>
				</motion.div>
				<motion.div
					className="text-center mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{once: false, amount: 0.2}}
					transition={{duration: 0.8}}
					variants={variants}
				>
					<WeddingGifts/>
				</motion.div>
				<motion.div
					className="text-center mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{once: false, amount: 0.2}}
					transition={{duration: 0.8}}
					variants={variants}
				>
					<Attendance/>
				</motion.div>
			</main>
		</>
	);
}

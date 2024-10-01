"use client";

import { CustomLink } from "@/components/customLink";
import { useContext } from "react";
import { AppContext } from "./context-provider";
import ContextProvider from "./context-provider";
import Image from "next/image";

export default function Home() {
	const { userBike } = useContext(AppContext);
	const { name, description, components } = userBike;

	return (
		<ContextProvider>
			<main className="mx-12 hero">
				<Image
					src={"https://images.pexels.com/photos/2790148/pexels-photo-2790148.jpeg"}
					width={600}
					height={800}
					className="z-0 absolute right-0"
					alt="bike"
				></Image>
				<section className="pt-4">
					<h1 className="text-8xl font-medium">{name}</h1>
					<p className="text-4xl font-thin ml-3 mt-2">{description}</p>
					<section
						id="frames"
						className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-2 mt-6"
					>
						<p className="mb-8">
							{components.frame && (
								<div className="space-y-4">
									<p>{components.frame.name}</p>
									<Image
										src={components.frame.imgURL}
										width={70}
										height={70}
										alt={`Photo of frame`}
									/>
								</div>
							)}
							{!components.frame && "Please choose a frame!"}
						</p>
						<CustomLink linkText="View Frames" href="/frames" />
					</section>
				</section>
			</main>
		</ContextProvider>
	);
}

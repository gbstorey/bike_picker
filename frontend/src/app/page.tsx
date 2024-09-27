import { frames } from "../../utils/dummy";
import Image from "next/image";

export default async function Home() {
	return (
		<main className="max-w-2xl mx-auto my-4">
			<section id="frames" className="flex flex-wrap gap-4">
				{frames.map((frame) => {
					return (
						<article key={frame._id} className="flex-1">
							<div className="bg-gray-800 border border-white text-center shadow-[0px_8px_1px_rgba(221,_221,_221,_1),_0_10px_8px_rgba(204,_204,_204,_1)]">
								<h2 className="p-2">{frame.name}</h2>
								<Image
									src={frame.imgURL}
									width={300}
									height={200}
									alt="Bike Frame"
								/>
								<div className="border-y border-white py-2">
									<h3>${frame.priceUSD.toFixed(2)}</h3>
								</div>
								<div className="border-y border-white py-1">
									Wheel Size: {frame.wheelSizeInches} in
								</div>
								<div className="border-y border-white py-1">
									Suspension: {frame.wheelSizeInches} mm
								</div>
								<div className="border-y border-white py-1">
									Intended use: {frame.intendedUse}
								</div>
								<div
									className={`border-y border-white py-1 ${
										frame.available && "text-green-400"
									}`}
								>
									{frame.available ? "Available" : "Not Available"}
								</div>
								<div className="border-y border-white py-1">
									Material: {frame.material}
								</div>
								<div className="border-y border-white py-1">
									Weight: {frame.weightLbs} lbs
								</div>
								<div className="border-y border-white py-1">
									{JSON.stringify(frame.colors)}
								</div>
								<div className="border-y border-white py-1">
									{JSON.stringify(frame.size)}
								</div>
							</div>
						</article>
					);
				})}
			</section>
		</main>
	);
}

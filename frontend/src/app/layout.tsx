import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Bike App",
	description: "Garrett and Hudson's Big Break",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="max-w-7xl relative mx-auto">{children}</body>
		</html>
	);
}

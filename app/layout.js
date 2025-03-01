import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Flex-box tutorial",
	description: "Tutorial de flex-box, aun en desarrollo",
};

export default function RootLayout({ children }) {
	return (
		<ViewTransitions>
			<html lang="es">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased dark font-[family-name:var(--font-geist-sans)] overflow-x-hidden`}
				>
					{children}
				</body>
			</html>
		</ViewTransitions>
	);
}

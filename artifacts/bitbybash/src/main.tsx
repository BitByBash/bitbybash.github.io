import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import portraitSrc from "./assets/portrait.jpeg";

// Ensure the favicon is set to the portrait asset resolved by Vite (hashed in production)
try {
	const setFavicon = (url: string) => {
		let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.head.appendChild(link);
		}
		link.href = url;
	};
	setFavicon(portraitSrc as unknown as string);
} catch (e) {
	// ignore in non-browser environments
}

createRoot(document.getElementById("root")!).render(<App />);

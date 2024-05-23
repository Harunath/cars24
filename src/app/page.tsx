import "@splidejs/react-splide/css";
import TopHomeCards from "./components/Home/TopHomeCards";
import TopSlider from "./components/Home/TopSlider";
import WhyBuy from "./components/Home/WhyBuy";

export default function Home() {
	return (
		<main className="h-full">
			<TopSlider />
			<TopHomeCards />
			<WhyBuy />
		</main>
	);
}

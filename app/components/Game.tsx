import Bird from "./Bird";
import Foreground from "./Foreground";
import Image from "next/image";
import bg from "/public/images/bg.png";

const Game = () => {
	return (
		<div className="relative w-80 h-[512px]">
			<Image alt="" src={bg} fill />
			<Bird rotate={0} y={60} />
			<Foreground />
		</div>
	);
};

export default Game;

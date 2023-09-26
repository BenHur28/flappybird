import Bird from "./Bird";
import Foreground from "./Foreground";

const Game = () => {
	return (
		<div>
			<Bird rotate={0} y={60} />
			<Foreground />
		</div>
	);
};

export default Game;

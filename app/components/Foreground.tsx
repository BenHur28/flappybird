import Image from "next/image";
import fg from "/public/images/fg.png";

const Foreground = () => {
	return (
		<div className="absolute bottom-0 w-80 h-28">
			<Image alt="" src={fg} fill />
		</div>
	);
};

export default Foreground;

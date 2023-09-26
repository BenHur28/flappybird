import Image from "next/image";
import TopPipeImage from "/public/images/pipe-top.png";
import BottomPipeImage from "/public/images/pipe-bottom.png";

const Pipe = () => {
	return (
		<div>
			<div className="absolute top-0 left-32 w-12 h-48">
				<Image alt="" src={TopPipeImage} fill />
			</div>
			<div className="absolute bottom-0 left-32 w-12 h-48">
				<Image alt="" src={BottomPipeImage} fill />
			</div>
		</div>
	);
};

export default Pipe;

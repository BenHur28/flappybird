import Image from "next/image";
import bird from "/public/images/bird.png";

type BirdProps = {
	rotate: number;
	y: number;
};

const Bird = ({ y, rotate }: BirdProps) => {
	return (
		<div className={`absolute top-${y.toString()} left-60 w-20 h-14`}>
			<Image alt="" src={bird} fill />
		</div>
	);
};

export default Bird;

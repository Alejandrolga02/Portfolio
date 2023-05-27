import { FaReact, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiMicrosoftazure } from "react-icons/si";

import { Certification } from "./Certification";

export const CertificationList = () => {
	return (
		<div className="certificationsList-container">
			<Certification 
				icon={<SiJavascript />} 
				link="https://www.freecodecamp.org/certification/alejandrolga02/javascript-algorithms-and-data-structures" 
				issuer="freeCodeCamp" 
				name="JavaScript Algorithms and Data Structures" 
			/>
			<Certification 
				icon={<FaReact />} 
				link="https://www.hackerrank.com/certificates/0e24217a615b" 
				issuer="HackerRank" 
				name="React (Basic)" 
			/>
			<Certification 
				icon={<FaCss3 />} 
				link="https://www.hackerrank.com/certificates/07e0633b786c" 
				issuer="HackerRank" 
				name="CSS" 
			/>
			<Certification 
				icon={<SiJavascript />} 
				link="https://www.hackerrank.com/certificates/e7fc3b17a5d4" 
				issuer="HackerRank" 
				name="JavaScript (Basic)" 
			/>
			<Certification 
				icon={<SiMicrosoftazure />} 
				link="https://drive.google.com/file/d/1RZuAt5RC_AHs49fpUCx-ScRHF96rjVIN/view?usp=sharing" 
				issuer="Microsoft" 
				name="Azure AZ-900" 
			/>
		</div>
	);
};

import { Certification } from "./Certification";

export const CertificationList = () => {
	return (
		<div className="certificationsList-container">
			<Certification 
				icon="/fcc.svg"
				link="https://www.freecodecamp.org/certification/alejandrolga02/javascript-algorithms-and-data-structures" 
				issuer="freeCodeCamp" 
				name="JavaScript Algorithms and Data Structures" 
			/>
			<Certification 
				icon="/hackerrank.svg"
				link="https://www.hackerrank.com/certificates/0e24217a615b" 
				issuer="HackerRank" 
				name="React (Basic)" 
			/>
			<Certification 
				icon="/hackerrank.svg"
				link="https://www.hackerrank.com/certificates/07e0633b786c" 
				issuer="HackerRank" 
				name="CSS" 
			/>
			<Certification 
				icon="/hackerrank.svg"
				link="https://www.hackerrank.com/certificates/e7fc3b17a5d4" 
				issuer="HackerRank" 
				name="JavaScript (Basic)" 
			/>
			<Certification 
				icon="/bedu.png"
				link="https://drive.google.com/file/d/1qhjhmirYZ6_Ds3N7jCWZYd1loqaYIfPq/view" 
				issuer="Bedu" 
				name="Front end fundamentals" 
			/>
			<Certification 
				icon="/bedu.png"
				link="https://drive.google.com/file/d/1AmDgmICcZkv3_Sq6ucmjN5S6LSjt62Rs/view" 
				issuer="Bedu" 
				name="Desarrollo Web con JavaScript" 
			/>
			<Certification 
				icon="/microsoft.svg"
				link="https://drive.google.com/file/d/1RZuAt5RC_AHs49fpUCx-ScRHF96rjVIN/view?usp=sharing" 
				issuer="Microsoft" 
				name="Azure AZ-900" 
			/>
		</div>
	);
};

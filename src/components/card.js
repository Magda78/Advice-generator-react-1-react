import { useState } from 'react';
import axios from 'axios';

const Card = () => {
	const [ quote, setQuote ] = useState(
		"It is easy to sit up and take notice, what's difficult is getting up and taking action."
	);
	const [ quoteid, setQuoteId ] = useState(71);
	const clickHandler = () => {
		axios.get('/api').then((response) => {
			setQuote(response.data.slip.advice);
			setQuoteId(response.data.slip.id);
		});
	};
	return (
		<main className=" w-[343px] h-[315px] md:w-[540px] md:h-[332px] bg-card-bg flex flex-col justify-center items-center p-[40px] md:p-[48px] md:pb-[72px] pb-[64px] relative">
			<h1 className="absolute font-extrabold  text-card-title text-[11px] md:text-sm mb-[24px] top-[40px] md:top-[48px] font-Manrope md:tracking-[4.09px] tracking-[3.46px]">
				ADVICE #{quoteid}
			</h1>
			<p className="text-card-quote font-extrabold text-2xl md:text-[28px] text-center font-Manrope md:tracking-[-0.3px] tracking-[-0.26px]">
				"{quote}"
			</p>
			<section className="absolute flex flex-row items-center top-[235px] md:top-[244px]">
				<div className="w-[122px] md:w-[196px] h-[1px] bg-line mr-[16px]" />
				<img src="img/Shape1.svg" alt="shape1 w-[20px] h-[16px]" />
				<div className="w-[122px] md:w-[196px] h-[1px] bg-line ml-[16px]" />
			</section>
			<section
				className="absolute top-[283px] left-[139px] md:top-[300px] md:left-[238px] rounded-full w-[64px] h-[64px] bg-card-title flex justify-center items-center hover:shadow-button-hover cursor-pointer"
				onClick={clickHandler}
			>
				<img src="img/Shape.svg" alt="shape" />
			</section>
		</main>
	);
};

export default Card;

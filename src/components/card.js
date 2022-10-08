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
		<main className=" w-[343px]  md:w-[540px]  rounded-xl md:rounded-2xl bg-card-bg flex flex-col justify-center items-center pl-[24px] pr-[24px] md:pr-[48px] md:pl-[48px] pt-[40px] md:pt[48px]">
			<h1 className="font-extrabold  text-card-title text-[11px] md:text-sm mb-[24px] font-Manrope md:tracking-[4.09px] tracking-[3.46px]">
				ADVICE #{quoteid}
			</h1>
			<p className="text-card-quote font-extrabold text-2xl mb-[24px] md:mb-[40px] md:text-[28px] text-center font-Manrope md:tracking-[-0.3px] tracking-[-0.26px]">
				"{quote}"
			</p>
			<section className=" flex flex-row items-center mb-[39px]">
				<div className="w-[122px] md:w-[196px] h-[1px] bg-line mr-[16px]" />
				<img src="img/Shape1.svg" alt="shape1 w-[20px] h-[16px]" />
				<div className="w-[122px] md:w-[196px] h-[1px] bg-line ml-[16px]" />
			</section>
			<section
				className="mb-[-32px] rounded-full w-[64px] h-[64px] bg-card-title flex justify-center items-center hover:shadow-button-hover cursor-pointer"
				onClick={clickHandler}
			>
				<img src="img/Shape.svg" alt="shape" />
			</section>
		</main>
	);
};

export default Card;

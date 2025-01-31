import React from "react";
import Heading from "../components/Heading";

const ContactPage = () => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='container mx-auto text-center'>
				<Heading
					title='Welcome to Contact Page'
					className='uppercase'
				/>
			</div>
		</div>
	);
};

export default ContactPage;

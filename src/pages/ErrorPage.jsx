import React from "react";

const ErrorPage = () => {
	return (
		<div className='flex items-center justify-between h-screen'>
			<div className='container mx-auto'>
				<div className='text-center'>
					<h1 className='text-6xl font-bold text-red-600'>404</h1>
					<p className='mt-4'>Page Not Found</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;

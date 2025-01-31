import React from "react";
import Heading from "../components/Heading";

const BlogPage = () => {
	return (
		<div>
			<div className='container mx-auto'>
				<div className='flex items-center justify-center h-screen'>
					<Heading
						title='Welcome to Blog Page'
						className='uppercase text-center'
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;

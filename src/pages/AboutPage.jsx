import Heading from "../components/Heading";

const AboutPage = () => {
	return (
		<div className='flex items-center h-screen'>
			<div className='container mx-auto'>
				<div className='py-20 text-center'>
					<Heading title='About Us' className='mb-7 uppercase' />
					<p className='mt-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam nec lacus euismod, ultricies nunc nec, bibendum
						mi. Sed euismod, libero nec congue lacinia, libero odio
						tincidunt enim, nec ultricies ligula mi nec justo.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;

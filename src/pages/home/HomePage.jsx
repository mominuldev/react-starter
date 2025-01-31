import Button from "../../components/Button";
import Heading from "../../components/Heading";

const HomePage = () => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='container mx-auto'>
				<div className='text-center'>
					<Heading
						title='Welcome to the Home Page'
						className='mb-7 uppercase'
					/>
					<Button url='/Contact' title='View All Details' />
				</div>
			</div>
		</div>
	);
};

export default HomePage;

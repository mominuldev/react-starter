import { Link, NavLink } from "react-router";
import { menu } from "../../data/menu";

const Header = () => {
	console.log(menu);

	return (
		<header className='bg-gray-100 min-h-[8px]'>
			<div className='container mx-auto'>
				<div className='flex items-center justify-between'>
					<div className='py-4'>
						<Link to='/' className='text-3xl font-bold uppercase'>
							Genesis
						</Link>
					</div>
					<nav className='navbar'>
						<ul className='flex space-x-8'>
							{menu.map((item) => (
								<li key={item.id}>
									<NavLink
										to={item.url}
										className={({ isActive }) =>
											isActive
												? "text-green-500"
												: "text-gray-700 hover:text-green-500 transition ease-in-out duration-300"
										}
									>
										{item.title}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

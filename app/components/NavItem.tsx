import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface NavItemProps {
	label: string;
	href: string;
	onClick: () => void;
	active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, onClick, active }) => {
	return (
		<li className="flex-1">
			<Link
				href={href}
				className={clsx(
					'p-2 rounded-lg hover:bg-[#242325] hover:text-white transition ease-in-out duration-300 cursor-pointer flex justify-center',
					active && 'bg-[#361134] text-white'
				)}>
				<span className="flex justify-center">{label}</span>
			</Link>
		</li>
	);
};

export default NavItem;

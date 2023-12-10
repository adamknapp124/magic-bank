'use client';

import clsx from 'clsx';

import React, { useState } from 'react';
import NavItem from '../NavItem';
import useRoutes from '@/app/hooks/useRoutes';

interface NavbarProps {}

const Navbar = () => {
	const routes = useRoutes();

	return (
		<div className="bg-white text-[#242325] font-bold m-auto fixed top-0 left-0 right-0">
			<ul
				role="list"
				className="flex gap-2 justify-evenly m-auto w-full lg:w-1/2 p-2">
				{routes?.map((item: any) => (
					<NavItem
						key={item.label}
						href={item.href}
						label={item.label}
						active={item.active}
						onClick={item.onClick}
					/>
				))}
			</ul>
		</div>
	);
};

export default Navbar;

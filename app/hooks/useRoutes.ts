import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';

const useRoutes = () => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{
				label: 'Deck Builder',
				href: '/conversations',
				icon: HiChat,
				active: pathname === '/conversations',
			},
			{
				label: 'Sets',
				href: '/sets',
				icon: HiUsers,
				active: pathname === '/sets',
			},
			{
				label: 'Collection',
				href: '/users',
				icon: HiUsers,
				active: pathname === '/users',
			},
			{
				label: 'Profile',
				onClick: () => signOut(),
				href: '#',
				icon: HiArrowLeftOnRectangle,
			},
		],
		[pathname]
	);

	return routes;
};

export default useRoutes;

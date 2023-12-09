import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
	icon: IconType;
	onClick: () => void;
}

// immediately remap icon to 'Icon' to use it as a react component
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
	icon: Icon,
	onClick,
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-violet-500 shadow-sm ring-1 ring-inset ring-[#A799B7] hover:bg-gray-50 focus:outline-offset-0">
			<Icon />
			{''}
		</button>
	);
};

export default AuthSocialButton;

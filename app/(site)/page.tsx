import AuthForm from './components/AuthForm';

const page = () => {
	return (
		<div
			className="flex 
		min-h-full 
		flex-col 
		justify-center 
		py-12 
		sm:px-6 
		lg:px-8
		bg-gray-200
		">
			<AuthForm />
		</div>
	);
};

export default page;

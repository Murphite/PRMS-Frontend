export default function ApplicationLogo({ className, ...rest }) {
	return (
		<p className={`text-4xl font-semibold ${className}`} {...rest}>
			Logo
		</p>
	);
}

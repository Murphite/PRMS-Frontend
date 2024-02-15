export default function InputError({ message, className = "", ...props }) {
	return message ? (
		<p
			{...props}
			className={"text-sm italic mt-0 text-red-600 " + className}
		>
			{message}
		</p>
	) : null;
}

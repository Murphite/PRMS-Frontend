import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
	{ type = "text", className = "", error = "", isFocused = false, ...props },
	ref
) {
	const input = ref ? ref : useRef();

	const errorClass = error !== "" ? "border-red-500 " : "";

	useEffect(() => {
		if (isFocused) {
			input.current.focus();
		}
	}, []);

	return (
		<>
			<input
				{...props}
				type={type}
				className={"input " + errorClass + className}
				ref={input}
			/>

			<p className={"text-sm italic mt-0 text-red-600"}>{error}</p>
		</>
	);
});

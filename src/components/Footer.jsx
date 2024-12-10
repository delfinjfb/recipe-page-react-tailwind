// app/components/Footer.tsx

export default function Footer() {
	return (
		<footer className="text-center text-sm text-white py-4 bg-black">
			Challenge by
			<a
				href="https://www.frontendmentor.io/?ref=challenge"
				target="_blank"
				rel="noopener noreferrer"
				className="text-yellow-400 hover:underline ml-2"
			>
				Frontend Mentor
			</a>
			<span className="px-4">|</span>
			<a
				href="https://recipe-page-react-tailwind-improved.vercel.app/recipes/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-yellow-400 hover:underline"
			>
				See an improved version
				<span className="ml-1" aria-label="opens in a new tab">
					🔗
				</span>
			</a>
			<br />
			Coded by
			<a
				href="https://recipe-page-react-tailwind-git-improvements-delfins-projects.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-yellow-400 hover:underline ml-2"
			>
				Delfin Fernandez
			</a>
			.
		</footer>
	);
}

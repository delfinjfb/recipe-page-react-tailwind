// app/components/Footer.tsx

export default function Footer() {
  const codedByUrl = process.env.REACT_APP_LINK_CODED_DELFIN;
  const impprovedUrl = process.env.REACT_APP_LINK_RECIPE_IMPROVED;

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
        href={impprovedUrl}
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
        href={codedByUrl}
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

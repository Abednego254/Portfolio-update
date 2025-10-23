function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-700">
      <p className="mb-3">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Abednego Kaume</span>. All rights reserved.
      </p>

      <div className="flex justify-center space-x-6 text-sm">
        <a
          href="https://github.com/Abednego254"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kaume-abednego-937469362"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:abednegokaume@gmail.com"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;

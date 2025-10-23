function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center">
            <p className="mb-2">
                © {new Date().getFullYear()} Abednego. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:youremail@example.com"
                    className="hover:text-blue-400"
                >
                    Email
                </a>
            </div>
        </footer>
    );
}

export default Footer;

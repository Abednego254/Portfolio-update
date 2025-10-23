function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-40">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">Abednego</h1>
                <ul className="flex space-x-6">
                    <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                    <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

function Hero() {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center"
        >
            <h1 className="text-5xl font-bold">Hi, I’m Abednego 👋</h1>
            <p className="mt-4 text-lg text-gray-300">
                IT Student | Developer | Tech Enthusiast
            </p>
            <a
                href="#projects"
                className="mt-6 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
                View My Work
            </a>
        </section>
    );
}

export default Hero;

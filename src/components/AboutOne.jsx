function About() {
    return (
        <section
            id="about"
            className="py-20 bg-gray-100 text-gray-800"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left side: Image */}
                <div className="flex justify-center">
                    <img
                        src="/profile-pic.enc"   // put your profile photo in public/profile.jpg
                        alt="Abednego"
                        className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-blue-500"
                    />
                </div>

                {/* Right side: Text */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Hello 👋 I’m <span className="font-semibold">Abednego</span>,
                        an <span className="font-semibold">IT student at Laikipia University</span>,
                        passionate about software development, problem-solving, and building
                        solutions that make life easier.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        My developer journey started with <span className="font-semibold">Python</span>,
                        where I built projects ranging from beginner scripts to full web applications.
                        Over time, I’ve expanded my skills into <span className="font-semibold">Flask</span>,
                        <span className="font-semibold">MySQL</span>, <span className="font-semibold">React</span>,
                        <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">Springboot</span>.
                        I’ve worked on impactful projects such as a <span className="font-semibold">Lost Item Tracking System</span>,
                        a <span className="font-semibold">Local Community Engagement App</span>, and even
                        prototypes like a <span className="font-semibold">fully automated BMI device</span>. I have recently finished creating my first <span className="font-semibold">Mobile Application</span>,
                        using <span className="font-semibold">Flutter</span>.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        Beyond coding, I enjoy <span className="font-semibold">tech discussions</span>,
                        <span className="font-semibold">mentoring peers</span>, and learning continuously.
                        My goal is to become a versatile developer capable of creating both
                        <span className="font-semibold">web</span> and <span className="font-semibold">mobile applications</span>,
                        while also contributing to projects that empower communities.
                        I believe in technology’s power to solve real-world problems.
                    </p>

                    <a
                        href="https://abednego-cv.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition duration-300"
                    >
                        View My CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;

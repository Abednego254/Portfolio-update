import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate loading time (2 seconds)
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Footer />
            </div>
    );
}

export default App;

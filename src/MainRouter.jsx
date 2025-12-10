import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Projects from "./components/Projects"
import Form from "./components/Form"

const MainRouter = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/form" element={<Form />} />
                <Route path="/service" element={<Service />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Layout>
    )
}

export default MainRouter
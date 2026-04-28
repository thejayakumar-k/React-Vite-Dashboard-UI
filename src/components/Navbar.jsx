import {FaHome,FaInfoCircle,FaServicestack,FaEnvelope} from "react-icons/fa";

const navLink = [{
    name: "Home",
    icon: <FaHome />,
    href: "#"
}, {
    name: "About",
    icon: <FaInfoCircle />,
    href: "#about"
}, {
    name: "Services",
    icon: <FaServicestack />,
    href: "#services"
}, {
    name: "Contact",
    icon: <FaEnvelope />,
    href: "#contact"
}]

function Navbar(){
    return(
        <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">🚀 My Website</h1>
        <ul className="flex space-x-6">
            {/* <li><a className="flex items-center gap-1 hover:text-blue-400" href="#home"><FaHome />Home</a></li>
            <li><a className="flex items-center gap-1 hover:text-blue-400" href="#about"><FaInfoCircle />About</a></li>
            <li><a className="flex items-center gap-1 hover:text-blue-400" href="#services"><FaServicestack />Services</a></li>
            <li><a className="flex items-center gap-1 hover:text-blue-400" href="#contact"><FaEnvelope />Contact</a></li> */}

            {
                navLink.map((link, index) => {
                    return <li key={index}><a href={link.href} className="flex items-center gap-1 hover:text-blue-400">{link.icon}{link.name}</a></li>
                })
            }

        </ul>
        </div>
        </nav>
    )
}

export default Navbar;
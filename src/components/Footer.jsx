import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className="box-border flex  flex-col flex-wrap w-screen items-center justify-center py-2 bg-primary-black text-white">
            <span>© 2024 MÁXIMO NAHIM SULEIMAN</span>
            <h3 className="my-2">Redes:</h3>
            <div className="flex flex-wrap w-full justify-center">
                <ul className="list-none flex gap-4 overflow-hidden text-center">
                    <li className="flex flex-col items-center transition-all duration-300 hover:text-primary-greenWhite hover:cursor-pointer"><a href="https://www.instagram.com/20_maxi_05/">Instagram</a> <FaInstagram /></li>
                    <li className="flex flex-col items-center transition-all duration-300 hover:text-primary-greenWhite hover:cursor-pointer"><a href="https://github.com/SamuraiJS">GitHub</a> <FaGithub /></li>
                    <li className="flex flex-col items-center transition-all duration-300 hover:text-primary-greenWhite hover:cursor-pointer"><a href="https://www.linkedin.com/in/m%C3%A1ximo-suleiman-12a1b02a8/">LinkedIn</a> <FaLinkedin /></li>
                </ul>
            </div>
            
        </div>
    )
}
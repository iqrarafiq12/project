import SideBtn from "./SideBtn";

import { IoMdBusiness } from "react-icons/io";

import { AiOutlineMail } from "react-icons/ai";
import {
    FaBehance,
    FaYoutube,
    // FaGithub,
    FaInstagram,
    FaLinkedin,
    FaBuilding,
} from "react-icons/fa";

export default function SidebarSocial() {
    return (
        <div className="flex flex-col md:block">
            {/* Section 1 */}
            <div className="flex flex-col md:block mt-2 pt-3 border-t border-primary/30 cursor-pointer">
                <p className="mb-2 text-xs font-semibold uppercase text-pink-400">
                    Founder
                </p>
                <SideBtn
                    href="https://www.linkedin.com/company/thewinkievere/"
                    label="The Winkieverse"
                />

                <SideBtn
                    href="https://www.linkedin.com/company/edaqaicreatives/"
                    label="Edaqai Creatives"
                /></div>

            <div className="flex flex-col md:block mt-2 pt-3 border-t border-primary/30 cursor-pointer">
                <p className="mb-2 text-xs font-semibold uppercase text-pink-400">
                    Social
                </p>

                <SideBtn
                    href="mailto:workwithiqr@gmail.com"
                    label="Email"
                    icon={AiOutlineMail}
                />
                <SideBtn
                    href="https://www.linkedin.com/in/iqrarafiqkhann/"
                    label="LinkedIn"
                    icon={FaLinkedin}
                />
                <SideBtn
                    href="https://www.instagram.com/iqrarafiqkhann/"
                    label="Instagram"
                    icon={FaInstagram}
                />
                <SideBtn
                    href="https://www.behance.net/IqraRafiqKhan"
                    label="Behance"
                    icon={FaBehance}
                />
                <SideBtn
                    href="https://www.youtube.com/@IqraRafiqKhann"
                    label="YouTube"
                    icon={FaYoutube}
                />
            </div>
        </div>

    );
}

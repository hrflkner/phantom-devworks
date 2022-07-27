import { motion } from 'framer-motion';
import {
    IoMail,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoFacebook,
} from 'react-icons/io5';

function SocialLinksBar() {
    return (
        <ul>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                    className="social-icon"
                    href="https://www.linkedin.com/in/hunter-faulkner-a67b70144/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin Link"
                >
                    <IoLogoLinkedin alt="LinkedIn Logo" />
                </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                    className="social-icon"
                    href="https://twitter.com/hrflkner"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter Link"
                >
                    <IoLogoTwitter alt="Twitter Logo" />
                </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                    className="social-icon"
                    href="https://www.linkedin.com/in/hunter-faulkner-a67b70144/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="FaceBook Link"
                >
                    <IoLogoFacebook alt="Facebook Logo" />
                </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                    className="social-icon"
                    href="https://github.com/hrflkner"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github Link"
                >
                    <IoLogoGithub alt="Github Logo" />
                </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                    className="social-icon"
                    href="mailto:phantom.devworks@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Email Link"
                >
                    <IoMail alt="Mail Logo" />
                </a>
            </motion.li>
        </ul>
    );
}

export default SocialLinksBar;

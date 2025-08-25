import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Kyle Prestado</span>
      <ul>
        <li>
          <a href="https://github.com/kylerossece" target="_blank">
            <FaGithubAlt />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kyle-ross-prestado/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kylerossprestado@gmail.com/"
            target="_blank"
          >
            <IoIosMail />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

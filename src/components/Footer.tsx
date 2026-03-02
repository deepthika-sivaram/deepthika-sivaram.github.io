import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { TbBrandLinktree, TbBrandLeetcode } from "react-icons/tb";
import '../assets/styles/Footer.scss'

const LinktreeIcon = TbBrandLinktree as React.ElementType;
const LeetcodeIcon = TbBrandLeetcode as React.ElementType;

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/deepthikasivaram/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:deepthika.sivaram@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://linktr.ee/deepthika.sivaram" target="_blank" rel="noreferrer"><LinktreeIcon /></a>
        <a href="https://github.com/deepthika-sivaram" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://leetcode.com/u/Zi3GGgZExT/" target="_blank" rel="noreferrer"><LeetcodeIcon /></a>
      </div>
      <p>A portfolio designed & built by Deepthika Sivaram with 💜 using <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;
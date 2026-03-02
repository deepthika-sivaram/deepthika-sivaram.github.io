import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { TbBrandLinktree, TbBrandLeetcode, TbFileCv } from "react-icons/tb";
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profile.jpg';
import resumePDF from '../assets/files/resume.pdf';

const LinktreeIcon = TbBrandLinktree as React.ElementType;
const LeetcodeIcon = TbBrandLeetcode as React.ElementType;
const CvIcon = TbFileCv as React.ElementType;

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/deepthikasivaram/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:deepthika.sivaram@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://linktr.ee/deepthika.sivaram" target="_blank" rel="noreferrer"><LinktreeIcon /></a>
            <a href="https://github.com/deepthika-sivaram" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://leetcode.com/u/Zi3GGgZExT/" target="_blank" rel="noreferrer"><LeetcodeIcon /></a>
            <a href={resumePDF} download="Deepthika_Sivaram_Resume.pdf" target="_blank" rel="noreferrer"><CvIcon /></a>
          </div>
          <h1>Deepthika Sivaram</h1>
          <p>AI/ML Engineer · Backend Software Engineer · Previously at Citi</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/deepthikasivaram/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:deepthika.sivaram@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a> 
            <a href="https://linktr.ee/deepthika.sivaram" target="_blank" rel="noreferrer"><LinktreeIcon /></a>
            <a href="https://github.com/deepthika-sivaram" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://leetcode.com/u/Zi3GGgZExT/" target="_blank" rel="noreferrer"><LeetcodeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faStar } from '@fortawesome/free-solid-svg-icons';
import { FaUserGraduate } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import ubLogo from '../assets/images/ub-logo.jpg';
import citiLogo from '../assets/images/citi.gif';
import msLogo from '../assets/images/ms.jpg';
import auLogo from '../assets/images/au.jpg';

const UserGraduateIcon = FaUserGraduate as React.ElementType;

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
            icon={<UserGraduateIcon size={24} />}
          >
            <h3 className="vertical-timeline-element-title">Master's of Science in Computer Science</h3>
            <div className="edu-header">
              <img src={ubLogo} alt="SUNY Buffalo" className="edu-logo" />
              <h4 className="vertical-timeline-element-subtitle">
                State University of New York at Buffalo, United States
              </h4>
            </div>
            <div className="achievement">
              <FontAwesomeIcon icon={faStar} /> First Class Honors · GPA: 3.96/4
            </div>
            <ul className="tag-list">
              <li>GenAI / LLM</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Computer Vision</li>
              <li>Data Intensive Computing</li>
              <li>Data Mining</li>
              <li>Pattern Recognition</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2021 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer</h3>
            <div className="edu-header">
              <img src={citiLogo} alt="Citigroup" className="edu-logo" />
              <h4 className="vertical-timeline-element-subtitle">
                Citigroup, Chennai, India
              </h4>
            </div>
            <div className="achievement">
              <FontAwesomeIcon icon={faStar} /> Subject Matter Expert · Citi Gratitude Awards (Bronze &amp; Copper)
            </div>
            <ul className="tag-list">
              <li>Backend Engineering</li>
              <li>Microservices</li>
              <li>Distributed Systems</li>
              <li>Event-Driven Systems</li>
              <li>SQL Optimization</li>
              <li>API Validation</li>
              <li>Automation Frameworks</li>
              <li>LLM Adoption</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
            <div className="edu-header">
              <img src={msLogo} alt="Morgan Stanley" className="edu-logo" />
              <h4 className="vertical-timeline-element-subtitle">
                Morgan Stanley, Bangalore, India
              </h4>
            </div>
            <div className="achievement">
              <FontAwesomeIcon icon={faStar} /> 75% faster deployments
            </div>
            <ul className="tag-list">
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Jenkins</li>
              <li>Bitbucket Webhooks</li>
              <li>CI/CD</li>
              <li>Blue-Green Deployments</li>
              <li>OAuth APIs</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2017 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(255, 255, 255)' }}
            icon={<UserGraduateIcon size={24} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's of Engineering in Computer Science</h3>
            <div className="edu-header">
              <img src={auLogo} alt="Anna University" className="edu-logo" />
              <h4 className="vertical-timeline-element-subtitle">
                College of Engineering Guindy, Chennai, India
              </h4>
            </div>
            <div className="achievement">
              <FontAwesomeIcon icon={faStar} /> First Class Honors · GPA: 3.7/4
            </div>
            <ul className="tag-list">
              <li>Data Structures</li>
              <li>OOP</li>
              <li>Database Systems</li>
              <li>Cloud Computing</li>
              <li>System Design</li>
              <li>Distributed Systems</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { SiSpring, SiFastapi, SiTensorflow, SiOpenai, SiPytorch, SiReact, SiPython, SiScikitlearn, SiDocker, SiKubernetes, SiJenkins, SiGit } from "react-icons/si";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const SpringIcon = SiSpring as React.ElementType;
const FastapiIcon = SiFastapi as React.ElementType;
const TensorflowIcon = SiTensorflow as React.ElementType;
const OpenaiIcon = SiOpenai as React.ElementType;
const PytorchIcon = SiPytorch as React.ElementType;
const ReactIcon = SiReact as React.ElementType;
const PythonIcon = SiPython as React.ElementType;
const ScikitlearnIcon = SiScikitlearn as React.ElementType;
const DockerIcon = SiDocker as React.ElementType;
const KubernetesIcon = SiKubernetes as React.ElementType;
const JenkinsIcon = SiJenkins as React.ElementType;
const GitIcon = SiGit as React.ElementType;

const labelsFirst = [
    "Python", 
    "Java Spring Boot", 
    "C#",
    "Flask", 
    "Node.js",
    "FastAPI",
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "Postman",
    "Swagger"
];

const labelsThird = [
    "Git",
    "Docker",
    "Linux",
    "Selenium",
    "Jenkins",
    "Kubernetes",
    "Jira",
    "CI/CD",
    "Junit",
    "Maven",
    "Bitbucket",
    "RestAssured",
    "SoapUI",
    "Shell Scripting",
    "Pandas"
];

const labelsSecond = [
    "OpenAI",
    "Claude AI",
    "LangChain",
    "Hugging Face",
    "Streamlit",
    "OpenRouter",
    "Transformers (BERT, BART)",
    "Fine-Tuning",
    "Prompt Engineering","Pytorch","Tensorflow","Scikit-learn"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="icon-grid">
                        <SpringIcon size={35}/>
                        <ReactIcon size={35}/>
                        <FastapiIcon size={35}/>
                        <PythonIcon size={35}/>
                    </div>
                    <h3>Full Stack Web Development</h3>
                    <p>I design and build production-grade web applications from the ground up, owning the complete Software Development Life Cycle (SDLC) — from system design and API architecture to frontend experience and deployment. My focus is on scalable backend systems, clean API contracts, and responsive, maintainable frontend interfaces.</p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="icon-grid">
                        <DockerIcon size={35}/>
                        <KubernetesIcon size={35}/>
                        <JenkinsIcon size={35}/>
                        <GitIcon size={35}/>
                    </div>
                    <h3>DevOps & Automation</h3>
                    <p>Beyond application development, I implement CI/CD pipelines, automated testing strategies, and cloud-native deployment workflows to ensure reliable and repeatable releases. I specialize in containerization, environment consistency, and zero-downtime deployment strategies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="icon-grid">
                        <OpenaiIcon size={35}/>
                        <TensorflowIcon size={35}/>
                        <PytorchIcon size={35}/>
                        <ScikitlearnIcon size={35}/>
                    </div>
                    <h3>GenAI & LLM</h3>
                    <p>I build enterprise-grade AI solutions that integrate Large Language Models into real-world systems. My experience includes multi-agent orchestration, semantic search, LLM-powered automation, and production-ready API integrations for intelligent decision-making workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;
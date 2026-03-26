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
                        <OpenaiIcon size={35}/>
                        <TensorflowIcon size={35}/>
                        <PytorchIcon size={35}/>
                        <ScikitlearnIcon size={35}/>
                    </div>
                    <h3>AI/ML Engineering</h3>
                    <p>
                        I build AI systems that work beyond the notebook i.e., production pipelines with real latency constraints, 
                        real data, and real users. My work spans LLM orchestration, computer vision, and NLP, with a focus on making models 
                        actually useful in the products they're embedded in.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
                <div className="skill">
                    <div className="icon-grid">
                        <SpringIcon size={35}/>
                        <ReactIcon size={35}/>
                        <FastapiIcon size={35}/>
                        <PythonIcon size={35}/>
                    </div>
                    <h3>Backend Engineering</h3>
                    <p>
                        I've spent years building the kind of backend systems that can't afford to go down — high-transaction fintech platforms, 
                        orchestration services, shared frameworks adopted across teams. I care about systems that scale, APIs that are predictable,
                         and code that the next engineer can actually understand.
                    </p>

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
                    <p>
                        Shipping code is only half the job. I've built CI/CD pipelines, containerized microservices, 
                        and automated testing frameworks that compress release cycles and keep deployments boring - which is exactly how they should be.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
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
import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/event-matcher/tree/main/event-matcher" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/event-matcher/tree/main/event-matcher" target="_blank" rel="noreferrer"><h2>Event Connect ( Open source Contributor - AI Alliance (IBM/Meta) )</h2></a>
                <p>Event Connect matches conference attendees with sponsors using a 5-agent LangGraph pipeline, not keyword search, but Gemini embeddings with cosine similarity. Agents run in parallel on Vercel serverless with Firestore caching, cutting down latency.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/ai-code-review-bot" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/ai-code-review-bot" target="_blank" rel="noreferrer"><h2>AI-Powered GitHub Code Review Bot</h2></a>
                <p>Built a FastAPI + GitHub webhook bot that uses LangChain with GPT-4o-mini to automatically review PR diffs and post structured, Markdown-formatted feedback as GitHub comments.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/AI-Sketch-to-UI-Converter" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/AI-Sketch-to-UI-Converter" target="_blank" rel="noreferrer"><h2>AI Sketch-to-UI Converter</h2></a>
                <p>Developed a deep learning pipeline combining YOLOv8, CNNs, Transformers, and GRUs to convert hand-drawn UI sketches into functional HTML code.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/PatternRec_Project_Group6" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/PatternRec_Project_Group6" target="_blank" rel="noreferrer"><h2>Produce Classification & Recipe Recommendation App</h2></a>
                <p>Created a dual ML web app combining computer vision for fruit classification and BERT-based NLP for semantic recipe recommendations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/Temporal-Trends-in-Hospital-Admissions" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/Temporal-Trends-in-Hospital-Admissions" target="_blank" rel="noreferrer"><h2>Temporal Trends in Hospital Admissions</h2></a>
                <p>Built a predictive model analyzing pollution data and hospital admissions to forecast respiratory-related hospitalizations and support healthcare planning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/legal-news-summarization" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/legal-news-summarization" target="_blank" rel="noreferrer"><h2>Summarization of Legal and News Documents</h2></a>
                <p>Fine-tuned transformer models (BART/T5) to generate abstractive summaries for legal and news texts with ROUGE, BLEU, and BERTScore evaluation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/UrbanTwinAI-Generative-City-Simulation" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/UrbanTwinAI-Generative-City-Simulation" target="_blank" rel="noreferrer"><h2>UrbanTwinAI – Generative City Simulation</h2></a>
                <p>Developed an interactive AI-driven digital twin that simulates traffic, heat, and air quality impacts of urban design changes in real time.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/Building-an-Audio-Classification-Model-with-STFT-and-TensorFlow" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/Building-an-Audio-Classification-Model-with-STFT-and-TensorFlow" target="_blank" rel="noreferrer"><h2>Audio Classification with STFT and TensorFlow</h2></a>
                <p>Engineered a CNN-based audio classifier using STFT-generated spectrograms to achieve high-accuracy environmental sound recognition.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/lstm-sentiment-analysis" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/lstm-sentiment-analysis" target="_blank" rel="noreferrer"><h2>Sentiment Analysis using LSTM</h2></a>
                <p>Implemented a PyTorch-based LSTM model to classify text reviews into sentiment categories with full preprocessing and performance evaluation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/deepthika-sivaram/Hourly-Trip-Demand-Forecasting-LSTM" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/deepthika-sivaram/Hourly-Trip-Demand-Forecasting-LSTM" target="_blank" rel="noreferrer"><h2>Hourly Trip Demand Forecasting using LSTM</h2></a>
                <p>Built an LSTM time-series forecasting model to predict hourly trip demand using historical data and error metrics like MAE and RMSE.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
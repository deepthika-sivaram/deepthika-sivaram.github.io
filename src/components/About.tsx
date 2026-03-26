import React, { useState, useEffect } from "react";
import '@fortawesome/free-regular-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';
import profilePic from '../assets/images/about.jpeg';
import resumePDF from '../assets/files/resume.pdf';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import photo1 from '../assets/images/about1.png';
import photo2 from '../assets/images/about2.png';

const labels = [
    "3+ Years Industry Experience",
    "MS CS (AI/ML) University at Buffalo",
    "Ex-Citi Backend Platforms",
    "Focus AI/ML + Systems"
];

function About() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const photos = [profilePic, photo1, photo2];
    const [currentPhoto, setCurrentPhoto] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((prev) => (prev + 1) % photos.length);
        }, 4000); // change every 4 seconds

        return () => clearInterval(interval);
        }, [photos.length]);
    const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photos.length);
    return (
    <div className="container" id="about">
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-grid">
                <div className="skill">
                    <h3>From backend systems to AI — because that's where things are heading.</h3>
                    <p>
                        I spent three years at <strong>Citigroup</strong> building backend systems that process thousands of transactions a day and have to work, no excuses. 
                        I enjoyed that work. But I kept noticing how much the industry was shifting, and I didn't want to just watch it happen from the sidelines.
                    </p>
                    <p>
                        So I made the move into AI/ML. Not because it was trendy, but because I genuinely believe it's changing how software gets built and I wanted to be someone who builds it,
                        not just someone who talks about it. I finished my <strong>MS in CS specializing in AI/ML at University at Buffalo (GPA 3.96)</strong>, 
                        and now I work on things like LLM pipelines, computer vision systems, and NLP tooling that actually solve real problems in real workflows.
                    </p>
                    <p>
                        The backend background helps more than I expected. Production AI looks very different from a research notebook, 
                        and knowing how to build things that scale and don't fall over is half the job.
                    </p>
                    <p>
                        Outside of engineering, I love painting, singing, and spending time with friends—usually discovering new places or unwinding after a long build-and-ship cycle.
                        I try to keep life balanced with creativity, curiosity, and experiences worth remembering that have nothing to do with a terminal window.
                    </p>
                    <button onClick={handleOpen} className="resume-btn">
                        View Resume
                    </button>
                </div>

                <div className="skill">
                    <div className="about-image-container">
                        <div className="photo-carousel">
                            <button type="button" className="carousel-btn prev" onClick={prevPhoto} aria-label="Previous photo">
                                &#8249;
                            </button>
                            <img
                                src={photos[currentPhoto]}
                                className="about-photo"
                                alt={`About me ${currentPhoto + 1}`}
                            />
                            <button type="button" className="carousel-btn next" onClick={nextPhoto} aria-label="Next photo">
                                &#8250;
                            </button>
                            <div className="carousel-dots">
                                {photos.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`dot ${i === currentPhoto ? 'active' : ''}`}
                                        onClick={() => setCurrentPhoto(i)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex-chips">
                            {labels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle>
                Resume
                <IconButton
                    onClick={handleClose}
                    sx={{ position: "absolute", right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers sx={{ p: 0 }}>
                <iframe
                    src={resumePDF}
                    title="Resume PDF"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button
                    variant="contained"
                    href={resumePDF}
                    download="Deepthika_Sivaram_Resume.pdf"
                >
                    Download
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export default About;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Resume.css';

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo('.resume-header h1', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
      
      gsap.fromTo('.resume-intro-card', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'back.out(1.2)' }
      );

      // Staggered timeline items
      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.fromTo(item,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      });

      // Staggered education cards
      gsap.fromTo('.edu-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.education-grid',
            start: 'top 80%',
          }
        }
      );

      // Staggered skill tags
      gsap.fromTo('.skill-tag',
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 90%',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="resume-page" ref={containerRef}>
      
      <div className="resume-header">
        <h1>Whitman <span>Theofrastous</span></h1>
        <div className="resume-subtitle">Pro Compositor & 2D Animator</div>
      </div>

      <div className="resume-intro-card">
        <p>
          Hi! I'm a professional 2D artist and Compositor! I specialize in 2D art for games as well as compositing 2D animation within After Effects and in Blender! I'm currently based in Vancouver, and a graduate from the Honours Bachelor of Character Animation at Sheridan College in Ontario Canada.
        </p>
        <a href="mailto:wtheofrastous@gmail.com" className="resume-contact">wtheofrastous@gmail.com</a>
      </div>

      <div style={{ marginTop: '8rem' }}>
        <h3 className="resume-section-title">EXPERIENCE</h3>
        
        <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-header">
              <h4>Lead Compositor & 2D FX Supervisor</h4>
              <span className="timeline-date">7 / 2025 - 11 / 2025</span>
            </div>
            <div className="timeline-company">Screenbits</div>
            <div className="timeline-desc">
              I was the lead compositor on an anime project done by Screenbits, where I composited every shot. I also was the 2D FX supervisor overseeing the FX team and animating the more complex FX scenes myself.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <h4>Generalist and 2D/3D Compositor</h4>
              <span className="timeline-date">10 / 2022 - 10 / 2025</span>
            </div>
            <div className="timeline-company">Antler Interactive</div>
            <div className="timeline-desc">
              I operated many tasks at Antler Interactive, including but not limited to: Concept artist, level designer, modeler, and general creative work. I also work as a 2D/3D compositor that focuses on integrating 2D animation in a 3D environment (with use of image projection and 3D assets) for upcoming short films made by the studio.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <h4>2D Compositor</h4>
              <span className="timeline-date">9 / 2023 - 6 / 2024</span>
            </div>
            <div className="timeline-company">Titmouse Animation</div>
            <div className="timeline-desc">
              I worked as a 2D animation compositor on Tales of the Teenage Mutant Ninja Turtles TV show. I primarily used Toonboom Harmony and After Effects for this project, working on all 12 episodes.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <h4>Animation Supervisor/Animator & Rigger</h4>
              <span className="timeline-date">5 / 2020 - 8 / 2020</span>
            </div>
            <div className="timeline-company">Synapz Productions</div>
            <div className="timeline-desc">
              I was hired for a summer position as an animator and was promoted to a supervisor. I lead a team of 8 people in the animation and Layout department, in making a short film for the studio. I also worked as a character rig artist and animator for the project.
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '8rem' }}>
        <h3 className="resume-section-title">EDUCATION</h3>
        
        <div className="education-grid">
          <div className="edu-card">
            <h4>Honours Bachelor of Character Animation</h4>
            <div className="edu-date">9 / 2018 - 4 / 2022</div>
            <div className="edu-school">Sheridan College, Oakville, Ontario</div>
          </div>

          <div className="edu-card">
            <h4>Advanced Diploma: Visual Creative Arts</h4>
            <div className="edu-date">9 / 2017 - 5 / 2018</div>
            <div className="edu-school">Sheridan College, Oakville, Ontario</div>
          </div>

          <div className="edu-card">
            <h4>Certificate: Art Fundamentals</h4>
            <div className="edu-date">9 / 2016 - 5 / 2017</div>
            <div className="edu-school">Sheridan College, Oakville, Ontario</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '8rem', marginBottom: '4rem' }}>
        <h3 className="resume-section-title">SKILLSET</h3>
        <div className="skills-container">
          {['After Effects', 'Blender', 'Harmony', 'Photoshop', 'Storyboard Pro', 'Animate/Flash', 'Unity', 'Adobe Suite', 'Procreate'].map(skill => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

export default function BirthdayWebsite() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [autoPlayVideoId, setAutoPlayVideoId] = useState(0);
  const videoFrameRef = useRef(null);

  // ===== CUSTOMIZE THIS SECTION WITH YOUR CONTENT =====
  const friendName = "Lakshitha"; // Change to her name
  const birthDate = "April 14"; // Change to her birthday
  
  const heroBackgrounds = [
    "https://i.ibb.co/HpKH4jyr/black-and-white-stripes-4k-hd-abstract-2560x1440.jpg?w=1200&h=1200&fit=crop", // April 14 question
    "https://i.ibb.co/xkK9fPP/0b839213-a1c4-49ed-911e-5f1b6c4ba6cb.png?w=1200&h=1200&fit=crop", // Vishu
    "https://i.ibb.co/sv4t5z5q/13550bd9-fdf5-44ac-b3fa-2a418c5432f3.png?w=1200&h=1200&fit=crop", // Ambedkar Jayanti
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=1200&fit=crop", // Stock trader birthday
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=1200&fit=crop", // Sorry
    "https://i.ibb.co/bjKZFKYV/IMG-4410.avif"  // Main birthday
  ];

  const birthdayMessages = [
    { lang: "Hindi", text: "जन्मदिन मुबारक" },
    { lang: "Tamil", text: "பிறந்தநாள் வாழ்த்துக்கள்" },
    { lang: "Telugu", text: "పుట్టినరోజు శుభాకాంక్షలు" },
    { lang: "Kannada", text: "ಜನ್ಮದಿನದ ಶುಭಾಶಯಗಳು" },
    { lang: "Malayalam", text: "ജന്മദിന ആശംസകൾ" },
    { lang: "Bengali", text: "জন্মদিনের শুভেচ্ছা" },
    { lang: "Gujarati", text: "જન્મદિવસ બધાઈ" },
    { lang: "Marathi", text: "वाढदिवसाच्या हार्दिक शुभेच्छा" },
    { lang: "Spanish", text: "¡Feliz Cumpleaños!" },
    { lang: "French", text: "Joyeux Anniversaire!" },
    { lang: "German", text: "Alles Gute zum Geburtstag!" },
    { lang: "Japanese", text: "お誕生日おめでとう" },
    { lang: "Chinese", text: "生日快乐" },
    { lang: "Korean", text: "생일 축하합니다" },
    { lang: "Arabic", text: "عيد ميلاد سعيد" },
  ];

  const images = [
    "https://i.ibb.co/8LBHfmTb/IMG-7889.avif",
    "https://i.ibb.co/fdRbxqHK/IMG-4310.jpg",
    "https://i.ibb.co/sZbSF6F/IMG-4307.jpg",
    "https://i.ibb.co/zK8kTM0/IMG-3803.avif",
    "https://i.ibb.co/23RrwS0m/IMG-E4303.avif",
    "https://i.ibb.co/sJXzzSzf/IMG-4415.avif",
    "https://i.ibb.co/Cr85NqD/IMG-4447.jpg",
    "https://i.ibb.co/qMDDGm5T/IMG-4245.avif"
  ];

  const quotes = [
    {
      text: "It is expensive to maintain friendships",
      author: "Lakshitha M , 2025"
    },
    {
      text: "I want to find a new job ASAP, why? Because I want to settle and start a family",
      author: "Lakshitha M , 2026"
    },
    {
      text: "Yewww, sickening",
      author: "Lakshitha M , Always"
    },
  ];

  const videos = [
    {
      id: "KplR2FaQTE0",
      title: "Moment One"
    },
    {
      id: "gsufIgIIUss",
      title: "Moment Two"
    },
  ];
  // ===== END CUSTOMIZATION SECTION =====

  // Intersection Observer for video auto-play when scrolled into view
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAutoPlayVideoId(0); // Auto-play when in view
        } else {
          setAutoPlayVideoId(null); // Stop auto-play when scrolled away
        }
      });
    }, observerOptions);

    if (videoFrameRef.current) {
      observer.observe(videoFrameRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll reveal for hero sections - bidirectional
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -10px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.hero-section').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll reveal for quotes and videos
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.quote-card, .video-card').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-playing gallery - changes every 2 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* MULTIPLE HERO SECTIONS - SCROLL TO REVEAL */}
      <section className="hero hero-section" style={{ '--hero-bg': `url('${heroBackgrounds[0]}')` }}>
        <div className="hero-content">
          <p className="hero-big-question">Hey, today is</p>
          <h2 className="hero-highlight">{birthDate}</h2>
          <p className="hero-big-question">What is it?</p>
        </div>
      </section>

      <section className="hero hero-section" style={{ '--hero-bg': `url('${heroBackgrounds[1]}')` }}>
        <div className="hero-content">
          <p className="hero-big-question">Oh yeah, it's a festival!</p>
          <h2 className="hero-highlight">Vishu 🪴</h2>
          <p className="hero-subtext">New Year for Keralites</p>
        </div>
      </section>

      <section className="hero hero-section" style={{ '--hero-bg': `url('${heroBackgrounds[2]}')` }}>
        <div className="hero-content">
          <p className="hero-big-question">It's also...</p>
          <h2 className="hero-highlight">Ambedkar Jayanti 📚</h2>
          <p className="hero-subtext">Celebrating equality & justice</p>
        </div>
      </section>

      <section className="hero hero-section" style={{ '--hero-bg': `url('${heroBackgrounds[3]}')` }}>
        <div className="hero-content">
          <p className="hero-big-question">And Stock Market is closed today because its </p>
          <h2 className="hero-highlight">a Top Stock Market Trader's</h2>
          <p className="hero-subtext">Birthday! 📈</p>
        </div>
      </section>

      <section className="hero hero-section" style={{ '--hero-bg': `url('${heroBackgrounds[4]}')` }}>
        <div className="hero-content">
          <p className="hero-joke">Sorry! 😄</p>
          <p className="hero-joke">Just kidding :P</p>
          <p className="hero-subtext-small">Scroll down to continue...</p>
        </div>
      </section>

      <section className="hero hero-section multilingual-hero" style={{ '--hero-bg': `url('${heroBackgrounds[5]}')` }}>
        <div className="hero-content">
          <h1 className="hero-name-main">{friendName}</h1>
          <p className="main-birthday-text">Happy Birthday</p>
          
          {/* Multilingual birthday messages - 15 languages with hover effects */}
          <div className="multilingual-container">
            {birthdayMessages.map((msg, idx) => (
              <div key={idx} className="birthday-message" style={{ animationDelay: `${idx * 0.1}s` }}>
                <p className="message-text">{msg.text}</p>
                <p className="message-lang">{msg.lang}</p>
              </div>
            ))}
          </div>

          <div className="scroll-hint">
            <div className="scroll-dot"></div>
            <p className="scroll-text">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Moments</h2>
        </div>
        <div className="gallery">
          <div 
            className="gallery-main"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Moment ${idx + 1}`}
                className={`gallery-image ${idx === activeImageIndex ? 'active' : ''}`}
              />
            ))}
            <div className="image-counter">{activeImageIndex + 1} / {images.length}</div>
            
            <div className="gallery-controls">
              <button className="nav-button" onClick={prevImage} aria-label="Previous">
                ‹
              </button>
              <button className="nav-button" onClick={nextImage} aria-label="Next">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Words</h2>
          
          <div className="quotes-container">
            {quotes.map((quote, idx) => (
              <div key={idx} className="quote-card" style={{ transitionDelay: `${idx * 0.2}s` }}>
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS - SIMPLIFIED AUTO-PLAY */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Videos</h2>
        </div>
        
        <div className="video-scroll-container">
          <div className="video-sticky-wrapper">
            <div 
              className="video-frame"
              ref={videoFrameRef}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[0].id}?controls=1${autoPlayVideoId === 0 ? '&autoplay=1' : ''}`}
                title={videos[0].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="videos-grid">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="video-card"
              onClick={() => setPlayingVideo(idx)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="video-thumbnail"
              />
              <div className="video-overlay">
                <div className="play-button">
                  <Play className="play-icon" fill="currentColor" />
                </div>
              </div>
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>

        {playingVideo !== null && (
          <div className="modal-overlay" onClick={() => setPlayingVideo(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button
                className="close-button"
                onClick={() => setPlayingVideo(null)}
              >
                ✕
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[playingVideo].id}?autoplay=1`}
                title={videos[playingVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '24px' }}
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2 className="footer-title">Here's to you</h2>
        <p className="footer-text">
          Thank you for being the amazing person you are. This year is going to be your best one yet.
        </p>
        <p className="footer-meta">Made by soon to be Microsoft Employee  • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero1 from "@/assets/iStock-490586878.jpg";
import hero2 from "@/assets/file-36399-f6527d33a10b7a101af1249e98e05787.jpg";
import hero3 from "@/assets/kaaba-a2wif1x8on9qihxv.jpg";
import hero4 from "@/assets/solo-umrah-for-muslim-women-can-they-go-alone-_.webp";
import hero5 from "@/assets/umrah-badal-step-2.webp";

const slides = [
  {
    image: hero1,
    title: "Tropical Paradise Awaits",
    subtitle: "Discover pristine beaches and crystal-clear waters",
    description: "Escape to luxury resorts nestled in tropical paradises where every sunset paints the perfect ending to your perfect day.",
  },
  {
    image: hero2,
    title: "Majestic Mountain Adventures",
    subtitle: "Conquer peaks and find serenity in alpine lakes",
    description: "Experience the grandeur of towering mountains and serene alpine landscapes where adventure meets tranquility.",
  },
  {
    image: hero3,
    title: "Ancient Wonders & Mystical Journeys",
    subtitle: "Explore hidden temples and lost civilizations",
    description: "Uncover the secrets of ancient civilizations in mystical settings where history comes alive in every stone.",
  },
  {
    image: hero4,
    title: "Ancient Wonders & Mystical Journeys",
    subtitle: "Explore hidden temples and lost civilizations",
    description: "Uncover the secrets of ancient civilizations in mystical settings where history comes alive in every stone.",
  },
  {
    image: hero5,
    title: "Ancient Wonders & Mystical Journeys",
    subtitle: "Explore hidden temples and lost civilizations",
    description: "Uncover the secrets of ancient civilizations in mystical settings where history comes alive in every stone.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-gold-bright animate-fade-in">
                  {slide.subtitle}
                </p>
                <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  <Button 
                    size="lg" 
                    className="gradient-gold text-forest hover:opacity-90 transition-opacity px-8 py-3 shadow-lg"
                    asChild
                  >
                    <Link to="/destinations">
                      <Play className="w-5 h-5 mr-2" />
                      Explore Destinations
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-forest px-8 py-3 backdrop-blur-sm bg-white/10"
                    asChild
                  >
                    <Link to="/booking">Book Your Journey</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gold/20 backdrop-blur-sm text-white hover:bg-gold/30 transition-colors z-10 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gold/20 backdrop-blur-sm text-white hover:bg-gold/30 transition-colors z-10 shadow-lg"
        >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors ${
              index === currentSlide ? "bg-gold-bright shadow-lg" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
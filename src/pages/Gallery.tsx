import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    title: "African Safari Adventure",
    location: "Serengeti, Tanzania",
    category: "Wildlife"
  },
  {
    id: 2,
    src: gallery2,
    title: "Mediterranean Coastal Beauty",
    location: "Santorini, Greece", 
    category: "Coastal"
  },
  {
    id: 3,
    src: gallery3,
    title: "Northern Lights Magic",
    location: "Lapland, Finland",
    category: "Natural Phenomena"
  },
  {
    id: 4,
    src: hero1,
    title: "Tropical Paradise",
    location: "Maldives",
    category: "Beach"
  },
  {
    id: 5,
    src: hero2,
    title: "Alpine Serenity",
    location: "Swiss Alps",
    category: "Mountains"
  },
  {
    id: 6,
    src: hero3,
    title: "Ancient Temple Mysteries",
    location: "Angkor Wat, Cambodia",
    category: "Cultural"
  }
];

const categories = ["All", "Beach", "Mountains", "Wildlife", "Coastal", "Cultural", "Natural Phenomena"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-forest mb-6">
            Travel Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the breathtaking beauty of destinations around the world. 
            Each image tells a story of adventure, luxury, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "gradient-hero text-white" 
                  : "border-emerald text-emerald hover:bg-emerald hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group cursor-pointer hover-lift travel-card overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                    <Badge className="absolute top-4 left-4 gradient-gold text-forest">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-forest mb-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {image.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/90 mb-2">{selectedImage.location}</p>
              <Badge className="gradient-gold text-forest">
                {selectedImage.category}
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-pearl">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-forest mb-6">
            Create Your Own Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            These incredible destinations are waiting for you. Let us help you plan 
            your perfect journey to capture your own unforgettable moments.
          </p>
          <Button size="lg" className="gradient-hero text-white hover:opacity-90 px-8">
            Plan Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
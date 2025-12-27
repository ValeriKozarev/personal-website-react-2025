import { useState } from "react";
import LazyImage from "../components/LazyImage";

const allPhotos = [
  { src: "/photos/photo1.jpeg", alt: "Buddha statues in a row in manicured outdoor garden." },
  { src: "/photos/photo2.jpeg", alt: "Green canopy over an outdoor cafe with sunlight passing through." },
  { src: "/photos/photo3.jpeg", alt: "Panoramic view of Southern California coastline." },
  { src: "/photos/photo4.jpeg", alt: "Close-up of Moto Guzzi motorcycle in the sun." },
  { src: "/photos/photo5.jpeg", alt: "Panoramic view of black sand beach in Iceland." },
  { src: "/photos/photo6.jpeg", alt: "Quiet morning in a harbor in a small Alaskan town." },
  { src: "/photos/photo7.jpeg", alt: "Tree being hit by rays of golden hour light with clouds behind it." },
  { src: "/photos/photo8.jpeg", alt: "Free-standing natural stone arch in the water with a tree growing out the top." },
  { src: "/photos/photo9.jpeg", alt: "Pedestrian bridge with Multnomah Falls behind it." },
  { src: "/photos/photo10.jpeg", alt: "Icelandic landscape with steam from natural geothermic geisers." },
  { src: "/photos/photo11.jpeg", alt: "Dog on a sailboat while owner prepares to embark." },
  { src: "/photos/photo12.jpeg", alt: "Japanese Buddhist temple in the sun." },
  { src: "/photos/photo13.jpeg", alt: "Pedestrian bridge over serene pond in royal Japanese gardens." },
  { src: "/photos/photo14.jpeg", alt: "Selfie against wide-angle traffic mirror in a quiet neighborhood." },
  { src: "/photos/photo15.jpeg", alt: "Profile photo of myself sitting on my motorcycle." },
  { src: "/photos/photo16.jpeg", alt: "Red Rocks amphitheatre in the morning with folks walking around." },
  { src: "/photos/photo17.jpeg", alt: "Alaskan landscape with coastline and sun emerging from behind the clouds." },
  { src: "/photos/photo18.jpeg", alt: "Small boy chasing seagulls on a Wisconsin beach." },
  { src: "/photos/photo19.jpeg", alt: "Church in Iceland standing alone on a hill surrounded by Alaskan Lupine flowers." },
  { src: "/photos/photo20.jpeg", alt: "Crane standing in a river." },
  { src: "/photos/photo21.jpeg", alt: "Japanese temple lit by the early morning sun." },
  { src: "/photos/photo22.jpeg", alt: "Sun-dappled grove of trees in a public park in Japan." },
  { src: "/photos/photo23.jpeg", alt: "Two people facing serene bay in Alaska during golden hour." },
  { src: "/photos/photo24.jpeg", alt: "Free-standing natural stone pillars in Alaskan bay." },
  { src: "/photos/photo25.jpeg", alt: "Hot air balloons inflating above a crowd of onlookers." },
  { src: "/photos/photo26.jpeg", alt: "DJ equipment" },
  { src: "/photos/photo27.jpeg", alt: "Sunset on the beach in Southern California." },
  { src: "/photos/photo28.jpeg", alt: "Backpack hanging from a wooden fence in a national park." },
];

export default function About() {
  const title = "About Me";

  // Randomly select 6 unique photos on each page load
  const [selectedPhotos] = useState(() => {
    const shuffled = [...allPhotos].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  });

  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">
            {title.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block animate-rainbow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-[repeat(3,400px)] gap-4">
              <div className="md:col-span-3 aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden">
                <LazyImage
                  src={selectedPhotos[0].src}
                  alt={selectedPhotos[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden">
                <LazyImage
                  src={selectedPhotos[1].src}
                  alt={selectedPhotos[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-2 aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden">
                <LazyImage
                  src={selectedPhotos[2].src}
                  alt={selectedPhotos[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden">
                <LazyImage
                  src={selectedPhotos[3].src}
                  alt={selectedPhotos[3].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-3 aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden">
                <LazyImage
                  src={selectedPhotos[4].src}
                  alt={selectedPhotos[4].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden">
                <LazyImage
                  src={selectedPhotos[5].src}
                  alt={selectedPhotos[5].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 pb-1 border-b-2 border-primary-500 inline-block">Film Photography</h2>
              <p className="text-slate-700 leading-relaxed">
                A few of my really close friends got me into film photography a few years ago, and I completely fell in love. I love the deliberate, analog feeling of shooting film and the anticipation of waiting for a roll to get developed and scanned. I've been enjoying taking a camera with me when I travel to permanently capture moments from the trip to look back on. At the end of the day I'm just a sentimental person though, and taking photos of people and places that make me happy just means a lot to me!
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 pb-1 border-b-2 border-primary-500 inline-block">DJ-ing & Music</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                There's a certain feeling you get while you're up playing music: you hit a transition you've been practicing, the people in the room don't see it coming, and they scream in excitement and delight when it registers. I absolutely love that feeling! I think that DJ-ing is such a fun way to share music with friends and to give a party a specific feeling or energy. It's also a great outlet for all the music that I listen to and gives me somewhere to channel my creative energy!
              </p>
              <a
                href="https://youtube.com/@justval_official?si=JtOBpdXk8h9wN67W"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Check out some of my mixes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 pb-1 border-b-2 border-primary-500 inline-block">Other Interests</h2>
              <p className="text-slate-700 leading-relaxed">
                Apparently having too many hobbies means you're a multipotentialite! Sounds a lot better when you put it that way. I'm an introverted geek at heart, a gearhead, a coffee enthusiast, I love to travel, I love to cook for the people in my life, I play video games, I lift weights, I read, and I like to do anything active outdoors. Learning new things is so incredibly exciting and stimulating to me and there's just so much out there for you to explore!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

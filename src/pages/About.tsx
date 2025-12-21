import { useState } from "react";

// Array of all available photos (add your actual photo paths here)
const allPhotos = [
  "/photos/photo1.jpeg",
  "/photos/photo2.jpeg",
  "/photos/photo3.jpeg",
  "/photos/photo4.jpeg",
  "/photos/photo5.jpeg",
  "/photos/photo6.jpeg",
  "/photos/photo7.jpeg",
  "/photos/photo8.jpeg",
  "/photos/photo9.jpeg",
  "/photos/photo10.jpeg",
  "/photos/photo11.jpeg",
  "/photos/photo12.jpeg",
  "/photos/photo13.jpeg",
  "/photos/photo14.jpeg",
  "/photos/photo15.jpeg",
  "/photos/photo16.jpeg",
  "/photos/photo17.jpeg",
  "/photos/photo18.jpeg",
  "/photos/photo19.jpeg",
  "/photos/photo20.jpeg",
  "/photos/photo21.jpeg",
  "/photos/photo22.jpeg",
  "/photos/photo23.jpeg",
  "/photos/photo24.jpeg",
  "/photos/photo25.jpeg",
  "/photos/photo26.jpeg",
  "/photos/photo27.jpeg",
  "/photos/photo28.jpeg",
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
              <div className="md:col-span-3 aspect-[4/3] md:aspect-auto bg-slate-200 rounded-lg overflow-hidden">
                <img
                  src={selectedPhotos[0]}
                  alt="Photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-slate-200 rounded-lg overflow-hidden">
                <img
                  src={selectedPhotos[1]}
                  alt="Photography"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-slate-200 rounded-lg overflow-hidden">
                <img
                  src={selectedPhotos[2]}
                  alt="Photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 aspect-[4/3] md:aspect-auto bg-slate-200 rounded-lg overflow-hidden">
                <img
                  src={selectedPhotos[3]}
                  alt="Photography"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-3 aspect-[4/3] md:aspect-auto bg-slate-200 rounded-lg overflow-hidden">
                <img
                  src={selectedPhotos[4]}
                  alt="Photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-slate-200 rounded-lg overflow-hidden">
                <img
                  src={selectedPhotos[5]}
                  alt="Photography"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 pb-1 border-b-2 border-sky-600 inline-block">Film Photography</h2>
              <p className="text-slate-700 leading-relaxed">
                A few of my really close friends got me into film photography a few years ago, and I completely fell in love. I love the deliberate, analog feeling of shooting film and the anticipation of waiting for a roll to get developed and scanned. I've been enjoying taking a camera with me when I travel to permanently capture moments from the trip to look back on. At the end of the day I'm just a sentimental person though, and taking photos of people and places that make me happy just means a lot to me!
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 pb-1 border-b-2 border-sky-600 inline-block">DJ-ing & Music</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                There's a certain feeling you get while you're up playing music: you hit a transition you've been practicing, the people in the room don't see it coming, and they scream in excitement and delight when it registers. I love love <i>love</i> that feeling! I think that DJ-ing is such a fun way to share music with friends and to give a party a specific feeling or energy. It's also a great outlet for all the music that I listen to and gives me somewhere to channel my creative energy!
              </p>
              <a
                href="https://youtube.com/@justval_official?si=JtOBpdXk8h9wN67W"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors"
              >
                Check out some of my mixes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 pb-1 border-b-2 border-sky-600 inline-block">Other Interests</h2>
              <p className="text-slate-700 leading-relaxed">
                Apparently having too many hobbies means you're a multipotentialite! Sounds a lot better when you put it that way. I'm an introverted geek at heart, a gearhead, a coffee enthusiast, I love to travel, I love to cook for the people in my life, I play video games, I lift weights, I read, I like to do anything active that's outside. Learning new things is so incredibly exciting and stimulating to me and there's just so much out there for you to explore!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

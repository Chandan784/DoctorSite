import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// FootAndAnkleClinic.jsx
// Single-file React component (TailwindCSS required in your project)

export default function App() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
  ];
  const slides = [
    {
      title: "Welcome to Foot n Ankle Superspeciality Clinic",
      subtitle: "World-class foot & ankle care — now in Odisha",
      img: "https://images.unsplash.com/photo-1584467735872-6a2f8f1d6a3d?auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Advanced Foot & Ankle Surgery",
      subtitle: "Minimally invasive, fellowship-trained care",
      img: "https://images.unsplash.com/photo-1588774069165-68b8b3c27f60?auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Personalised Rehabilitation",
      subtitle: "Physiotherapy, orthotics & prosthetics under one roof",
      img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const [index, setIndex] = useState(0);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  function handlePrev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function handleNext() {
    setIndex((i) => (i + 1) % slides.length);
  }

  function handleChange(e) {
    setContact((c) => ({ ...c, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple front-end validation
    if (!contact.name || !contact.email) {
      alert("Please enter at least your name and email.");
      return;
    }
    // For demo: we'll just show a success message. Integrate your API or mailer here.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setContact({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="min-h-screen font-sans antialiased bg-gradient-to-b from-white via-orange-50 to-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shadow-lg">
              FA
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-orange-600">
                Foot n Ankle Clinic
              </h1>
              <p className="text-xs text-gray-600 -mt-1">
                Superspeciality • Dr. Vaibhav Mohanty
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-orange-600">
              About
            </a>
            <a href="#services" className="hover:text-orange-600">
              Services
            </a>
            <a href="#team" className="hover:text-orange-600">
              Team
            </a>
            <a href="#contact" className="hover:text-orange-600">
              Contact
            </a>
            <a
              href="#"
              className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full shadow hover:shadow-lg"
            >
              Book Appointment
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md text-orange-600">
            ☰
          </button>
        </div>
      </header>

      {/* HERO / SLIDER */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-72 md:h-96 lg:h-[520px]">
              {slides.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === index ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 bg-cover bg-center transform ${
                    i === index ? "" : "pointer-events-none"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.25), rgba(0,0,0,0.15)), url(${s.img})`,
                  }}
                >
                  <div className="h-full flex items-center">
                    <div className="max-w-3xl mx-auto px-6 text-white">
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-sm">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-sm md:text-lg opacity-90">
                        {s.subtitle}
                      </p>
                      <div className="mt-6 flex gap-3">
                        <a
                          href="#contact"
                          className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold shadow"
                        >
                          Contact Us
                        </a>
                        <a
                          href="#services"
                          className="bg-transparent border border-white px-4 py-2 rounded-full font-medium"
                        >
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="absolute inset-y-0 left-4 flex items-center">
                <button
                  onClick={handlePrev}
                  className="bg-white/90 p-2 rounded-full shadow hover:scale-105"
                >
                  ‹
                </button>
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center">
                <button
                  onClick={handleNext}
                  className="bg-white/90 p-2 rounded-full shadow hover:scale-105"
                >
                  ›
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === index ? "bg-orange-600" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / SERVICES */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section
          id="about"
          className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-orange-600">
            About Foot n Ankle Superspeciality Clinic
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Foot n Ankle Superspeciality Clinic is a one-stop solution for all
            problems arising from the foot and ankle region. Our
            multidisciplinary team — led by Dr. Vaibhav Mohanty, a
            fellowship-trained foot & ankle specialist — offers comprehensive
            care including surgical and non-surgical treatments, physiotherapy,
            and orthotics.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-orange-50">
              <h4 className="font-semibold">Why choose us</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Fellowship-trained specialist (1st in Odisha)</li>
                <li>State-of-the-art facilities</li>
                <li>Multidisciplinary rehabilitation</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-orange-50">
              <h4 className="font-semibold">Conditions treated</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Heel pain & plantar fasciitis</li>
                <li>Flatfoot & toe deformities</li>
                <li>Sports injuries & diabetic foot</li>
              </ul>
            </div>
          </div>
        </section>

        <aside
          id="services"
          className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-sm"
        >
          <h4 className="text-lg font-bold text-orange-600">Our Services</h4>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold text-orange-600 shadow">
                S
              </div>
              <div>
                <div className="font-semibold">Surgery & Arthroscopy</div>
                <div className="text-sm text-gray-600">
                  Minimally invasive techniques for faster recovery.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold text-orange-600 shadow">
                P
              </div>
              <div>
                <div className="font-semibold">Physiotherapy</div>
                <div className="text-sm text-gray-600">
                  Personalised rehab plans to regain function.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold text-orange-600 shadow">
                O
              </div>
              <div>
                <div className="font-semibold">Orthotics & Prosthetics</div>
                <div className="text-sm text-gray-600">
                  Custom devices for support and comfort.
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <a
              href="#contact"
              className="block text-center bg-orange-600 text-white py-2 rounded-full font-semibold shadow"
            >
              Get Expert Help
            </a>
          </div>
        </aside>
      </main>

      {/* TEAM HIGHLIGHT */}
      <section id="team" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-orange-600">
            Meet Dr. Vaibhav Mohanty
          </h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
                alt="Dr Vaibhav"
                className="w-48 h-48 rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">
                Dr. Vaibhav Mohanty is an Orthopaedic Surgeon with over 10 years
                of experience specializing in Foot & Ankle Surgery and
                Arthroscopy. He is the first fellowship-trained exclusive
                Orthopaedic Foot & Ankle Surgeon in Odisha. Qualifications
                include MBBS, DNB (Orthopaedics), FIFAS (Gujarat), RCSED (U.K.),
                and BEOFAA fellowship (Spain).
              </p>

              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                <li>
                  Graduated from Grant Medical College & Sir J. J. Group of
                  Hospitals, Mumbai
                </li>
                <li>Post-graduation from Apollo Hospitals, Bhubaneswar</li>
                <li>
                  Fellowship training under Dr. Rajiv Shah (Sunshine Global
                  Hospital)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-orange-600">
            Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-orange-50 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-orange-600">
            Contact & Appointment
          </h3>
          <p className="text-gray-700 mt-2">
            Send us a message or book an appointment. We'll get back to you as
            soon as possible.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-6 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={contact.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="p-3 rounded-md border"
                />
                <input
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-3 rounded-md border"
                />
              </div>
              <input
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                className="p-3 rounded-md border w-full"
              />
              <textarea
                name="message"
                value={contact.message}
                onChange={handleChange}
                placeholder="How can we help?"
                className="p-3 rounded-md border w-full h-28"
              />

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-5 py-2 rounded-full font-semibold shadow"
                >
                  Send Message
                </button>
                {sent && (
                  <div className="text-green-600">
                    Message sent — thank you!
                  </div>
                )}
              </div>
            </form>

            <div className="p-6 rounded-lg bg-white flex flex-col gap-4">
              <div>
                <h5 className="font-semibold">Clinic Address</h5>
                <p className="text-sm text-gray-600 mt-1">
                  [Add full clinic address here]
                </p>
              </div>
              <div>
                <h5 className="font-semibold">Phone</h5>
                <p className="text-sm text-gray-600 mt-1">+91-XXXXXXXXXX</p>
              </div>
              <div>
                <h5 className="font-semibold">Email</h5>
                <p className="text-sm text-gray-600 mt-1">clinic@example.com</p>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Opening Hours</h5>
                <p className="text-sm text-gray-600 mt-1">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>

              <div className="mt-auto pt-4 border-t pt-4">
                <h6 className="text-sm font-semibold">Follow us</h6>
                <div className="flex gap-3 mt-2">
                  <a
                    aria-label="facebook"
                    href="#"
                    className="p-2 rounded-full bg-orange-100"
                  >
                    f
                  </a>
                  <a
                    aria-label="instagram"
                    href="#"
                    className="p-2 rounded-full bg-orange-100"
                  >
                    ig
                  </a>
                  <a
                    aria-label="youtube"
                    href="#"
                    className="p-2 rounded-full bg-orange-100"
                  >
                    yt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-bold">Foot n Ankle Clinic</h4>
            <p className="text-sm text-gray-300 mt-2">
              Excellence in foot & ankle care — surgery, rehabilitation and
              custom orthotics.
            </p>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-3 text-sm text-gray-300 space-y-2">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-sm text-gray-300 mt-3">+91-XXXXXXXXXX</p>
            <p className="text-sm text-gray-300">clinic@example.com</p>

            <div className="mt-4">
              <a
                href="#"
                className="inline-block bg-orange-600 text-black px-4 py-2 rounded-full font-semibold"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4">
          <div className="max-w-6xl mx-auto px-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
            <div>
              © {new Date().getFullYear()} Foot n Ankle Superspeciality Clinic
            </div>
            <div>
              Designed with ❤️ • Smooth, responsive, orange-white-black theme
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

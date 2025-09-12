import React from "react";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";

export default function App() {
  const heroImages = [
    {
      src: "https://via.placeholder.com/800x500?text=Doctor+Consultation",
      caption: "Expert Doctors At Your Service",
    },
    {
      src: "https://via.placeholder.com/800x500?text=Patient+Care",
      caption: "Compassionate Care For Every Patient",
    },
    {
      src: "https://via.placeholder.com/800x500?text=Modern+Facilities",
      caption: "Modern Facilities For Better Healthcare",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold"></div>
            <div>
              <h1 className="text-xl font-semibold">HealCare</h1>
              <p className="text-xs text-gray-500">
                Compassion • Expertise • Care
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#doctors" className="hover:underline">
              Doctors
            </a>
            <a href="#appointments" className="hover:underline">
              Appointments
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm">
              Book Visit
            </button>
          </nav>

          <div className="md:hidden">
            <button className="px-3 py-2 border rounded-md">Menu</button>
          </div>
        </div>
      </header>

      {/* Hero with Slider */}
      <HeroSlider />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Quality healthcare, everywhere
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg">
            Telemedicine, in-person consultations, lab tests and personalised
            care plans — all under one roof. Book appointments, consult doctors
            online, and manage prescriptions easily.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#appointments"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow"
            >
              Book Appointment
            </a>
            <a href="#services" className="px-6 py-3 border rounded-md">
              Our Services
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs text-gray-500">Teleconsults</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs text-gray-500">Specialists</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-xs text-gray-500">Patient Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold">Quick appointment</h3>
          <form id="appointments" className="mt-4 space-y-3">
            <input
              className="w-full border px-3 py-2 rounded"
              placeholder="Full name"
            />
            <input
              className="w-full border px-3 py-2 rounded"
              placeholder="Phone or WhatsApp"
            />
            <select className="w-full border px-3 py-2 rounded">
              <option>Choose department</option>
              <option>General Physician</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
            </select>
            <div className="flex gap-2">
              <input type="date" className="w-1/2 border px-3 py-2 rounded" />
              <input type="time" className="w-1/2 border px-3 py-2 rounded" />
            </div>
            <textarea
              className="w-full border px-3 py-2 rounded"
              placeholder="Short note (symptoms, preferences)"
            ></textarea>
            <button className="w-full px-4 py-2 bg-teal-500 text-white rounded">
              Request Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Doctors */}
      <section id="doctors" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Featured doctors</h3>
        <p className="text-gray-600 mt-2">
          Experienced specialists available for consultation.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-center"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                Dr
              </div>
              <div>
                <div className="font-semibold">Dr. Priya Sharma</div>
                <div className="text-sm text-gray-500">
                  Cardiologist • 12 yrs
                </div>
                <div className="mt-2 text-sm">
                  <a className="hover:underline" href="#">
                    View profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold">What patients say</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-6 border rounded-lg">
                <div className="text-gray-700">
                  "Great service and caring staff. Booking was simple."
                </div>
                <div className="mt-4 text-sm text-gray-500">— Rohit K.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold">HealCare</h4>
            <p className="text-sm text-gray-400 mt-2">
              123 Wellness Ave, City • contact@healcare.example
            </p>
          </div>

          <div>
            <h5 className="font-semibold">Useful links</h5>
            <ul className="mt-2 text-sm text-gray-400 space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Newsletter</h5>
            <p className="text-sm text-gray-400 mt-2">
              Get updates on health tips & offerings.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                className="px-3 py-2 rounded w-full text-gray-800"
                placeholder="Your email"
              />
              <button className="px-3 py-2 bg-blue-600 rounded text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} HealCare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

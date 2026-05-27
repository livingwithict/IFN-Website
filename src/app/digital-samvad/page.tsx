import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Digital Samvad | ICT Foundation Nepal',
  description: 'Series that aims to align stakeholders with the vision of Digital Nepal, discussing strategies for digitization.',
};

export default function DigitalSamvad() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-center justify-center bg-gray-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/events/Samvad.jpg"
              alt="Digital Samvad event"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
                Digital Samvad
              </h1>
              <p className="max-w-3xl text-lg text-gray-200">
                Series that aims to align stakeholders with the vision of Digital Nepal, discussing strategies for digitization.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="https://digitalsamvad.org/"
                  className="rounded-md bg-primary px-6 py-3 font-semibold text-white hover:opacity-95"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Event Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The Digital Samvad series aims to align stakeholders with the vision of Digital Nepal, discussing strategies for digitization. Initiated virtually as Digital Samvad 1.0, it evolved to 2.0 during Nepal's first lockdown, and further to physical gatherings as Digital Pradesh Samvad across all provinces. 
              </p>
              <p className="mb-6">
                The latest editions, Digital Pradesh Samvad 3.0 and 4.0, engaged ministers, IT professionals, entrepreneurs, and academics in discussions on digital transformation. Thus, Digital Samvad serves as a precursor to the Digital Nepal Conclave, Nepal's largest tech conference. 
              </p>
            </div>
          </div>
        </section>

        {/* Our Samvad Sessions */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Our Samvad Sessions</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Samvad 1.0 (Virtual)</h3>
                <p className="text-gray-600">Sessions conducted during COVID-19 pandemic. </p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Samvad 2.0 (Virtual)</h3>
                <p className="text-gray-600">Virtual sessions conducted after COVID-19 pandemic.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Pradesh Samvad 2022 3.0 </h3>
                <p className="text-gray-600">Physical Sessions in all 7 Provinces.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Pradesh Samvad 2023 4.0</h3>
                <p className="text-gray-600">Second Edition of physical Sessions in all 7 Provinces.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="mt-10 my-10 mx-auto max-w-4xl px-6">
            <Link href="https://nepal-ai.org" className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
              Learn More
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Pre-Budget ICT Discourse | ICT Foundation Nepal',
  description: 'Dialogue on ICT sector priorities and budget allocation strategies for Nepal\'s digital development.',
};

export default function PreBudgetIctDiscourse() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-center justify-center bg-gray-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/events/PreBudget.jpg"
              alt="Pre-Budget ICT Discourse event"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
                Pre-Budget ICT Discourse
              </h1>
              <p className="max-w-3xl text-lg text-gray-200">
                Dialogue on ICT sector priorities and budget allocation strategies for Nepal's digital development.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="#"
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
                The Pre-Budget ICT Discourse 2083 was a high-level policy dialogue, convened by ICT Foundation Nepal (IFN) on April 30, 2026, to generate consensus-driven recommendations for Nepal's FY 2083/084 Budget and influence the country's digital transformation agenda. 
              </p>
              <p className="mb-6">
                The event convened over 70 senior government officials, private sector leaders, ICT experts, and development partners to align ICT priorities with fiscal allocation following the formation of a new, digitally-proactive government.
              </p>
              <p>
                The program concluded successfully with consensus-driven recommendations compiled into a Budget Recommendation Paper, which has been submitted to the Government of Nepal.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="mt-10 my-10 mx-auto max-w-4xl px-6">
            <Link href="#" className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
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

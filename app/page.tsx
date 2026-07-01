import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero */}
            <section className="relative bg-cover text-white py-56 px-6 text-center" style={{backgroundImage: "url('/hero2.png')", backgroundPosition: "center"}}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative max-w-3xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">Sparkle Bins</h1>
                    <p className="mt-4 text-xl sm:text-2xl text-white/90 drop-shadow">Fresh, clean bins — every time.</p>
                    <a href="#book" className="mt-8 inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-accent-hover transition-colors">
                        Book Now
                    </a>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 bg-white">                                                                                                 
      <div className="max-w-4xl mx-auto text-center">                                                                                       
          <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>                                                               
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">                                                                    
              <div>                                                                                                                         
                  <div className="text-4xl font-bold text-accent">1</div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-800">Book</h3>
                  <p className="mt-2 text-slate-600">Pick a Saturday that works for you and schedule your cleaning.</p>
              </div>
              <div>
                  <div className="text-4xl font-bold text-accent">2</div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-800">I Collect & Clean</h3>
                  <p className="mt-2 text-slate-600">After Republic Services empties your bins, I pick them up from your house, and scrub them spotless.</p>
              </div>
              <div>
                  <div className="text-4xl font-bold text-accent">3</div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-800">Returned Fresh</h3>
                  <p className="mt-2 text-slate-600">I bring your bins back clean, fresh-smelling, and ready to go — no effort on your
  end.</p>
              </div>
          </div>
      </div>
  </section>

            {/* Pricing */}
            <section className="py-20 px-6 bg-accent-light">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900">Pricing</h2>
                    <div className="mt-10 bg-white rounded-2xl shadow-sm border border-accent-border p-10">
                        <div className="text-5xl font-bold text-accent">$10</div>
                        <div className="mt-2 text-lg text-slate-600">per bin</div>
                        <p className="mt-4 text-slate-500">Simple, honest pricing. No hidden fees, no contracts.</p>
                        <a href="#book" className="mt-6 inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-accent-hover transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900">About</h2>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"> <span className="font-bold">Smelly bins?</span> Let a local kid entrepreneur do the dirty work! At Sparkle Bins, I blast away the grime and odor so you don't have to. Enjoy a cleaner, fresher home, one bin at a time.</p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Image src="/keiran1.jpg" alt="Keiran cleaning a trash bin" width={500} height={400} className="rounded-xl object-cover w-full h-72 sm:h-80" />
                        <Image src="/keiran2.jpg" alt="Keiran cleaning a trash bin" width={500} height={400} className="rounded-xl object-cover w-full h-72 sm:h-80" />
                    </div>
                </div>
            </section>

            {/* Contact / Book Now Placeholder */}
            <section id="book" className="py-20 px-6 bg-accent-light">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900">Book Now</h2>
                    <p className="mt-6 text-lg text-slate-600">Online booking is coming soon! In the meantime, reach out to schedule your bin cleaning.</p>
                    <div className="mt-8 bg-white rounded-2xl shadow-sm border border-accent-border p-8">
                        <p className="text-slate-700 font-medium">Call or text me to book:</p>
                        <a href="tel:+17026378989" className="mt-2 block text-2xl font-bold text-accent hover:underline">(702) 637-8989</a>
                        <a
                            href="sms:+17026378989?body=Hi%2C%20I%27d%20like%20to%20book%20a%20bin%20cleaning!"
                            className="mt-6 inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-accent-hover transition-colors"
                        >
                            Text Me to Book
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="font-semibold text-white text-lg">Sparkle Bins</p>
                    <p className="mt-2 text-sm">Your neighborhood bin cleaning service.</p>
                    <p className="mt-4 text-xs">&copy; {new Date().getFullYear()} Sparkle Bins. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

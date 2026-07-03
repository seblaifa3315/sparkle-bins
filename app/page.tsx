import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero */}
            <section className="relative bg-cover text-white py-72 px-6 text-center" style={{backgroundImage: "url('/hero3.png')", backgroundPosition: "center"}}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative max-w-3xl mx-auto">
                    <h1 className="relative inline-block text-6xl sm:text-7xl font-extrabold tracking-tight" style={{fontFamily: "var(--font-nunito)"}}>
                        {/* Sparkle stars */}
                        <svg className="absolute -top-4 -left-6 sm:-top-5 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 animate-sparkle-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" /></svg>
                        <svg className="absolute -top-6 left-1/4 w-4 h-4 sm:w-5 sm:h-5 text-white/80 animate-sparkle-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" /></svg>
                        <svg className="absolute -top-3 -right-6 sm:-top-4 sm:-right-8 w-5 h-5 sm:w-7 sm:h-7 text-sky-200 animate-sparkle-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" /></svg>
                        <svg className="absolute -bottom-2 -right-4 sm:-bottom-3 sm:-right-6 w-4 h-4 sm:w-5 sm:h-5 text-yellow-200 animate-sparkle-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" /></svg>
                        {/* Border layers (outermost to innermost) */}
                        <span className="absolute inset-0 text-transparent" style={{WebkitTextStroke: "20px white"}} aria-hidden="true">SPARKLE BINS</span>
                        <span className="absolute inset-0 text-transparent" style={{WebkitTextStroke: "16px #1e3a5f"}} aria-hidden="true">SPARKLE BINS</span>
                        <span className="absolute inset-0 text-transparent" style={{WebkitTextStroke: "3px #7dd3fc"}} aria-hidden="true">SPARKLE BINS</span>
                        {/* Gradient text */}
                        <span className="relative bg-clip-text text-transparent drop-shadow-lg" style={{backgroundImage: "linear-gradient(to bottom, white 0%, white 55%, #38bdf8 65%, #38bdf8 100%)"}}>SPARKLE BINS</span>
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl text-white drop-shadow">Professional Bin Cleaning Services</p>
                    <p className="mt-2 text-lg sm:text-xl text-white drop-shadow">Say Goodbye to Foul Smells!</p>
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
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-24 h-24 flex items-center justify-center">
                                    <Image src="/icon-calendar.png" alt="Calendar icon" width={50} height={50} className="object-contain" unoptimized />
                                </div>
                                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-extrabold flex items-center justify-center">1</div>
                            </div>
                            <h3 className="mt-3 text-xl font-semibold text-slate-800">Book</h3>
                            <p className="mt-2 text-slate-600">Pick a Saturday that works for you, and send me your address.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-24 h-24 flex items-center justify-center">
                                    <Image src="/icon-dirty-bin.png" alt="Dirty bin icon" width={72} height={72} className="object-contain" unoptimized />
                                </div>
                                <div className="absolute top-2 left-2top-2 left-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-extrabold flex items-center justify-center">2</div>
                            </div>
                            <h3 className="mt-3 text-xl font-semibold text-slate-800">I Collect & Clean</h3>
                            <p className="mt-2 text-slate-600">After Republic Services empties your bins, I pick them up from your house, and scrub them spotless.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-24 h-24 flex items-center justify-center">
                                    <Image src="/icon-clean-bin.png" alt="Clean bin icon" width={80} height={80} className="object-contain" unoptimized />
                                </div>
                                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-extrabold flex items-center justify-center">3</div>
                            </div>
                            <h3 className="mt-3 text-xl font-semibold text-slate-800">Returned Fresh</h3>
                            <p className="mt-2 text-slate-600">I bring your bins back clean, fresh-smelling, and ready to go — no effort on your end.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 px-6 bg-accent-light">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900">Pricing</h2>
                    <div className="mt-10 bg-white rounded-2xl shadow-sm border border-accent-border p-10 flex flex-col items-center">
                        <div className="w-36 h-36 rounded-full bg-accent ring-4 ring-accent/20 flex flex-col items-center justify-center">
                            <span className="text-5xl font-bold text-white">$10</span>
                            <span className="text-sm text-white/90">per bin</span>
                        </div>
                        <p className="mt-6 text-lg font-semibold text-slate-700">Wash Away Grime & Odor!</p>
                        <p className="mt-3 text-slate-500">Simple, honest pricing. No hidden fees, no contracts.</p>
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
                    <p className="mt-6 text-lg text-slate-600">Text us your address and preferred Saturday, and we'll take care of the rest!</p>
                    <div className="mt-8 bg-white rounded-2xl shadow-sm border border-accent-border p-8">
                        <p className="text-slate-700 font-medium">Call or text me to book:</p>
                        <a href="tel:+17026378989" className="mt-2 block text-2xl font-bold text-accent hover:underline">(702) 637-8989</a>
                        <a
                            href="sms:+17026378989?body=Hi%2C%20I%27d%20like%20to%20book%20a%20bin%20cleaning!%0A%0AAddress%3A%20%0APreferred%20Saturday%3A%20"
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

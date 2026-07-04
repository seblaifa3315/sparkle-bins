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
                    <p className="mt-4 text-xl sm:text-2xl text-white drop-shadow">Skyline Ridge&apos;s Bin Cleaning Service</p>
                    <p className="mt-2 text-lg sm:text-xl text-white drop-shadow">Say Goodbye to Foul Smells!</p>
                    <a href="#book" className="mt-8 inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-accent-hover transition-colors">
                        Book Now
                    </a>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:rounded-full after:mx-auto after:mt-3">How It Works</h2>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-24 h-24 flex items-center justify-center">
                                    {/* Adjust width/height to resize this icon */}
                                    <Image src="/icon-calendar.png" alt="Calendar icon" width={70} height={70} style={{width: "auto", height: "auto"}} className="max-w-[70px] max-h-[70px]" unoptimized />
                                </div>
                                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-extrabold flex items-center justify-center">1</div>
                            </div>
                            <h3 className="mt-3 text-xl font-semibold text-slate-800">Book</h3>
                            <p className="mt-2 text-slate-600">Pick a Saturday that works for you, and send me your address.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-24 h-24 flex items-center justify-center">
                                    {/* Adjust width/height to resize this icon */}
                                    <Image src="/icon-dirty-bin.png" alt="Dirty bin icon" width={80} height={80} style={{width: "auto", height: "auto"}} className="max-w-[80px] max-h-[80px]" unoptimized />
                                </div>
                                <div className="absolute top-2 left-2top-2 left-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-extrabold flex items-center justify-center">2</div>
                            </div>
                            <h3 className="mt-3 text-xl font-semibold text-slate-800">I Collect & Clean</h3>
                            <p className="mt-2 text-slate-600">After Republic Services empties your bins, I pick them up from your house, and scrub them spotless.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-24 h-24 flex items-center justify-center">
                                    {/* Adjust width/height to resize this icon */}
                                    <Image src="/icon-clean-bin.png" alt="Clean bin icon" width={80} height={80} style={{width: "auto", height: "auto"}} className="max-w-[88px] max-h-[88px]" unoptimized />
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
                    <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:rounded-full after:mx-auto after:mt-3">Pricing</h2>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Before */}
                        <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-8 flex flex-col items-center">
                            <div className="text-4xl mb-3">🤢</div>
                            <h3 className="text-xl font-bold text-slate-800">Before</h3>
                            <p className="mt-2 text-slate-500">Smelly, grimy bins sitting in your driveway.</p>
                            <ul className="mt-4 space-y-2 text-left text-slate-500 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="text-red-400">✕</span> Foul odors
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-400">✕</span> Sticky residue
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-400">✕</span> Attracts pests
                                </li>
                            </ul>
                        </div>
                        {/* After */}
                        <div className="bg-white rounded-2xl shadow-sm border border-accent-border p-8 flex flex-col items-center">
                            <div className="text-4xl mb-3">✨</div>
                            <h3 className="text-xl font-bold text-slate-800">After</h3>
                            <p className="mt-2 text-slate-500">Fresh, spotless bins you can be proud of.</p>
                            <ul className="mt-4 space-y-2 text-left text-slate-500 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Fresh & clean
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Fully sanitized
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Pest-free
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Price bridge */}
                    <div className="mt-10 flex flex-col items-center">
                        <p className="text-slate-500 text-lg">All this for just</p>
                        <div className="mt-3 w-36 h-36 rounded-full bg-accent ring-4 ring-accent/20 flex flex-col items-center justify-center">
                            <span className="text-5xl font-bold text-white">$10</span>
                            <span className="text-sm text-white/90">per bin</span>
                        </div>
                        <p className="mt-4 text-lg font-semibold text-slate-700">Wash Away Grime & Odor!</p>
                        <p className="mt-2 text-slate-500">Simple, honest pricing. No hidden fees, no contracts.</p>
                        <a href="#book" className="mt-6 inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-accent-hover transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Video divider */}
            <section className="relative h-72 sm:h-96 overflow-hidden">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/about.MOV" type="video/quicktime" />
                </video>
                <div className="absolute inset-0 bg-accent/30" />
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide text-center after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:rounded-full after:mx-auto after:mt-3">FAQ</h2>
                    <div className="mt-10 space-y-4">
                        <details className="group bg-accent-light rounded-xl p-5 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800 text-lg list-none">
                                What day do you clean?
                                <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                            </summary>
                            <p className="mt-3 text-slate-600">Every Saturday, after Republic Services empties your bins. I pick them up, clean them, and bring them back the same day.</p>
                        </details>
                        <details className="group bg-accent-light rounded-xl p-5 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800 text-lg list-none">
                                Do I need to be home?
                                <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                            </summary>
                            <p className="mt-3 text-slate-600">Nope! Just leave your bins out after they&apos;ve been emptied, and I&apos;ll take care of the rest. You&apos;ll come back to fresh, clean bins.</p>
                        </details>
                        <details className="group bg-accent-light rounded-xl p-5 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800 text-lg list-none">
                                What products do you use?
                                <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                            </summary>
                            <p className="mt-3 text-slate-600">I use eco-friendly cleaning products that are tough on grime and odor but safe for your family and pets.</p>
                        </details>
                        <details className="group bg-accent-light rounded-xl p-5 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800 text-lg list-none">
                                How do I pay?
                                <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                            </summary>
                            <p className="mt-3 text-slate-600">Payment is collected when I return your clean bins. I accept cash, Venmo, and Zelle — whatever is easiest for you.</p>
                        </details>
                        <details className="group bg-accent-light rounded-xl p-5 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800 text-lg list-none">
                                Do you serve my neighborhood?
                                <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                            </summary>
                            <p className="mt-3 text-slate-600">I currently serve the Skyline Ridge community. If you&apos;re a neighbor, just text me and I&apos;ll get you on the schedule!</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="relative py-32 px-6 bg-cover bg-center" style={{backgroundImage: "url('/keiran1.jpg')"}}>
                <div className="absolute inset-0 bg-slate-900/70" />
                <div className="relative max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white uppercase tracking-wide after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:rounded-full after:mx-auto after:mt-3">About</h2>
                    <h3 className="mt-8 text-2xl font-bold text-white">Meet Keiran</h3>
                    <p className="mt-4 text-lg text-white/90 leading-relaxed">Hi, I&apos;m Keiran — a kid entrepreneur right here in <span className="font-bold">Skyline Ridge</span>. I started Sparkle Bins to help my neighbors keep their trash bins fresh and clean. Every Saturday, I pick up your bins, scrub away the grime and odor, and bring them back spotless. No more stinky bins sitting in your driveway!</p>
                    <Image src="/keiran2.jpg" alt="Keiran cleaning a trash bin" width={500} height={300} className="mt-10 rounded-xl object-cover w-full h-56 sm:h-64 shadow-lg mx-auto max-w-md" />
                </div>
            </section>


            {/* Contact / Book Now */}
            <section id="book" className="py-20 px-6 bg-accent-light">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:rounded-full after:mx-auto after:mt-3">Book Now</h2>
                    <div className="mt-16 bg-white rounded-2xl shadow-lg border border-accent-border p-8 sm:p-10">
                        {/* Avatar */}
                        <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-accent/20 shadow-md mx-auto -mt-20">
                            <Image src="/avatar.jpg" alt="Keiran" width={100} height={100} className="object-cover w-full h-full" />
                        </div>
                        {/* Personal message */}
                        <p className="mt-5 text-lg text-slate-700 leading-relaxed">Ready for clean bins? Just text me your <span className="font-bold">address</span> and your <span className="font-bold">preferred Saturday</span> — I&apos;ll get you on the schedule!</p>
                        {/* Phone number */}
                        <a href="tel:+17026378989" className="mt-6 block text-3xl font-extrabold text-accent hover:underline">(702) 637-8989</a>
                        <p className="mt-1 text-sm text-slate-400">Call or text</p>
                        {/* SMS button */}
                        <a
                            href="sms:+17026378989?body=Hi%2C%20I%27d%20like%20to%20book%20a%20bin%20cleaning!%0A%0AAddress%3A%20%0APreferred%20Saturday%3A%20"
                            className="mt-6 inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-accent-hover transition-colors shadow-md"
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
                    <p className="mt-2 text-sm">Skyline Ridge&apos;s bin cleaning service.</p>
                    <p className="mt-4 text-xs">&copy; {new Date().getFullYear()} Sparkle Bins. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

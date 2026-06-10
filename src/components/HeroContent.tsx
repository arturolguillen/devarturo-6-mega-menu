export default function HeroContent() {
    return (
        <div className="lg:col-span-6">
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 block">{'Nueva temporada ya disponible'}</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-8 leading-[1.1]">{'Redefiniendo la Autoridad Minimalista'}</h1>
            <p className="text-lg text-zinc-500 max-w-lg mb-10 leading-relaxed">{'Stratos te ofrece un ecosistema curado de prendas premium diseñadas para un estilo de vida de alto nivel. Armonía matemática en cada puntada.'}</p>
            <div className="flex flex-wrap gap-4">
                <button
                    type="button"
                    className="h-14 px-10 bg-zinc-900 text-white font-bold rounded-lg hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-900/10"
                >
                    {'Explorar Colección'}
                </button>
                <button
                    type="button"
                    className="h-14 px-10 border border-zinc-200 text-zinc-900 font-bold rounded-lg hover:bg-zinc-50 transition-all active:scale-95"
                >
                    {'Nuestra Historia'}
                </button>
            </div>
        </div>
    );
}
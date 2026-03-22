import { Link } from "react-router-dom";

export default function OtpVerification() {
  return (
    <div className="bg-background font-body text-on-background min-h-screen flex flex-col overflow-x-hidden relative">
      <header className="flex items-center justify-between px-6 py-4 w-full z-50 bg-transparent absolute top-0 left-0">
        <div className="text-2xl font-bold tracking-tight text-slate-900 font-headline flex items-center">
          <span className="material-symbols-outlined text-primary mr-2 align-middle text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>hub</span>
          Micromedia Solución
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100/50 transition-colors rounded-full">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100/50 transition-colors rounded-full">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-20 relative z-10">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl"></div>

        <div className="w-full max-w-md z-10">
          <div className="glass-card otp-shadow p-8 md:p-10 rounded-xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>mark_email_read</span>
            </div>

            <div className="text-center mb-10">
              <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-3">
                Verificar Código
              </h1>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-[280px] mx-auto">
                Hemos enviado un código de 6 dígitos a <span className="text-primary font-semibold">a.moreno@materio.io</span>.
              </p>
            </div>

            <div className="flex justify-between w-full gap-2 mb-10">
              <input className="w-12 h-14 text-center text-xl font-bold border-0 bg-surface-container rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" maxLength={1} type="text" defaultValue="8" />
              <input className="w-12 h-14 text-center text-xl font-bold border-0 bg-surface-container rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" maxLength={1} type="text" defaultValue="4" />
              <input className="w-12 h-14 text-center text-xl font-bold border-0 bg-surface-container rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" maxLength={1} type="text" defaultValue="2" />
              <input className="w-12 h-14 text-center text-xl font-bold border-0 bg-surface-container rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" maxLength={1} placeholder="·" type="text" />
              <input className="w-12 h-14 text-center text-xl font-bold border-0 bg-surface-container rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" maxLength={1} placeholder="·" type="text" />
              <input className="w-12 h-14 text-center text-xl font-bold border-0 bg-surface-container rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" maxLength={1} placeholder="·" type="text" />
            </div>

            <button className="w-full brand-gradient text-on-primary py-4 rounded-lg font-semibold tracking-wide text-sm shadow-lg hover:opacity-90 transition-all active:scale-95 duration-200">
              Verify
            </button>

            <div className="mt-10 text-center">
              <p className="text-xs text-on-surface-variant mb-2">¿No recibiste el código?</p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xs font-medium text-slate-400">Reenviar código en</span>
                <div className="flex items-center text-primary font-mono text-sm font-semibold">
                  <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                  00:54
                </div>
              </div>
              <button className="mt-4 text-xs font-semibold text-primary/50 cursor-not-allowed uppercase tracking-widest" disabled>
                Reenviar ahora
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <Link to="/login" className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
              Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </main>

      <footer className="flex justify-center py-6 w-full z-50 bg-transparent text-xs font-body tracking-wide absolute bottom-0 left-0">
        <span className="text-slate-400">© 2024 Micromedia Solución</span>
      </footer>
    </div>
  );
}
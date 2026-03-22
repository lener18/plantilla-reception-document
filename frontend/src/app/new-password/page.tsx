import React from "react";
import Link from "next/link";

export default function NewPassword() {
  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex flex-col relative overflow-hidden">
      <header className="w-full top-0 left-0 absolute flex items-center justify-between px-6 py-4 z-50 bg-transparent font-headline antialiased">
        <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 flex items-center">
          <span className="material-symbols-outlined text-3xl text-primary align-middle mr-2">domain</span>
          Micromedia Solución
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100/50 transition-colors rounded-full">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100/50 transition-colors rounded-full">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-24 relative z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary-container/10 rounded-full blur-[120px]"></div>

        <div className="w-full max-w-[480px] z-10">
          <div className="bg-surface-container-lowest glass-effect rounded-xl p-8 md:p-12 shadow-[0_12px_32px_-4px_rgba(22,26,47,0.06)] border border-outline-variant/15">
            <div className="mb-10">
              <h1 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-3">
                Nueva Contraseña
              </h1>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Tu nueva contraseña debe ser diferente a la utilizada anteriormente.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant/70 px-1 font-label">Nueva contraseña</label>
                <div className="relative group">
                  <input className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary focus:ring-0 transition-all text-on-surface" placeholder="••••••••" type="password" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
                <div className="pt-2">
                  <div className="flex gap-1 h-1.5 mb-2">
                    <div className="flex-1 rounded-full bg-primary-container"></div>
                    <div className="flex-1 rounded-full bg-primary-container"></div>
                    <div className="flex-1 rounded-full bg-primary-container"></div>
                    <div className="flex-1 rounded-full bg-surface-container-highest"></div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span className="text-[11px] font-medium text-on-surface-variant">Fortaleza de contraseña: Fuerte</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant/70 px-1 font-label">Confirmar nueva contraseña</label>
                <div className="relative group">
                  <input className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary focus:ring-0 transition-all text-on-surface" placeholder="••••••••" type="password" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full gradient-primary text-on-primary font-semibold py-4 rounded-lg shadow-[0_8px_20px_-4px_rgba(66,70,219,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group" type="submit">
                  Reset Password
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>

              <div className="text-center pt-4">
                <Link href="/login" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  Volver al inicio de sesión
                </Link>
              </div>
            </form>
          </div>

          <div className="mt-8 flex justify-center gap-8 text-[10px] font-medium uppercase tracking-widest text-on-surface-variant/50">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              Cifrado de 256 bits
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              Seguridad Micromedia
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bottom-0 left-0 absolute flex justify-center py-6 z-50 bg-transparent text-xs font-body tracking-wide">
        <span className="text-slate-400 dark:text-slate-500">© 2024 Micromedia Solución</span>
      </footer>
    </div>
  );
}

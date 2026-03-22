import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex flex-col relative overflow-hidden">
      <header className="flex items-center justify-between px-6 py-4 w-full z-50 bg-transparent absolute top-0 left-0 font-headline antialiased">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg">category</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Micromedia Solución</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-100/50 transition-colors text-slate-500">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100/50 transition-colors text-slate-500">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-container/10 blur-[120px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-tertiary/10 blur-[100px]"></div>
      </div>

      <main className="flex-grow flex items-center justify-center md:justify-start z-10 p-6 md:p-0">
        <div className="w-full max-w-[1440px] mx-auto grid md:grid-cols-2 h-[819px] md:h-screen items-center">

          <div className="flex flex-col items-center justify-center px-4 md:px-24">
            <div className="w-full max-w-md space-y-10">
              <div className="space-y-2">
                <Link to="/login" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200">
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                  <span className="text-sm font-label">Volver al inicio de sesión</span>
                </Link>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
                  ¿Olvidaste tu contraseña?
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-[90%]">
                  Ingresa tu correo y te enviaremos instrucciones para restablecerla.
                </p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-1" htmlFor="email">Nombre de Usuario</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <input
                      className="block w-full pl-11 pr-4 py-4 bg-surface-container-lowest border border-outline-variant/30 rounded-lg focus:outline-none focus:ring-0 focus:border-primary transition-all duration-200 placeholder:text-slate-400"
                      id="email"
                      name="email"
                      placeholder="nombre_de_usuario"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <button className="w-full py-4 hero-gradient text-white font-bold rounded-lg ambient-shadow hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2" type="submit">
                  <span>Send Reset Link</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>

              <div className="pt-10 border-t border-outline-variant/10">
                <p className="text-on-surface-variant text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">info</span>
                  ¿No recibiste el correo? Revisa tu carpeta de spam o contacta a soporte.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex h-full p-10 items-center justify-center">
            <div className="relative w-full h-full max-h-[700px] rounded-3xl overflow-hidden ambient-shadow">
              <img
                alt="Abstract digital art background"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6_Mt95NDoIAp_257Edfxnnn03ipfkmX1VXYzQNl06T1vMpZSjcXia8I8iAo2Bjv-CuQtqjpOd7Hl3tbzhrCMgO2na2nIxOxFEyYNiyAJUa7RtreRle85jUeROzHq1uHmWjgYUnLrMMPqxUhbQVmgU11v8Y4m-zZ84EDyFMZ1T8q-aZzGE5KhvQ-zuxSlvw4DU1kj1rMDqDyM19qr6rapyOs1LiRmsLMTA-1o_bofxldQWb_T3xa6kfhftQwgYrKbPDdmURCdTlZ0"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>

              <div className="absolute bottom-12 left-12 right-12 glass-effect p-8 rounded-2xl ambient-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-lg text-on-surface">Tu seguridad es prioridad</h3>
                    <p className="text-sm text-on-surface-variant">Protegemos tus datos con encriptación de grado militar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex justify-center space-x-8 py-6 w-full z-50 bg-transparent absolute bottom-0 left-0 text-xs font-body tracking-wide">
        <span className="text-slate-400 dark:text-slate-500">© 2024 Micromedia Solución</span>
      </footer>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex items-center justify-center p-6 sm:p-10 lg:p-0">
      <div className="flex w-full max-w-[1440px] h-full lg:h-[921px] bg-surface-container-lowest lg:rounded-xl overflow-hidden ambient-shadow">
        {/* Left Section: Branding & Form */}
        <div className="w-full lg:w-5/12 flex flex-col p-8 md:p-12 lg:p-20 overflow-y-auto">
          {/* Header Branding */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
            </div>
            <span className="font-headline font-extrabold text-2xl tracking-tight text-on-surface">Micromedia Solución</span>
          </div>

          {/* Welcome Message */}
          <div className="mb-10">
            <h1 className="font-headline font-bold text-4xl text-on-surface mb-3 tracking-tight">Iniciar sesión</h1>
            <p className="text-on-surface-variant text-base">¡Bienvenido de nuevo! Ingrese sus datos para acceder al centro de documentos empresarial.</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block font-label text-sm font-semibold text-on-surface" htmlFor="username">Nombre de usuario</label>
              <div className="relative">
                <input
                  className="w-full h-12 px-4 bg-surface-container-low border border-transparent focus:outline-none focus:border-primary focus:ring-0 rounded-lg text-on-surface placeholder:text-outline transition-all"
                  id="username"
                  placeholder="nombre_de_usuario"
                  type="text"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block font-label text-sm font-semibold text-on-surface" htmlFor="password">Contraseña</label>
                <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-primary-container transition-colors">
                  ¿Olvidó su contraseña?
                </Link>
              </div>
              <div className="relative">
                <input
                  className="w-full h-12 px-4 bg-surface-container-low border border-transparent focus:outline-none focus:border-primary focus:ring-0 rounded-lg text-on-surface placeholder:text-outline transition-all"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                />
                <div className="absolute inset-y-0 right-4 flex items-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px] cursor-pointer">visibility</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input className="peer h-5 w-5 rounded border-outline-variant bg-surface-container-low text-primary focus:ring-primary focus:ring-offset-0 transition-all" type="checkbox" />
                </div>
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Recordarme</span>
              </label>
            </div>

            {/* Sign In Button */}
            <Link to="/dashboard" className="block w-full">
              <button
                className="w-full h-12 bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold rounded-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                type="button"
              >
                Ingresar
              </button>
            </Link>
          </form>
        </div>

        {/* Right Section: Visual/Illustrative */}
        <div className="hidden lg:block lg:w-7/12 relative bg-primary overflow-hidden">
          {/* Background Image with Overlay */}
          <img
            alt="Espacio de trabajo profesional moderno"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfyDBPx7Ejo_YpG-usUYuYrbjx7u039ezA7mHe-ag8Cn6dri8L2nv03Tl4K8KWS2jJjxM9gpDfgnvO2kxsVVM-ysShWXNm3bGtUZHgycXqqRmMyoAaWZ9Ga40_SrIJsaACCGtZAxrPa6fHZH9bJWz3fML9mIrdd56LhVtt14sJ1ub_ztGX30Gn-takl0gkFxUS-seiEpYP9Mm5D1ikjv3c37qfGzLcaRXz5L2gHU_hIlUs4P-XLh7MdhhoBgvU_2FQkjZ17oFxx5M"
          />
          {/* The "Glass Atelier" Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-on-primary-fixed/90"></div>

          {/* Content on Image */}
          <div className="relative h-full flex flex-col justify-center p-16 xl:p-24 z-10 text-white">
            <div className="max-w-md">
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
                Nivel Empresarial
              </div>
              <h2 className="font-headline font-black text-5xl xl:text-6xl leading-[1.1] mb-8 tracking-tight">
                Precisión en cada <span className="text-primary-fixed">documento.</span>
              </h2>
              <p className="text-lg text-primary-fixed font-light leading-relaxed mb-12">
                Optimice el flujo de trabajo de su organización con nuestra integración avanzada de ERP y procesamiento inteligente de documentos.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-primary-fixed" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
                  <div>
                    <h4 className="font-bold text-sm">Bóveda Segura</h4>
                    <p className="text-xs text-primary-fixed/70">Cifrado AES-256</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-primary-fixed" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                  <div>
                    <h4 className="font-bold text-sm">Sincronización Rápida</h4>
                    <p className="text-xs text-primary-fixed/70">Colaboración en tiempo real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute top-10 left-10 w-48 h-48 bg-tertiary/20 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
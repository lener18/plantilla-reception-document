import { Link } from "react-router-dom";

export default function SideNavBar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto z-50 bg-[#F3F2FF] dark:bg-[#1A1C30] flex flex-col py-4 font-headline font-medium text-[0.875rem]">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#666CFF] rounded-lg flex items-center justify-center text-white shadow-lg">
          <span className="material-symbols-outlined">corporate_fare</span>
        </div>
        <div>
          <h1 className="font-black tracking-tighter text-[#666CFF] text-xl leading-none">
            Micromedia
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            Solución Digital
          </p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 flex flex-col">
        <Link
          to="/dashboard"
          className="text-slate-600 dark:text-slate-400 mx-2 my-1 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform hover:bg-[#666CFF]/5"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </Link>
        <Link
          to="/document-reception"
          className="bg-[#666CFF]/10 text-[#666CFF] rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 border-r-4 border-[#666CFF] transition-all"
        >
          <span className="material-symbols-outlined">description</span>
          <span>Recepción de Documentos</span>
        </Link>
        <Link
          to="#"
          className="text-slate-600 dark:text-slate-400 mx-2 my-1 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform hover:bg-[#666CFF]/5"
        >
          <span className="material-symbols-outlined">folder_shared</span>
          <span>Gestión de Archivos</span>
        </Link>
        <Link
          to="#"
          className="text-slate-600 dark:text-slate-400 mx-2 my-1 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform hover:bg-[#666CFF]/5"
        >
          <span className="material-symbols-outlined">analytics</span>
          <span>Reportes</span>
        </Link>
        <Link
          to="#"
          className="text-slate-600 dark:text-slate-400 mx-2 my-1 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform hover:bg-[#666CFF]/5"
        >
          <span className="material-symbols-outlined">settings</span>
          <span>Configuración</span>
        </Link>
        <Link
          to="#"
          className="text-slate-600 dark:text-slate-400 mx-2 my-1 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform hover:bg-[#666CFF]/5"
        >
          <span className="material-symbols-outlined">quiz</span>
          <span>Ayuda</span>
        </Link>
      </nav>
      <div className="mt-auto border-t border-outline-variant/20 pt-4 px-2">
        <Link
          to="/login"
          className="w-full text-slate-600 dark:text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-error/5 hover:text-error transition-colors rounded-lg"
        >
          <span className="material-symbols-outlined">logout</span>
          <span>Cerrar Sesión</span>
        </Link>
      </div>
    </aside>
  );
}
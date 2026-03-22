import React from "react";
import { Link } from "react-router-dom";

export default function TopAppBar({ breadcrumbs }: { breadcrumbs: { label: string, href?: string }[] }) {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] flex items-center justify-between px-6 py-3 font-headline text-sm tracking-tight">
      <div className="flex items-center gap-4">
        <nav className="flex text-xs font-medium text-on-surface-variant gap-2 items-center">
          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="material-symbols-outlined text-[14px]">chevron_right</span>}
              {bc.href ? (
                <Link to={bc.href} className="hover:text-primary transition-colors">
                  {bc.label}
                </Link>
              ) : (
                <span className="text-on-surface font-semibold">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        {breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length - 1].label === "Recepción de Documentos" && (
           <div className="relative ml-8 hidden md:block">
             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">search</span>
             <input className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg w-64 focus:ring-2 focus:ring-primary/20 text-sm" placeholder="Buscar en la plataforma..." type="text" />
           </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-on-surface leading-none">Admin User</p>
            <p className="text-[11px] text-on-surface-variant font-medium mt-1">Administrador</p>
          </div>
          <div className="relative">
            <img
              alt="User profile avatar"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10 group-hover:border-primary transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVZYB0WUzXAoLX-gsuIn39NMk4wuVsK4X0aQzjsyQsWPy1-bJ56rG4kBAjKyFfKrUtG5b4448NqTpCx0HBhHnxjzh3IJO6aaslw0Yi_a8pmAlgVkUcYK4nIRXm1z4ijf_wXo7oKb518dGNSXnVNedoJ8E9K6_AvZ6JqxtvCT0Jp91-qdaXuUTL45MaOpXUbuy1Mr-3jhI7i1bYJJhWeQJgrc0mWK8MOnU_oKj54GEgIxwYvcr_uDZyXFDtVdUTCg2ypaPibECQ9gk"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
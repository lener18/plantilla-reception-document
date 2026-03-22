import React from "react";
import SideNavBar from "@/components/SideNavBar";
import TopAppBar from "@/components/TopAppBar";

export default function Dashboard() {
  const breadcrumbs = [
    { label: "Inicio", href: "/dashboard" },
    { label: "Dashboard" },
  ];

  return (
    <div className="flex bg-background min-h-screen font-body text-on-background">
      <SideNavBar />
      <main className="ml-64 flex-1 flex flex-col min-h-screen">
        <TopAppBar breadcrumbs={breadcrumbs} />

        <div className="p-10 max-w-7xl mx-auto w-full space-y-8">
          {/* Welcome Header */}
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight font-headline">Bienvenido de nuevo, Alex</h2>
            <p className="text-on-surface-variant">Resumen general de la recepción de documentos para el día de hoy.</p>
          </div>

          {/* Bento Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Promo Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container p-6 rounded-xl text-white shadow-xl relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-headline">Micromedia Solución</h3>
                  <p className="text-white/80 text-sm max-w-[200px]">Optimiza tu flujo de trabajo con la gestión automática de documentos.</p>
                </div>
                <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm w-fit mt-6 hover:bg-opacity-90 transition-all active:scale-95">
                  Ver Reportes
                </button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[160px] opacity-10 group-hover:scale-110 transition-transform duration-500">description</span>
            </div>

            {/* Stat Cards */}
            <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm font-medium">Documentos Pendientes</p>
                <h4 className="text-3xl font-extrabold text-on-surface font-headline">124</h4>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded w-fit">+12% hoy</span>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm font-medium">Documentos Aprobados</p>
                <h4 className="text-3xl font-extrabold text-on-surface font-headline">892</h4>
              </div>
              <span className="text-xs font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded w-fit">+5% este mes</span>
            </div>
          </div>

          {/* Documents Table & Secondary Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest Documents Table */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl ambient-shadow overflow-hidden flex flex-col">
              <div className="p-6 flex items-center justify-between border-b border-outline-variant/10">
                <h3 className="font-bold text-lg font-headline">Documentos Recientes</h3>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/50 text-on-surface-variant text-[11px] uppercase tracking-wider">
                      <th className="px-6 py-4 font-bold">Documento</th>
                      <th className="px-6 py-4 font-bold">Fecha</th>
                      <th className="px-6 py-4 font-bold">Estado</th>
                      <th className="px-6 py-4 font-bold">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10 text-sm">
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary-container/10 flex items-center justify-center text-primary-container">
                          <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">Factura_FE2930.pdf</p>
                          <p className="text-[11px] text-on-surface-variant">4.2 MB</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">Hace 15 min</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-primary-fixed text-on-primary-fixed-variant">Pendiente</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors cursor-pointer">visibility</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                          <span className="material-symbols-outlined text-sm">description</span>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">Contrato_RRHH_2024.docx</p>
                          <p className="text-[11px] text-on-surface-variant">1.8 MB</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">Hace 2 horas</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant">Aprobado</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors cursor-pointer">visibility</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-error/10 flex items-center justify-center text-error">
                          <span className="material-symbols-outlined text-sm">error</span>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">Validacion_Impuestos.pdf</p>
                          <p className="text-[11px] text-on-surface-variant">2.1 MB</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">Ayer</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-error-container text-on-error-container">Erróneo</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors cursor-pointer">visibility</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-surface-container-low/30 text-center mt-auto">
                <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Ver todos los documentos</button>
              </div>
            </div>

            {/* Activity / Insights */}
            <div className="space-y-6">
              <div className="glass-card border border-white/20 p-6 rounded-xl shadow-lg">
                <h3 className="font-bold mb-4 flex items-center gap-2 font-headline">
                  <span className="material-symbols-outlined text-primary">insights</span>
                  Rendimiento
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>Tasa de Aprobación</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-full w-[78%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>Documentos Procesados</span>
                      <span>65/100</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                      <div className="bg-tertiary h-full w-[65%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-highest/30 border border-outline-variant/20 p-6 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-on-surface mb-2 font-headline">¿Necesitas Ayuda?</h4>
                  <p className="text-xs text-on-surface-variant mb-4">Consulta la documentación técnica o contacta con soporte.</p>
                  <button className="bg-[#666CFF]/10 text-[#666CFF] text-[10px] font-bold px-4 py-2 rounded-lg hover:bg-[#666CFF] hover:text-white transition-all">
                    SOPORTE TÉCNICO
                  </button>
                </div>
                <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-7xl opacity-5">support_agent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contextual FAB */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
          <span className="absolute right-full mr-4 bg-on-surface text-white px-3 py-1.5 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Subir Documento</span>
        </button>
      </main>
    </div>
  );
}

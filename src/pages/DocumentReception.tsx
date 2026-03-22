import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import TopAppBar from "../components/TopAppBar";

export default function DocumentReception() {
  const breadcrumbs = [
    { label: "Inicio", href: "/dashboard" },
    { label: "Recepción de Documentos" },
  ];

  return (
    <div className="flex bg-background min-h-screen font-body text-on-background">
      <SideNavBar />
      <main className="ml-64 flex-1 flex flex-col min-h-screen">
        <TopAppBar breadcrumbs={breadcrumbs} />

        <div className="p-10 space-y-8">
          {/* Title */}
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">Recepción de Documentos</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex items-start justify-between group hover:-translate-y-0.5 transition-transform">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant font-medium">Monto Pendiente Total</p>
                  <h3 className="text-2xl font-bold mt-1">$45,280.00</h3>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+12.5%</span>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex items-start justify-between group hover:-translate-y-0.5 transition-transform">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant font-medium">Documentos en Espera</p>
                  <h3 className="text-2xl font-bold mt-1">128</h3>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded">Prioridad Alta</span>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex items-start justify-between group hover:-translate-y-0.5 transition-transform border-l-4 border-error/20">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant font-medium">Alertas de Proveedores</p>
                  <h3 className="text-2xl font-bold mt-1">14 Alertas</h3>
                </div>
              </div>
              <button className="text-xs font-bold text-primary hover:underline">Ver todas</button>
            </div>
          </div>

          {/* Filters Section */}
          <section className="bg-surface-container-low p-6 rounded-xl space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-on-surface flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary">filter_alt</span>
                Filtros Avanzados
              </h4>
              <button className="text-sm text-primary font-semibold hover:opacity-80 transition-opacity">Limpiar Filtros</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Rango de Fechas</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary transition-all outline-none" type="date" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Cargado al ERP</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                  <option>Todos</option>
                  <option>Sí</option>
                  <option>No</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Estados</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                  <option>Seleccionar estado</option>
                  <option>Aceptado</option>
                  <option>Rechazado</option>
                  <option>Pendiente</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Proveedor</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-2 pl-9 pr-3 text-sm focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Buscar proveedor..." type="text" />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-sm">person_search</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Buscar por</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Factura, OC, etc..." type="text" />
              </div>
            </div>
          </section>

          {/* Documents Table */}
          <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high/50 text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">
                    <th className="px-6 py-4">Documento</th>
                    <th className="px-4 py-4">Tipo</th>
                    <th className="px-4 py-4">Est. Factura</th>
                    <th className="px-6 py-4">Proveedor</th>
                    <th className="px-4 py-4">Estado</th>
                    <th className="px-4 py-4">ERP</th>
                    <th className="px-4 py-4">Fecha</th>
                    <th className="px-4 py-4">Total</th>
                    <th className="px-4 py-4">OC / Emb.</th>
                    <th className="px-6 py-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr className="hover:bg-slate-50/50 transition-colors text-sm">
                    <td className="px-6 py-4 font-bold text-primary">FE-2024-001</td>
                    <td className="px-4 py-4 text-on-surface-variant">Factura</td>
                    <td className="px-4 py-4">
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">Aceptada</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold">Insumos Industriales S.A.</span>
                        <span className="text-[10px] text-on-surface-variant">ID: 3-101-554433</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="flex items-center gap-1.5 text-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Procesado
                      </span>
                    </td>
                    <td className="px-4 py-4 text-on-surface-variant font-medium">Sí</td>
                    <td className="px-4 py-4 text-xs">24/05/2024</td>
                    <td className="px-4 py-4 font-bold text-on-surface">$1,250.00</td>
                    <td className="px-4 py-4 text-xs text-on-surface-variant">
                      OC: 8892<br />EM: 102
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link to="/document-detail" className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors" title="Ver Detalle">
                          <span className="material-symbols-outlined">visibility</span>
                        </Link>
                        <div className="relative group">
                          <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                          </button>
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 z-50 invisible group-hover:visible">
                            <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 text-left">Documentos</p>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-2">
                              <span className="material-symbols-outlined text-blue-500 text-base">code</span> XML
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-2">
                              <span className="material-symbols-outlined text-red-500 text-base">picture_as_pdf</span> PDF
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-2">
                              <span className="material-symbols-outlined text-emerald-500 text-base">task_alt</span> Hacienda
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-error-container/20 hover:bg-error-container/30 transition-colors text-sm">
                    <td className="px-6 py-4 font-bold text-primary">FE-2024-042</td>
                    <td className="px-4 py-4 text-on-surface-variant">Factura</td>
                    <td className="px-4 py-4">
                      <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">Pendiente</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-error">Distribuidora Global XYZ</span>
                        <button className="mt-1 w-fit bg-error text-white text-[9px] font-bold px-2 py-1 rounded flex items-center gap-1 uppercase hover:bg-error/90 transition-colors">
                          <span className="material-symbols-outlined text-xs">person_add</span> Agregar Proveedor
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="flex items-center gap-1.5 text-xs text-error font-medium">
                        <span className="w-2 h-2 rounded-full bg-error"></span>
                        No Registrado
                      </span>
                    </td>
                    <td className="px-4 py-4 text-error font-bold italic">No</td>
                    <td className="px-4 py-4 text-xs">25/05/2024</td>
                    <td className="px-4 py-4 font-bold text-on-surface">$3,420.50</td>
                    <td className="px-4 py-4 text-xs text-on-surface-variant">
                      OC: --<br />EM: --
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Registration Form */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
            <div className="lg:col-span-1 space-y-4">
              <div className="sticky top-24">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>add_business</span>
                </div>
                <h3 className="text-2xl font-black font-headline text-on-surface">Agregar Nuevo Proveedor</h3>
                <p className="text-on-surface-variant text-sm mt-4 leading-relaxed">
                  Complete el formulario para formalizar la relación con el nuevo proveedor. Una vez registrado, podrá procesar las facturas pendientes y sincronizar los datos con el sistema ERP.
                </p>
                <div className="mt-8 flex items-center gap-3 p-4 bg-tertiary-fixed/30 rounded-lg">
                  <span className="material-symbols-outlined text-tertiary">info</span>
                  <p className="text-xs font-medium text-on-tertiary-fixed-variant">Asegúrese de que el nombre coincida exactamente con la cédula jurídica.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <form className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow border border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Consecutivo Proveedor</label>
                    <input className="w-full bg-slate-50 border border-outline-variant/20 rounded-lg px-3 py-2 text-sm font-bold text-on-surface-variant outline-none cursor-not-allowed" readOnly type="text" value="PROV-8829" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Nombre Legal</label>
                    <input className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Ej: Corporación S.A." type="text" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Alias / Nombre Comercial</label>
                    <input className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Ej: Nombre Fantasía" type="text" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Teléfono</label>
                    <input className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary transition-all outline-none" placeholder="+506 0000-0000" type="tel" />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Correo Electrónico</label>
                    <input className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary transition-all outline-none" placeholder="compras@proveedor.com" type="email" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Categoría</label>
                    <select className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                      <option>Suministros</option>
                      <option>Servicios</option>
                      <option>Inversión</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Impuesto Default</label>
                    <select className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                      <option>IVA 13%</option>
                      <option>IVA 1%</option>
                      <option>Exento</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">País</label>
                    <select className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                      <option>Costa Rica</option>
                      <option>Panamá</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Moneda</label>
                    <select className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                      <option>CRC (Colones)</option>
                      <option>USD (Dólares)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Condición de Pago</label>
                    <select className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                      <option>Contado</option>
                      <option>Crédito 30 días</option>
                      <option>Crédito 60 días</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">Actividad Económica</label>
                    <select className="w-full bg-white border border-outline-variant/40 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                      <option>Venta de Bienes</option>
                      <option>Consultoría</option>
                    </select>
                  </div>
                </div>
                <div className="mt-10 flex justify-end gap-3">
                  <button className="px-6 py-2.5 rounded-lg border border-outline-variant/30 text-sm font-bold text-on-surface-variant hover:bg-slate-50 transition-colors" type="button">Cancelar</button>
                  <button className="px-10 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all" type="submit">Guardar Proveedor</button>
                </div>
              </form>
            </div>
          </section>
        </div>

        <footer className="mt-12 p-10 bg-surface-container-low/50 text-on-surface-variant text-center border-t border-outline-variant/5">
          <p className="text-xs">© 2024 Micromedia Solución - Todos los derechos reservados. Sistema de Gestión Documental Inteligente.</p>
        </footer>
      </main>
    </div>
  );
}

import SideNavBar from "../components/SideNavBar";
import TopAppBar from "../components/TopAppBar";

export default function DocumentDetail() {
  const breadcrumbs = [
    { label: "Inicio", href: "/dashboard" },
    { label: "Recepción de Documentos", href: "/document-reception" },
    { label: "Detalle" },
  ];

  return (
    <div className="flex bg-background min-h-screen font-body text-on-background">
      <SideNavBar />
      <main className="ml-64 flex-1 flex flex-col pb-24 min-h-screen">
        <TopAppBar breadcrumbs={breadcrumbs} />

        <div className="p-10 space-y-8 max-w-7xl mx-auto w-full">
          {/* Document Summary Bento */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl ambient-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <span className="text-primary font-semibold text-xs tracking-wider uppercase">Documento ID</span>
                <h2 className="text-3xl font-black text-on-surface mt-1 tracking-tight font-headline">INV-2024-0892</h2>
                <div className="mt-4 flex items-center gap-2">
                  <span className="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Procesado</span>
                  <span className="text-on-surface-variant text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    24 Oct, 2024
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex flex-col justify-between">
              <div>
                <span className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">Proveedor</span>
                <p className="text-lg font-bold text-on-surface mt-1">TechLogistics S.A.</p>
              </div>
              <p className="text-xs text-on-surface-variant">ID: 3-101-445522</p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-xl ambient-shadow text-white flex flex-col justify-between">
              <div>
                <span className="text-white/70 text-xs font-medium uppercase tracking-wider">Monto Total</span>
                <p className="text-2xl font-black mt-1">$14,250.00</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="material-symbols-outlined text-sm">payments</span>
                USD Currency
              </div>
            </div>
          </section>

          {/* Document Lines Table */}
          <section className="bg-surface-container-lowest rounded-xl ambient-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary">list_alt</span>
                Líneas del Documento
              </h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">
                    <th className="px-6 py-4">Línea</th>
                    <th className="px-6 py-4">Código / Producto</th>
                    <th className="px-6 py-4">ERP / Cabys</th>
                    <th className="px-6 py-4 text-center">Unidad</th>
                    <th className="px-6 py-4 text-center">Cant.</th>
                    <th className="px-6 py-4 text-right">Precio</th>
                    <th className="px-6 py-4 text-right">Imp.</th>
                    <th className="px-6 py-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 text-sm">
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4 text-on-surface-variant font-medium">001</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-on-surface">SRV-CLOUD-01</div>
                      <div className="text-xs text-on-surface-variant">Servicio Cloud Hosting Premium</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs"><span className="font-semibold">ERP:</span> 44021</div>
                      <div className="text-xs"><span className="font-semibold">CBS:</span> 83142000</div>
                    </td>
                    <td className="px-6 py-4 text-center">UN</td>
                    <td className="px-6 py-4 text-center font-semibold">10.00</td>
                    <td className="px-6 py-4 text-right">$1,200.00</td>
                    <td className="px-6 py-4 text-right text-xs text-on-surface-variant">13%</td>
                    <td className="px-6 py-4 text-right font-bold text-primary">$13,560.00</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4 text-on-surface-variant font-medium">002</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-on-surface">LIC-OFFICE-365</div>
                      <div className="text-xs text-on-surface-variant">Licencia Office Corporativo</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs"><span className="font-semibold">ERP:</span> 11209</div>
                      <div className="text-xs"><span className="font-semibold">CBS:</span> 43231513</div>
                    </td>
                    <td className="px-6 py-4 text-center">EA</td>
                    <td className="px-6 py-4 text-center font-semibold">5.00</td>
                    <td className="px-6 py-4 text-right">$120.00</td>
                    <td className="px-6 py-4 text-right text-xs text-on-surface-variant">15%</td>
                    <td className="px-6 py-4 text-right font-bold text-primary">$690.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottom Sections: Expediente & Notas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Expediente Digital */}
            <section className="bg-surface-container-lowest rounded-xl ambient-shadow flex flex-col">
              <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 font-headline">
                  <span className="material-symbols-outlined text-secondary">folder_zip</span>
                  Expediente Digital
                </h3>
                <button className="text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">add_circle</span>
                  AGREGAR ARCHIVO
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 bg-surface-container-low/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Factura_Electrónica_INV-0892.xml</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-semibold">Solo lectura • 24 KB</p>
                    </div>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 bg-surface-container-low/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>picture_as_pdf</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Comprobante_Pago_Original.pdf</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-semibold">Solo lectura • 1.2 MB</p>
                    </div>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined">image</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Foto_Entrega_Material.jpg</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-semibold">Adjunto • 3.5 MB</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                    <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Notas del Auditor */}
            <section className="bg-surface-container-lowest rounded-xl ambient-shadow flex flex-col">
              <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 font-headline">
                  <span className="material-symbols-outlined text-tertiary">history_edu</span>
                  Notas del Auditor
                </h3>
                <button className="text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">sticky_note_2</span>
                  AGREGAR NOTA
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-surface-container-low p-4 rounded-xl border-2 border-dashed border-outline-variant/40">
                  <textarea
                    className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-on-surface-variant/50 outline-none"
                    placeholder="Escriba una nueva nota aquí..."
                    rows={2}
                  ></textarea>
                  <div className="flex justify-end gap-2 mt-2">
                    <button className="text-[10px] font-bold text-on-surface-variant hover:bg-white px-3 py-1 rounded transition-colors uppercase">Cancelar</button>
                    <button className="text-[10px] font-bold bg-primary text-white px-3 py-1 rounded shadow-sm hover:shadow-md transition-all uppercase">Guardar Nota</button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-xs font-bold text-primary">JD</div>
                    <div className="flex-1 bg-surface-container-low/40 p-4 rounded-xl rounded-tl-none relative">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[11px] font-bold text-on-surface-variant">Juan Delgado • <span className="font-normal opacity-70">Hace 2 horas</span></span>
                        <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">edit</span></button>
                          <button className="p-1 text-on-surface-variant hover:text-error"><span className="material-symbols-outlined text-sm">delete</span></button>
                        </div>
                      </div>
                      <p className="text-sm text-on-surface leading-relaxed italic">&quot;Se verificó la unidad del servicio con el departamento de compras. Todo en orden para proceder.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Sticky Footer Actions */}
        <footer className="fixed bottom-0 left-64 right-0 glass-card border-t border-outline-variant/10 px-10 py-4 flex justify-between items-center z-40">
          <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
            <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>info</span>
            Documento listo para integración ERP
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-all">
              <span className="material-symbols-outlined text-lg">link</span>
              Vincular a Producto ERP
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-surface-container-highest text-on-surface font-bold text-sm hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-lg">shopping_cart_checkout</span>
              Asociar a OC
            </button>
            <button className="flex items-center gap-2 px-8 py-2.5 rounded-lg bg-primary text-white font-bold text-sm shadow-[0_8px_16px_-4px_rgba(66,70,219,0.4)] hover:shadow-[0_12px_24px_-4px_rgba(66,70,219,0.5)] hover:-translate-y-0.5 transition-all">
              <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
              Cargar a Cuentas por Pagar
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
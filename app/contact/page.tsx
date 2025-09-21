import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Mettiamoci in contatto per discutere del tuo prossimo progetto.',
  // keywords: '', // Inserisci qui le keyword SEO separate da virgola
}

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contatti</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Pronto per iniziare il tuo prossimo progetto? Mettiamoci in contatto.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Informazioni di contatto</h2>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium text-gray-900">Email:</span>
                  <a 
                    href="mailto:hello@francescoborrelli.dev" 
                    className="sm:ml-2 text-aurora-600 hover:text-aurora-700 break-all"
                  >
                    hello@francescoborrelli.dev
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium text-gray-900">Telefono:</span>
                  <a 
                    href="tel:+393331234567" 
                    className="sm:ml-2 text-aurora-600 hover:text-aurora-700"
                  >
                    +39 333 123 4567
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium text-gray-900">WhatsApp:</span>
                  <a 
                    href="https://wa.me/393331234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="sm:ml-2 text-aurora-600 hover:text-aurora-700"
                  >
                    Invia messaggio
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-900">Orari</h3>
              <p className="text-gray-600">Lun–Ven 17:00–20:00</p>
               <p className="text-gray-600">Sabato 10:00–14:00</p>
            </div>

          {/* <div className="text-sm text-gray-600 p-4 bg-aurora-50 rounded-lg border border-aurora-100">
              <strong className="text-gray-900">Nota:</strong> Sostituisci email/telefono con i tuoi reali modificando questa pagina.
          </div>*/}
          </div>

          {/* Map */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Posizione</h2>
            <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92685.75080105256!2d11.154026554687502!3d43.769562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x5d4863d9b7bf627d!2sFirenze%20FI!5e0!3m2!1sit!2sit!4v1632234567890!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa di Firenze"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
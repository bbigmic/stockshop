import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Masz pytania? Chcesz złożyć zamówienie? Skontaktuj się z nami!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wyślij wiadomość</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="input-field"
                  placeholder="+48 123 456 789"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temat
                </label>
                <select className="input-field">
                  <option>Wybierz temat</option>
                  <option>Zamówienie</option>
                  <option>Pytanie o produkty</option>
                  <option>Reklamacja</option>
                  <option>Współpraca</option>
                  <option>Inne</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wiadomość
                </label>
                <textarea
                  rows={6}
                  className="input-field"
                  placeholder="Opisz szczegółowo swoje pytanie lub zamówienie..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full inline-flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Wyślij wiadomość
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacje kontaktowe</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <p className="text-gray-600">+48 123 456 789</p>
                    <p className="text-sm text-gray-500">Pon-Pt: 8:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">kontakt@stocki.pl</p>
                    <p className="text-sm text-gray-500">Odpowiadamy w ciągu 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adres</h3>
                    <p className="text-gray-600">
                      ul. Przykładowa 123<br />
                      00-000 Warszawa<br />
                      Polska
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Godziny pracy</h3>
                    <p className="text-gray-600">
                      Poniedziałek - Piątek: 8:00 - 18:00<br />
                      Sobota: 9:00 - 14:00<br />
                      Niedziela: Zamknięte
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Często zadawane pytania</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Jak długo trwa dostawa?
                  </h3>
                  <p className="text-gray-600">
                    Standardowa dostawa trwa 2-3 dni robocze. Ekspresowa dostawa (24h) dostępna za dodatkową opłatą.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Czy mogę zwrócić produkt?
                  </h3>
                  <p className="text-gray-600">
                    Tak, masz 14 dni na zwrot produktu w oryginalnym opakowaniu. Zwroty są darmowe.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Jakie są metody płatności?
                  </h3>
                  <p className="text-gray-600">
                    Akceptujemy przelewy bankowe, karty płatnicze oraz płatność za pobraniem.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Czy oferujecie rabaty dla hurtowników?
                  </h3>
                  <p className="text-gray-600">
                    Tak, oferujemy specjalne rabaty dla firm i hurtowników. Skontaktuj się z nami po szczegóły.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Lokalizacja</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Mapa zostanie dodana wkrótce</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 
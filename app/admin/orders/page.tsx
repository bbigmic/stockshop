import React from 'react'
import { 
  Search, 
  Filter, 
  Eye, 
  Truck, 
  CheckCircle,
  Clock,
  AlertCircle,
  Package
} from 'lucide-react'

export default function OrdersPage() {
  const orders = [
    {
      id: '#12345',
      customer: 'Jan Kowalski',
      email: 'jan.kowalski@example.com',
      phone: '+48 123 456 789',
      product: 'Paleta Zabawek Edukacyjnych',
      amount: 2999.99,
      status: 'pending',
      date: '2025-01-15',
      paymentMethod: 'Przelew',
      shippingAddress: 'ul. Przykładowa 1, 00-000 Warszawa',
    },
    {
      id: '#12344',
      customer: 'Anna Nowak',
      email: 'anna.nowak@example.com',
      phone: '+48 987 654 321',
      product: 'Paleta Zabawek Konstrukcyjnych',
      amount: 2499.99,
      status: 'confirmed',
      date: '2025-01-15',
      paymentMethod: 'Karta',
      shippingAddress: 'ul. Testowa 5, 30-000 Kraków',
    },
    {
      id: '#12343',
      customer: 'Piotr Wiśniewski',
      email: 'piotr.wisniewski@example.com',
      phone: '+48 555 123 456',
      product: 'Paleta Zabawek Plastycznych',
      amount: 1999.99,
      status: 'shipped',
      date: '2025-01-14',
      paymentMethod: 'Przelew',
      shippingAddress: 'ul. Próbna 10, 50-000 Wrocław',
    },
    {
      id: '#12342',
      customer: 'Maria Wójcik',
      email: 'maria.wojcik@example.com',
      phone: '+48 777 888 999',
      product: 'Paleta Zabawek Sportowych',
      amount: 3499.99,
      status: 'delivered',
      date: '2025-01-14',
      paymentMethod: 'Karta',
      shippingAddress: 'ul. Sprawdzona 15, 80-000 Gdańsk',
    },
    {
      id: '#12341',
      customer: 'Tomasz Lewandowski',
      email: 'tomasz.lewandowski@example.com',
      phone: '+48 111 222 333',
      product: 'Paleta Zabawek Muzycznych',
      amount: 1799.99,
      status: 'cancelled',
      date: '2025-01-13',
      paymentMethod: 'Przelew',
      shippingAddress: 'ul. Anulowana 20, 40-000 Katowice',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'confirmed':
        return 'bg-blue-100 text-blue-800'
      case 'shipped':
        return 'bg-purple-100 text-purple-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Oczekujące'
      case 'confirmed':
        return 'Potwierdzone'
      case 'shipped':
        return 'Wysłane'
      case 'delivered':
        return 'Dostarczone'
      case 'cancelled':
        return 'Anulowane'
      default:
        return status
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />
      case 'shipped':
        return <Truck className="w-4 h-4" />
      case 'delivered':
        return <Package className="w-4 h-4" />
      case 'cancelled':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Zamówienia</h1>
          <p className="text-gray-600 mt-2">Zarządzaj zamówieniami klientów</p>
        </div>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <button className="btn-secondary inline-flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Eksportuj
          </button>
          <button className="btn-primary inline-flex items-center">
            <Truck className="w-5 h-5 mr-2" />
            Masowe wysyłki
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">156</div>
          <div className="text-sm text-gray-600">Wszystkie zamówienia</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">23</div>
          <div className="text-sm text-gray-600">Oczekujące</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">45</div>
          <div className="text-sm text-gray-600">Potwierdzone</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">67</div>
          <div className="text-sm text-gray-600">Wysłane</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-green-600">21</div>
          <div className="text-sm text-gray-600">Dostarczone</div>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj zamówień..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <select className="input-field">
            <option>Wszystkie statusy</option>
            <option>Oczekujące</option>
            <option>Potwierdzone</option>
            <option>Wysłane</option>
            <option>Dostarczone</option>
            <option>Anulowane</option>
          </select>
          
          <select className="input-field">
            <option>Wszystkie metody płatności</option>
            <option>Przelew</option>
            <option>Karta</option>
            <option>Pobranie</option>
          </select>
          
          <input
            type="date"
            className="input-field"
            placeholder="Data od"
          />
          
          <button className="btn-secondary inline-flex items-center justify-center">
            <Filter className="w-5 h-5 mr-2" />
            Filtruj
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="card">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Lista zamówień ({orders.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID zamówienia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Klient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produkt
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kwota
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Akcje
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-500">{order.paymentMethod}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                    <div className="text-sm text-gray-500">{order.email}</div>
                    <div className="text-sm text-gray-500">{order.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.product}</div>
                    <div className="text-sm text-gray-500">{order.shippingAddress}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.amount.toLocaleString('pl-PL')} zł
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-900" title="Zobacz szczegóły">
                        <Eye className="w-4 h-4" />
                      </button>
                      {order.status === 'pending' && (
                        <button className="text-green-600 hover:text-green-900" title="Potwierdź">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      )}
                      {order.status === 'confirmed' && (
                        <button className="text-purple-600 hover:text-purple-900" title="Oznacz jako wysłane">
                          <Truck className="w-4 h-4" />
                        </button>
                      )}
                      {order.status === 'shipped' && (
                        <button className="text-green-600 hover:text-green-900" title="Oznacz jako dostarczone">
                          <Package className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Pokazano <span className="font-medium">1</span> do <span className="font-medium">10</span> z{' '}
          <span className="font-medium">156</span> wyników
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary px-3 py-2 text-sm">
            Poprzednia
          </button>
          <button className="bg-primary-600 text-white px-3 py-2 rounded-lg text-sm">
            1
          </button>
          <button className="btn-secondary px-3 py-2 text-sm">
            2
          </button>
          <button className="btn-secondary px-3 py-2 text-sm">
            3
          </button>
          <button className="btn-secondary px-3 py-2 text-sm">
            4
          </button>
          <button className="btn-secondary px-3 py-2 text-sm">
            5
          </button>
          <button className="btn-secondary px-3 py-2 text-sm">
            Następna
          </button>
        </div>
      </div>
    </div>
  )
} 
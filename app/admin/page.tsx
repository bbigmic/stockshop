import React from 'react'
import { 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Eye,
  DollarSign,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      name: 'Wszystkie produkty',
      value: '1,234',
      change: '+12%',
      changeType: 'increase',
      icon: Package,
    },
    {
      name: 'Aktywni użytkownicy',
      value: '567',
      change: '+8%',
      changeType: 'increase',
      icon: Users,
    },
    {
      name: 'Zamówienia dziś',
      value: '89',
      change: '+23%',
      changeType: 'increase',
      icon: ShoppingCart,
    },
    {
      name: 'Przychód miesięczny',
      value: '234,567 zł',
      change: '+15%',
      changeType: 'increase',
      icon: DollarSign,
    },
  ]

  const recentOrders = [
    {
      id: '#12345',
      customer: 'Jan Kowalski',
      product: 'Paleta Zabawek Edukacyjnych',
      amount: '2,999.99 zł',
      status: 'pending',
      date: '2025-01-15',
    },
    {
      id: '#12344',
      customer: 'Anna Nowak',
      product: 'Paleta Zabawek Konstrukcyjnych',
      amount: '2,499.99 zł',
      status: 'confirmed',
      date: '2025-01-15',
    },
    {
      id: '#12343',
      customer: 'Piotr Wiśniewski',
      product: 'Paleta Zabawek Plastycznych',
      amount: '1,999.99 zł',
      status: 'shipped',
      date: '2025-01-14',
    },
    {
      id: '#12342',
      customer: 'Maria Wójcik',
      product: 'Paleta Zabawek Sportowych',
      amount: '3,499.99 zł',
      status: 'delivered',
      date: '2025-01-14',
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
      default:
        return status
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Przegląd działalności platformy</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-primary-100 rounded-lg">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              {stat.changeType === 'increase' ? (
                <ArrowUp className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ml-1 ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs ostatni miesiąc</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="card">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Ostatnie zamówienia</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
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
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-primary-600 hover:text-primary-900">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Dodaj produkt</h3>
            <Package className="w-6 h-6 text-primary-600" />
          </div>
          <p className="text-gray-600 mb-4">Dodaj nowy produkt do katalogu</p>
          <button className="btn-primary w-full">Dodaj produkt</button>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Zarządzaj użytkownikami</h3>
            <Users className="w-6 h-6 text-primary-600" />
          </div>
          <p className="text-gray-600 mb-4">Przeglądaj i zarządzaj użytkownikami</p>
          <button className="btn-primary w-full">Zarządzaj</button>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Zobacz statystyki</h3>
            <TrendingUp className="w-6 h-6 text-primary-600" />
          </div>
          <p className="text-gray-600 mb-4">Szczegółowe analizy sprzedaży</p>
          <button className="btn-primary w-full">Zobacz raporty</button>
        </div>
      </div>
    </div>
  )
} 
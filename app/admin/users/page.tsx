import React from 'react'
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Mail,
  Phone,
  UserCheck,
  UserX
} from 'lucide-react'

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: 'Jan Kowalski',
      email: 'jan.kowalski@example.com',
      phone: '+48 123 456 789',
      role: 'user',
      status: 'active',
      orders: 12,
      totalSpent: 15499.99,
      joinedAt: '2024-12-01',
    },
    {
      id: 2,
      name: 'Anna Nowak',
      email: 'anna.nowak@example.com',
      phone: '+48 987 654 321',
      role: 'admin',
      status: 'active',
      orders: 0,
      totalSpent: 0,
      joinedAt: '2024-11-15',
    },
    {
      id: 3,
      name: 'Piotr Wiśniewski',
      email: 'piotr.wisniewski@example.com',
      phone: '+48 555 123 456',
      role: 'user',
      status: 'inactive',
      orders: 3,
      totalSpent: 7499.99,
      joinedAt: '2024-10-20',
    },
    {
      id: 4,
      name: 'Maria Wójcik',
      email: 'maria.wojcik@example.com',
      phone: '+48 777 888 999',
      role: 'user',
      status: 'active',
      orders: 8,
      totalSpent: 19999.99,
      joinedAt: '2024-09-10',
    },
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800'
      case 'user':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrator'
      case 'user':
        return 'Użytkownik'
      default:
        return role
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Użytkownicy</h1>
          <p className="text-gray-600 mt-2">Zarządzaj użytkownikami platformy</p>
        </div>
        <button className="btn-primary mt-4 sm:mt-0 inline-flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Dodaj użytkownika
        </button>
      </div>

      {/* Filters */}
      <div className="card p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj użytkowników..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <select className="input-field">
            <option>Wszystkie role</option>
            <option>Administrator</option>
            <option>Użytkownik</option>
          </select>
          
          <select className="input-field">
            <option>Wszystkie statusy</option>
            <option>Aktywni</option>
            <option>Nieaktywni</option>
          </select>
          
          <button className="btn-secondary inline-flex items-center justify-center">
            <Filter className="w-5 h-5 mr-2" />
            Filtruj
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="card">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Lista użytkowników ({users.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Użytkownik
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kontakt
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rola
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Zamówienia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data dołączenia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Akcje
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {user.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-900">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        {user.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                      {getRoleText(user.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                      {user.status === 'active' ? 'Aktywny' : 'Nieaktywny'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div>{user.orders} zamówień</div>
                      <div className="text-gray-500">
                        {user.totalSpent.toLocaleString('pl-PL')} zł
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.joinedAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-900" title="Zobacz">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900" title="Edytuj">
                        <Edit className="w-4 h-4" />
                      </button>
                      {user.status === 'active' ? (
                        <button className="text-yellow-600 hover:text-yellow-900" title="Dezaktywuj">
                          <UserX className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900" title="Aktywuj">
                          <UserCheck className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-900" title="Usuń">
                        <Trash2 className="w-4 h-4" />
                      </button>
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
          <span className="font-medium">45</span> wyników
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
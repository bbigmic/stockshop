import React from 'react'
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  MoreHorizontal
} from 'lucide-react'

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Paleta Zabawek Edukacyjnych',
      category: 'Edukacyjne',
      price: 2999.99,
      stock: 15,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100&h=100&fit=crop',
      createdAt: '2025-01-10',
    },
    {
      id: 2,
      name: 'Paleta Zabawek Konstrukcyjnych',
      category: 'Konstrukcyjne',
      price: 2499.99,
      stock: 8,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=100&h=100&fit=crop',
      createdAt: '2025-01-08',
    },
    {
      id: 3,
      name: 'Paleta Zabawek Plastycznych',
      category: 'Plastyczne',
      price: 1999.99,
      stock: 22,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop',
      createdAt: '2025-01-05',
    },
    {
      id: 4,
      name: 'Paleta Zabawek Sportowych',
      category: 'Sportowe',
      price: 3499.99,
      stock: 5,
      status: 'inactive',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
      createdAt: '2025-01-03',
    },
  ]

  const categories = [
    'Wszystkie',
    'Edukacyjne',
    'Konstrukcyjne',
    'Plastyczne',
    'Sportowe',
    'Muzyczne',
    'Puzzle'
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Produkty</h1>
          <p className="text-gray-600 mt-2">Zarządzaj produktami w katalogu</p>
        </div>
        <button className="btn-primary mt-4 sm:mt-0 inline-flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Dodaj produkt
        </button>
      </div>

      {/* Filters */}
      <div className="card p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj produktów..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <select className="input-field">
            <option>Wszystkie kategorie</option>
            {categories.slice(1).map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          
          <select className="input-field">
            <option>Wszystkie statusy</option>
            <option>Aktywne</option>
            <option>Nieaktywne</option>
          </select>
          
          <button className="btn-secondary inline-flex items-center justify-center">
            <Filter className="w-5 h-5 mr-2" />
            Filtruj
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="card">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Lista produktów ({products.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produkt
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cena
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stan magazynowy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data dodania
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Akcje
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-lg object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {product.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.price.toLocaleString('pl-PL')} zł
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.stock > 10 
                        ? 'bg-green-100 text-green-800' 
                        : product.stock > 0 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stock} szt.
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status === 'active' ? 'Aktywny' : 'Nieaktywny'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-900" title="Zobacz">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900" title="Edytuj">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900" title="Usuń">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900" title="Więcej">
                        <MoreHorizontal className="w-4 h-4" />
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
          <span className="font-medium">97</span> wyników
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
            Następna
          </button>
        </div>
      </div>
    </div>
  )
} 
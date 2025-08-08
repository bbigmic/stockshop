import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { Star, Filter, Grid, List } from 'lucide-react'

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Paleta Zabawek Edukacyjnych',
      price: 2999.99,
      originalPrice: 4999.99,
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 127,
      category: 'Edukacyjne',
      stock: 15,
      isNew: true,
    },
    {
      id: 2,
      name: 'Paleta Zabawek Konstrukcyjnych',
      price: 2499.99,
      originalPrice: 3999.99,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 89,
      category: 'Konstrukcyjne',
      stock: 8,
      isNew: false,
    },
    {
      id: 3,
      name: 'Paleta Zabawek Plastycznych',
      price: 1999.99,
      originalPrice: 3499.99,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 156,
      category: 'Plastyczne',
      stock: 22,
      isNew: false,
    },
    {
      id: 4,
      name: 'Paleta Zabawek Sportowych',
      price: 3499.99,
      originalPrice: 5499.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 203,
      category: 'Sportowe',
      stock: 5,
      isNew: true,
    },
    {
      id: 5,
      name: 'Paleta Zabawek Muzycznych',
      price: 1799.99,
      originalPrice: 2999.99,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      rating: 4.5,
      reviews: 98,
      category: 'Muzyczne',
      stock: 12,
      isNew: false,
    },
    {
      id: 6,
      name: 'Paleta Zabawek Puzzle',
      price: 1599.99,
      originalPrice: 2499.99,
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
      rating: 4.4,
      reviews: 76,
      category: 'Puzzle',
      stock: 18,
      isNew: false,
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Produkty</h1>
          <p className="text-gray-600">Znajdź idealne palety zabawek dla swojego biznesu</p>
        </div>

        {/* Filters */}
        <div className="card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Szukaj produktów..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select className="input-field">
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            
            <select className="input-field">
              <option>Sortuj według</option>
              <option>Cena: od najniższej</option>
              <option>Cena: od najwyższej</option>
              <option>Ocena: od najwyższej</option>
              <option>Najnowsze</option>
            </select>
            
            <div className="flex space-x-2">
              <button className="btn-secondary p-2">
                <Grid className="w-5 h-5" />
              </button>
              <button className="btn-secondary p-2">
                <List className="w-5 h-5" />
              </button>
              <button className="btn-primary inline-flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filtruj
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    NOWY
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {product.category}
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {product.stock} szt. dostępnych
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">
                      {product.price.toLocaleString('pl-PL')} zł
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice.toLocaleString('pl-PL')} zł
                    </span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                </div>
                <button className="btn-primary w-full">
                  Dodaj do koszyka
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-12">
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

      <Footer />
    </div>
  )
} 
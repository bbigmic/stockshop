import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Paleta Zabawek Edukacyjnych',
      price: 2999.99,
      originalPrice: 4999.99,
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 127,
      category: 'Edukacyjne'
    },
    {
      id: 2,
      name: 'Paleta Zabawek Konstrukcyjnych',
      price: 2499.99,
      originalPrice: 3999.99,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 89,
      category: 'Konstrukcyjne'
    },
    {
      id: 3,
      name: 'Paleta Zabawek Plastycznych',
      price: 1999.99,
      originalPrice: 3499.99,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 156,
      category: 'Plastyczne'
    },
    {
      id: 4,
      name: 'Paleta Zabawek Sportowych',
      price: 3499.99,
      originalPrice: 5499.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 203,
      category: 'Sportowe'
    }
  ]

  const categories = [
    { name: 'Edukacyjne', icon: '🎓', count: 45 },
    { name: 'Konstrukcyjne', icon: '🔧', count: 32 },
    { name: 'Plastyczne', icon: '🎨', count: 28 },
    { name: 'Sportowe', icon: '⚽', count: 19 },
    { name: 'Muzyczne', icon: '🎵', count: 15 },
    { name: 'Puzzle', icon: '🧩', count: 23 }
  ]

  const benefits = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Szybka dostawa',
      description: 'Dostawa w ciągu 24-48h w całej Polsce'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Gwarancja jakości',
      description: 'Wszystkie produkty z gwarancją producenta'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Obsługa 24/7',
      description: 'Wsparcie techniczne dostępne całą dobę'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Najlepsze <span className="text-yellow-300">palety zabawek</span> w Polsce
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl">
                Oszczędź nawet 70% na stockach magazynowych. 
                Tysiące zabawek w paletach - idealne dla przedszkoli, szkół i hurtowników.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                  Zobacz produkty
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                  Dowiedz się więcej
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop" 
                  alt="Paleta zabawek"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-400 rounded-full opacity-20 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary-100 text-primary-600 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kategorie produktów
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wybierz kategorię, która Cię interesuje i znajdź idealne palety zabawek
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                href={`/products?category=${category.name}`}
                className="card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} produktów</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Polecane palety
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Najpopularniejsze i najlepiej oceniane palety zabawek
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    {product.category}
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
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">
                        {product.price.toLocaleString('pl-PL')} zł
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.originalPrice.toLocaleString('pl-PL')} zł
                      </span>
                    </div>
                    <Link 
                      href={`/products/${product.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Zobacz
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              Zobacz wszystkie produkty
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na oszczędności?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dołącz do tysięcy zadowolonych klientów i kupuj palety zabawek w najlepszych cenach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-gray-100">
              Załóż konto
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4 border-white hover:bg-white hover:text-primary-600">
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
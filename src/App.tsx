"use client";

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollingBanner from './components/ScrollingBanner'
import Mission from './components/Mission'
import NewArrivals from './components/NewArrivals'
import ColorSection from './components/ColorSection'
import Footer from './components/Footer'
import ProductPage from './components/ProductPage'

export interface Product {
  id: number
  name: string
  price: string
  image: string
  badge?: string
  description?: string
  sizes?: string[]
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <ProductPage product={selectedProduct} onBack={handleBackToHome} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ScrollingBanner text="SHOP OUR NEW COLLECTION" />
      <Mission />
      <NewArrivals onProductClick={handleProductClick} />
      <ScrollingBanner text="SHOP OUR NEW COLLECTION" />
      <ColorSection />
      <Footer />
    </div>
  )
}

export default App

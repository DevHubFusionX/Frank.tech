import { useState } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BlogSearch({ articles, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = ['All', 'Development', 'Security', 'AI & Tech', 'Tutorial', 'Best Practices']

  const handleSearch = (term) => {
    setSearchTerm(term)
    filterArticles(term, selectedCategory)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    filterArticles(searchTerm, category)
    setIsFilterOpen(false)
  }

  const filterArticles = (term, category) => {
    let filtered = articles

    if (term) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(term.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(term.toLowerCase())
      )
    }

    if (category !== 'All') {
      filtered = filtered.filter(article => article.category === category)
    }

    onFilter(filtered)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('All')
    onFilter(articles)
  }

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/* Filter Button */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            {selectedCategory}
          </button>

          {/* Filter Dropdown */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[200px]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      selectedCategory === category ? 'bg-gray-100 font-medium' : ''
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Clear Filters */}
        {(searchTerm || selectedCategory !== 'All') && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
            Clear
          </button>
        )}
      </div>

      {/* Active Filters */}
      {(searchTerm || selectedCategory !== 'All') && (
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-gray-600">Active filters:</span>
          {searchTerm && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Search: "{searchTerm}"
            </span>
          )}
          {selectedCategory !== 'All' && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Category: {selectedCategory}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
import { motion } from 'framer-motion'
import { Github, GitCommit, Star, GitBranch } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function GitHubContributions() {
  const [contributions, setContributions] = useState([])

  // Generate mock contribution data (replace with real GitHub API call)
  useEffect(() => {
    const generateContributions = () => {
      const data = []
      const today = new Date()
      
      for (let i = 364; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(date.getDate() - i)
        
        // Generate random contribution count (0-4 for intensity levels)
        const count = Math.floor(Math.random() * 5)
        data.push({
          date: date.toISOString().split('T')[0],
          count,
          level: count === 0 ? 0 : count === 1 ? 1 : count <= 2 ? 2 : count <= 3 ? 3 : 4
        })
      }
      return data
    }
    
    setContributions(generateContributions())
  }, [])

  const stats = {
    totalContributions: contributions.reduce((sum, day) => sum + day.count, 0),
    currentStreak: 12,
    longestStreak: 28,
    repositories: 15
  }

  const getIntensityColor = (level) => {
    switch (level) {
      case 0: return 'bg-gray-100'
      case 1: return 'bg-green-200'
      case 2: return 'bg-green-300'
      case 3: return 'bg-green-500'
      case 4: return 'bg-green-700'
      default: return 'bg-gray-100'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">GitHub Activity</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My coding journey and contribution patterns over the past year
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            className="bg-gray-50 rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GitCommit className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-black">{stats.totalContributions}</div>
            <div className="text-sm text-gray-600">Total Contributions</div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-black">{stats.currentStreak}</div>
            <div className="text-sm text-gray-600">Current Streak</div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <GitBranch className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-black">{stats.longestStreak}</div>
            <div className="text-sm text-gray-600">Longest Streak</div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Github className="w-8 h-8 text-gray-700 mx-auto mb-3" />
            <div className="text-2xl font-bold text-black">{stats.repositories}</div>
            <div className="text-sm text-gray-600">Repositories</div>
          </motion.div>
        </div>

        {/* Contribution Graph */}
        <motion.div
          className="bg-white border border-gray-200 rounded-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-black">Contribution Activity</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Contribution Grid */}
          <div className="overflow-x-auto">
            <div className="grid grid-cols-53 gap-1 min-w-[800px]">
              {contributions.map((day, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getIntensityColor(day.level)} hover:ring-2 hover:ring-gray-400 transition-all cursor-pointer`}
                  title={`${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://github.com/DevHubFusionx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
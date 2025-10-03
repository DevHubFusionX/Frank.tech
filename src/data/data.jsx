import { 
  AccountManagement, 
  DevStackGenerator, 
  DineroCrocEcommerce, 
  LogisticWebsite, 

  PellerWebsite, 
  PersonalCryptoVendor, 
  PersonalEcommerce, 
  PersonalWebsiteEcommerce, 
  ShankWebsite, 
  SolarCompanyWebsite, 
  TvflixMovie 
} from '../assets/image'

const ProjectLinks = {
  'Account Management System': 'https://admin-dashboard-sigma-sable-16.vercel.app/',
  'DevStack Generator': 'https://dev-stack-gamma.vercel.app/',
  'Dinero Croc Ecommerce': 'https://dinero-crocs.vercel.app/',
  'Logistic Website': 'https://logistics-khaki-three.vercel.app/',
  
  'Peller Corporate Website': 'https://peller-sigma.vercel.app/',
  'Personal Crypto Vendor': 'https://chris-jdr.vercel.app/',
  'Personal Ecommerce Store': 'https://auduo.vercel.app/',
  'Personal Website Ecommerce': 'https://moderate-textile.vercel.app/',
  'Shank Business Website': 'https://shank-sepia.vercel.app/',
  'Solar Company Website': 'https://drmcxl-solar.vercel.app/',
  'Tvflix Movie Platform': 'https://fullstack-movie-app-master.vercel.app/',
}
const ProjectGithubLinks = {
  'Account Management System': '#',
  'DevStack Generator': '#',
  'Dinero Croc Ecommerce': '#',
  'Logistic Website': '#',
  'Peller Corporate Website': '#',
  'Personal Crypto Vendor': '#',
  'Personal Ecommerce Store': '#',
  'Personal Website Ecommerce': '#',
  'Shank Business Website': '#',
  'Solar Company Website': '#',
  'Tvflix Movie Platform': '#',
}

export const projects = [
  {
    id: 1,
    title: 'Account Management System',
    description: 'User account management platform with authentication, profile management, and security features',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    image: AccountManagement,
    category: 'Full-Stack',
    liveUrl: ProjectLinks['Account Management System'],
    githubUrl: ProjectGithubLinks['Account Management System']
  },
  {
    id: 2,
    title: 'DevStack Generator',
    description: 'Development stack generator tool for creating project boilerplates and configurations',
    tech: ['React', 'Node.js', 'CLI Tools'],
    image: DevStackGenerator,
    category: 'Full-Stack',
    liveUrl: ProjectLinks['DevStack Generator'],
    githubUrl: ProjectGithubLinks['DevStack Generator']
  },
  {
    id: 3,
    title: 'Dinero Croc Ecommerce',
    description: 'Full-featured e-commerce platform with payment integration and inventory management',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    image: DineroCrocEcommerce,
    category: 'E-commerce',
    liveUrl: ProjectLinks['Dinero Croc Ecommerce'],
    githubUrl: ProjectGithubLinks['Dinero Croc Ecommerce']
  },
  {
    id: 4,
    title: 'Logistic Website',
    description: 'Logistics and shipping company website with tracking and service management',
    tech: ['React', 'Tailwind CSS', 'API Integration'],
    image: LogisticWebsite,
    category: 'Frontend',
    liveUrl: ProjectLinks['Logistic Website'],
    githubUrl: ProjectGithubLinks['Logistic Website']
  },
 
  {
    id: 6,
    title: 'Peller Corporate Website',
    description: 'Modern corporate website with responsive design and optimized user experience',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: PellerWebsite,
    category: 'Frontend',
    liveUrl: ProjectLinks['Peller Corporate Website'],
    githubUrl: ProjectGithubLinks['Peller Corporate Website']
    
  },
  {
    id: 7,
    title: 'Personal Crypto Vendor',
    description: 'Cryptocurrency trading platform with real-time prices and portfolio management',
    tech: ['React', 'Crypto APIs', 'Chart.js'],
    image: PersonalCryptoVendor,
    category: 'Frontend',
    liveUrl: ProjectLinks['Personal Crypto Vendor'],
    githubUrl: ProjectGithubLinks['Personal Crypto Vendor']
    
  },
  {
    id: 8,
    title: 'Personal Ecommerce Store',
    description: 'Personal e-commerce store with product catalog and shopping cart functionality',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: PersonalEcommerce,
    category: 'E-commerce',
    liveUrl: ProjectLinks['Personal Ecommerce Store'],
    githubUrl: ProjectGithubLinks['Personal Ecommerce Store']
    
  },
  {
    id: 9,
    title: 'Personal Website Ecommerce',
    description: 'Personal portfolio website with integrated e-commerce functionality',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    image: PersonalWebsiteEcommerce,
    category: 'E-commerce',
    liveUrl: ProjectLinks['Personal Website Ecommerce'],
    githubUrl: ProjectGithubLinks['Personal Website Ecommerce']
  },
  {
    id: 10,
    title: 'Shank Business Website',
    description: 'Professional business website with modern design and seamless navigation',
    tech: ['React', 'CSS3', 'JavaScript'],
    image: ShankWebsite,
    category: 'Frontend',
    liveUrl: ProjectLinks['Shank Business Website'],
    githubUrl: ProjectGithubLinks['Shank Business Website']
    
  },
  {
    id: 11,
    title: 'Solar Company Website',
    description: 'Solar energy company website with service showcase and consultation booking',
    tech: ['React', 'Tailwind CSS', 'Contact Forms'],
    image: SolarCompanyWebsite,
    category: 'Frontend',
    liveUrl: ProjectLinks['Solar Company Website'],
    githubUrl: ProjectGithubLinks['Solar Company Website']
  },
  {
    id: 12,
    title: 'Tvflix Movie Platform',
    description: 'Netflix-style movie streaming platform with user accounts and watchlists',
    tech: ['React', 'Node.js', 'Video APIs', 'MongoDB'],
    image: TvflixMovie,
    category: 'Full-Stack',
    liveUrl: ProjectLinks['Tvflix Movie Platform'],
    githubUrl: ProjectGithubLinks['Tvflix Movie Platform']
  }
]

export const categories = ['All', 'Full-Stack', 'Frontend', 'E-commerce']

export const caseStudies = {
  'Account Management System': {
    overview: 'User account management platform with authentication, profile management, and security features.',
    challenge: 'Building secure authentication system with role-based access and profile management.',
    solution: 'Implemented JWT authentication, MongoDB for user data, and React for responsive UI.',
    results: ['Secure user authentication', 'Efficient profile management', 'Role-based access control'],
    timeline: '4 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Express.js'],
    features: ['User registration/login', 'Profile management', 'Security features', 'Role-based access', 'Password reset', 'Account verification'],
    screenshots: [{ title: 'Login Page', color: 'bg-gradient-to-br from-blue-500 to-purple-600' }, { title: 'User Dashboard', color: 'bg-gradient-to-br from-green-500 to-teal-600' }, { title: 'Profile Settings', color: 'bg-gradient-to-br from-orange-500 to-red-600' }]
  },
  'DevStack Generator': {
    overview: 'Development stack generator tool for creating project boilerplates and configurations.',
    challenge: 'Creating a tool that generates customized development environments and project structures.',
    solution: 'Built CLI tool with React frontend for configuration and Node.js backend for file generation.',
    results: ['Faster project setup', 'Standardized configurations', 'Developer productivity boost'],
    timeline: '5 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Node.js', 'CLI Tools', 'File System APIs'],
    features: ['Project template generation', 'Custom configurations', 'Multiple tech stacks', 'CLI interface', 'File structure creation', 'Dependency management'],
    screenshots: [{ title: 'Generator Interface', color: 'bg-gradient-to-br from-purple-500 to-pink-600' }, { title: 'Configuration Panel', color: 'bg-gradient-to-br from-blue-500 to-cyan-600' }, { title: 'Generated Project', color: 'bg-gradient-to-br from-green-500 to-emerald-600' }]
  },
  'Dinero Croc Ecommerce': {
    overview: 'Full-featured e-commerce platform with payment integration and inventory management.',
    challenge: 'Building complete e-commerce solution with secure payments and inventory tracking.',
    solution: 'Developed full-stack application with Stripe integration and real-time inventory management.',
    results: ['Secure payment processing', 'Efficient inventory management', 'Enhanced user experience'],
    timeline: '8 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Node.js', 'Stripe', 'MongoDB', 'Express.js'],
    features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Inventory management', 'Order tracking', 'Admin dashboard'],
    screenshots: [{ title: 'Product Catalog', color: 'bg-gradient-to-br from-indigo-500 to-purple-600' }, { title: 'Shopping Cart', color: 'bg-gradient-to-br from-teal-500 to-green-600' }, { title: 'Admin Panel', color: 'bg-gradient-to-br from-orange-500 to-yellow-600' }]
  },
  'Logistic Website': {
    overview: 'Logistics and shipping company website with tracking and service management.',
    challenge: 'Creating professional logistics website with tracking integration and service showcase.',
    solution: 'Built responsive website with API integration for tracking and modern design principles.',
    results: ['Professional web presence', 'Integrated tracking system', 'Improved customer engagement'],
    timeline: '3 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
    features: ['Service showcase', 'Package tracking', 'Contact forms', 'Responsive design', 'API integration', 'Modern UI'],
    screenshots: [{ title: 'Homepage', color: 'bg-gradient-to-br from-gray-500 to-blue-600' }, { title: 'Tracking Page', color: 'bg-gradient-to-br from-purple-500 to-indigo-600' }, { title: 'Services', color: 'bg-gradient-to-br from-teal-500 to-green-600' }]
  },
  
  'Peller Corporate Website': {
    overview: 'Modern corporate website with responsive design and optimized user experience.',
    challenge: 'Creating professional web presence that represents the brand while ensuring optimal performance.',
    solution: 'Built responsive website with modern design principles, optimized for speed and SEO.',
    results: ['50% improvement in page load speed', 'Enhanced brand visibility', 'Mobile-first responsive design'],
    timeline: '4 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    features: ['Modern design', 'Fully responsive', 'Smooth animations', 'SEO optimized', 'Fast loading', 'Contact integration'],
    screenshots: [{ title: 'Homepage Hero', color: 'bg-gradient-to-br from-indigo-500 to-purple-600' }, { title: 'Services Section', color: 'bg-gradient-to-br from-teal-500 to-green-600' }, { title: 'Contact Page', color: 'bg-gradient-to-br from-orange-500 to-yellow-600' }]
  },
  'Personal Crypto Vendor': {
    overview: 'Cryptocurrency trading platform with real-time prices and portfolio management.',
    challenge: 'Building crypto trading interface with real-time data and portfolio tracking.',
    solution: 'Integrated crypto APIs for real-time prices with Chart.js for data visualization.',
    results: ['Real-time price updates', 'Portfolio tracking', 'User-friendly interface'],
    timeline: '6 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Crypto APIs', 'Chart.js', 'WebSocket'],
    features: ['Real-time prices', 'Portfolio management', 'Trading interface', 'Price charts', 'Watchlist', 'Market analysis'],
    screenshots: [{ title: 'Trading Dashboard', color: 'bg-gradient-to-br from-yellow-500 to-orange-600' }, { title: 'Portfolio View', color: 'bg-gradient-to-br from-green-500 to-teal-600' }, { title: 'Price Charts', color: 'bg-gradient-to-br from-blue-500 to-purple-600' }]
  },
  'Personal Ecommerce Store': {
    overview: 'Personal e-commerce store with product catalog and shopping cart functionality.',
    challenge: 'Creating personal e-commerce platform with complete shopping experience.',
    solution: 'Built full-stack e-commerce with React frontend and Node.js backend with payment integration.',
    results: ['Complete shopping experience', 'Secure payments', 'Inventory management'],
    timeline: '7 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Express.js'],
    features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Order management', 'User accounts', 'Admin panel'],
    screenshots: [{ title: 'Store Front', color: 'bg-gradient-to-br from-pink-500 to-red-600' }, { title: 'Product Page', color: 'bg-gradient-to-br from-purple-500 to-indigo-600' }, { title: 'Checkout', color: 'bg-gradient-to-br from-green-500 to-blue-600' }]
  },
  'Personal Website Ecommerce': {
    overview: 'Personal portfolio website with integrated e-commerce functionality.',
    challenge: 'Combining portfolio showcase with e-commerce capabilities in single platform.',
    solution: 'Built with Next.js for optimal performance, combining portfolio and e-commerce features.',
    results: ['Unified platform', 'Professional presentation', 'E-commerce integration'],
    timeline: '5 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Stripe'],
    features: ['Portfolio showcase', 'E-commerce integration', 'Blog section', 'Contact forms', 'SEO optimization', 'Responsive design'],
    screenshots: [{ title: 'Portfolio Home', color: 'bg-gradient-to-br from-cyan-500 to-blue-600' }, { title: 'Shop Section', color: 'bg-gradient-to-br from-purple-500 to-pink-600' }, { title: 'About Page', color: 'bg-gradient-to-br from-green-500 to-teal-600' }]
  },
  'Shank Business Website': {
    overview: 'Professional business website with modern design and seamless navigation.',
    challenge: 'Balancing visual appeal with functionality while ensuring cross-browser compatibility.',
    solution: 'Developed with React and modern CSS techniques, focusing on user experience.',
    results: ['Improved user engagement', 'Professional brand presence', 'Cross-platform compatibility'],
    timeline: '3 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: ['Clean design', 'Smooth navigation', 'Contact integration', 'Service showcase', 'Mobile optimization', 'Fast loading'],
    screenshots: [{ title: 'Landing Page', color: 'bg-gradient-to-br from-gray-500 to-blue-600' }, { title: 'Services Page', color: 'bg-gradient-to-br from-purple-500 to-indigo-600' }, { title: 'Contact Section', color: 'bg-gradient-to-br from-teal-500 to-green-600' }]
  },
  'Solar Company Website': {
    overview: 'Solar energy company website with service showcase and consultation booking.',
    challenge: 'Creating informative solar energy website with lead generation capabilities.',
    solution: 'Built responsive website with service showcase and integrated contact forms.',
    results: ['Professional web presence', 'Lead generation', 'Service showcase'],
    timeline: '4 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Tailwind CSS', 'Contact Forms', 'Responsive Design'],
    features: ['Service showcase', 'Consultation booking', 'Contact forms', 'Responsive design', 'SEO optimization', 'Modern UI'],
    screenshots: [{ title: 'Homepage', color: 'bg-gradient-to-br from-yellow-500 to-orange-600' }, { title: 'Services', color: 'bg-gradient-to-br from-green-500 to-teal-600' }, { title: 'Contact', color: 'bg-gradient-to-br from-blue-500 to-purple-600' }]
  },
  
  'Tvflix Movie Platform': {
    overview: 'Netflix-style movie streaming platform with user accounts and watchlists.',
    challenge: 'Building streaming platform with user management and video integration.',
    solution: 'Developed full-stack platform with video APIs, user authentication, and responsive design.',
    results: ['Streaming functionality', 'User management', 'Engaging interface'],
    timeline: '10 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Node.js', 'Video APIs', 'MongoDB', 'Express.js'],
    features: ['Video streaming', 'User accounts', 'Watchlists', 'Search functionality', 'Responsive design', 'Admin panel'],
    screenshots: [{ title: 'Home Page', color: 'bg-gradient-to-br from-red-500 to-pink-600' }, { title: 'Movie Player', color: 'bg-gradient-to-br from-blue-500 to-purple-600' }, { title: 'User Dashboard', color: 'bg-gradient-to-br from-green-500 to-teal-600' }]
  }
}
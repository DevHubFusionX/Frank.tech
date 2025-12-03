import {
  DevStackGenerator,
  LogisticWebsite,
  LucisPhotography,
  PersonalCryptoVendor,
  PersonalWebsiteEcommerce,
  SolarCompanyWebsite,
  TvflixMovie,
  // Screenshot Images
  DevStackDashboard,
  DaraHome,
  DaraDashboard,
  DaraTrackPage,
  AboutModerateTextile,
  ModerateTextileServices,
  LucisHome,
  LucisContact,
  SolarHome,
  SolarService,
  SolarContact,
  RemcxlSolarService
} from '../assets/image'

const ProjectLinks = {
  'Logistic Website': 'https://logistics-khaki-three.vercel.app/',
  'LUCIS Photography Booking': 'https://lucis-ph.vercel.app/',
  'Personal Crypto Vendor': 'https://chris-jdr.vercel.app/',
  'Personal Ecommerce Store': 'https://auduo.vercel.app/',
  'Personal Website Ecommerce': 'https://moderate-textile.vercel.app/',
  'Solar Company Website': 'https://dremcxl-solar.vercel.app/',
  'Tvflix Movie Platform': 'https://fullstack-movie-app-master.vercel.app/',
}
const ProjectGithubLinks = {
  'Account Management System': '#',
  'DevStack Generator': '#',
  'Dinero Croc Ecommerce': '#',
  'Logistic Website': '#',
  'LUCIS Photography Booking': '#',
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
    id: 4,
    title: 'Logistic Website',
    description: 'Logistics and shipping company website with tracking and service management',
    tech: ['React', 'Tailwind CSS', 'API Integration'],
    image: LogisticWebsite,
    category: 'Full-Stack',
    liveUrl: ProjectLinks['Logistic Website'],
    githubUrl: ProjectGithubLinks['Logistic Website']
  },
  {
    id: 5,
    title: 'LUCIS Photography Booking',
    description: 'Premium photography booking platform connecting clients with professional photographers',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'REST API'],
    image: LucisPhotography,
    category: 'Full-Stack',
    liveUrl: ProjectLinks['LUCIS Photography Booking'],
    githubUrl: ProjectGithubLinks['LUCIS Photography Booking']
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

  'DevStack Generator': {
    overview: 'Development stack generator tool for creating project boilerplates and configurations.',
    challenge: 'Creating a tool that generates customized development environments and project structures.',
    solution: 'Built CLI tool with React frontend for configuration and Node.js backend for file generation.',
    results: ['Faster project setup', 'Standardized configurations', 'Developer productivity boost'],
    timeline: '5 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Node.js', 'CLI Tools', 'File System APIs'],
    features: ['Project template generation', 'Custom configurations', 'Multiple tech stacks', 'CLI interface', 'File structure creation', 'Dependency management'],
    screenshots: [
      { title: 'Generator Interface', image: DevStackGenerator },
      { title: 'Configuration Panel', image: DevStackDashboard },
      { title: 'Generated Project', image: DevStackDashboard }
    ]
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
    screenshots: [
      { title: 'Homepage', image: DaraHome },
      { title: 'Tracking Page', image: DaraTrackPage },
      { title: 'Services', image: DaraDashboard }
    ]
  },

  'LUCIS Photography Booking': {
    overview: 'Premium photography booking platform connecting clients with professional photographers.',
    challenge: 'Creating an elegant, user-friendly platform that streamlines the photography booking process while showcasing photographer portfolios professionally.',
    solution: 'Built a full-stack platform with React frontend and Node.js backend, featuring real-time booking, portfolio galleries, and seamless client-photographer communication.',
    results: ['Streamlined booking process', 'Professional portfolio showcase', 'Enhanced client-photographer connection'],
    timeline: '8 weeks',
    team: 'Solo Developer',
    technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'REST API', 'MongoDB'],
    features: ['Photographer portfolios', 'Real-time booking system', 'Client dashboard', 'Payment integration', 'Gallery management', 'Review system'],
    screenshots: [
      { title: 'Homepage', image: LucisHome },
      { title: 'Booking System', image: LucisPhotography },
      { title: 'Contact Page', image: LucisContact }
    ]
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
    screenshots: [
      { title: 'Trading Dashboard', image: PersonalCryptoVendor },
      { title: 'Portfolio View', image: PersonalCryptoVendor },
      { title: 'Price Charts', image: PersonalCryptoVendor }
    ]
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
    screenshots: [
      { title: 'Portfolio Home', image: PersonalWebsiteEcommerce },
      { title: 'Shop Section', image: ModerateTextileServices },
      { title: 'About Page', image: AboutModerateTextile }
    ]
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
    screenshots: [
      { title: 'Homepage', image: SolarHome },
      { title: 'Services', image: SolarService },
      { title: 'Contact', image: SolarContact }
    ]
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
    screenshots: [
      { title: 'Home Page', image: TvflixMovie },
      { title: 'Movie Player', image: TvflixMovie },
      { title: 'User Dashboard', image: TvflixMovie }
    ]
  }
}
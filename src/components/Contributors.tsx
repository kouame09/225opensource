
const contributors = [
  {
    id: 1,
    name: 'Prince Kouamé',
    role: 'Sofware Developer',
    avatar: '/pic-prince.jpg',
    contributions: 247
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Backend Engineer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    contributions: 189
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    contributions: 156
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    contributions: 203
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'DevOps Engineer',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
    contributions: 134
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Frontend Developer',
    avatar: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400',
    contributions: 178
  }
];

function Contributors() {
  return (
    <div className="py-16 mb-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Nos contributeurs</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Merci aux talents qui font vivre la communauté tech ivoirienne
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <img
                src={contributor.avatar}
                alt={contributor.name}
                className="relative w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
              />

              {/* Popup tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                {/* Flèche du tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600 dark:border-t-green-500"></div>

                {/* Contenu du tooltip */}
                <div className="bg-green-600 dark:bg-green-500 text-white dark:text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap min-w-max">
                  <div className="font-semibold">{contributor.name}</div>
                  <div className="text-green-200 dark:text-green-100 text-xs">{contributor.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Contributors;

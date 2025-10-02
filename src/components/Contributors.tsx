
const contributors = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Lead Developer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Nos contributeurs</h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les talents qui font vivre la communauté tech ivoirienne
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
                className="relative w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Contributors;

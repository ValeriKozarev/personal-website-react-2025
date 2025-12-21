import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-slate-200" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 py-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 rounded-sm px-2 py-1 -mx-2 -my-1 ${
                isActive
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 rounded-sm px-2 py-1 -mx-2 -my-1 ${
                isActive
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 rounded-sm px-2 py-1 -mx-2 -my-1 ${
                isActive
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

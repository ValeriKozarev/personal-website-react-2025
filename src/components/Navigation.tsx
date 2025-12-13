import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 py-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
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
              `text-sm font-medium transition-colors ${
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
              `text-sm font-medium transition-colors ${
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

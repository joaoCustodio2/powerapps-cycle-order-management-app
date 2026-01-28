"use client"

import { Home, PlusCircle, User, Settings, Database, BarChart3, Workflow } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "dashboard", label: "Home", icon: Home },
  { id: "new-order", label: "New Order", icon: PlusCircle },
  { id: "reports", label: "Reports", icon: BarChart3 },
  { id: "workflows", label: "Backend Workflows", icon: Workflow },
  { id: "profile", label: "My Profile", icon: User },
  { id: "admin", label: "Admin", icon: Settings },
  { id: "schema", label: "Schema", icon: Database },
]

interface AppSidebarProps {
  activeScreen: string
  onNavigate: (screen: string) => void
}

export function AppSidebar({ activeScreen, onNavigate }: AppSidebarProps) {
  return (
    <aside className="w-60 bg-sidebar text-sidebar-foreground flex flex-col h-full">
      {/* App Header */}
      <div className="px-4 py-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-sidebar-primary rounded flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-sidebar-primary-foreground"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h1 className="font-semibold text-sm leading-tight text-sidebar-foreground">Cycle Order</h1>
            <p className="text-xs text-sidebar-foreground/60">Management System</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeScreen === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Footer */}
      <div className="px-4 py-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center shrink-0">
            <span className="text-xs font-medium text-sidebar-primary-foreground">JC</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-sidebar-foreground truncate">João Custódio</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">joao.custodio@company.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

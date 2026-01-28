"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardScreen } from "@/components/screens/dashboard-screen"
import { NewOrderScreen } from "@/components/screens/new-order-screen"
import { ReportsScreen } from "@/components/screens/reports-screen"
import { WorkflowsScreen } from "@/components/screens/workflows-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"
import { AdminScreen } from "@/components/screens/admin-screen"
import { SchemaScreen } from "@/components/screens/schema-screen"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CycleOrderApp() {
  const [activeScreen, setActiveScreen] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderScreen = () => {
    switch (activeScreen) {
      case "dashboard":
        return <DashboardScreen onNavigate={setActiveScreen} />
      case "new-order":
        return <NewOrderScreen />
      case "reports":
        return <ReportsScreen />
      case "workflows":
        return <WorkflowsScreen />
      case "profile":
        return <ProfileScreen />
      case "admin":
        return <AdminScreen />
      case "schema":
        return <SchemaScreen />
      default:
        return <DashboardScreen onNavigate={setActiveScreen} />
    }
  }

  const handleNavigate = (screen: string) => {
    setActiveScreen(screen)
    setSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AppSidebar activeScreen={activeScreen} onNavigate={handleNavigate} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <nav className="hidden sm:flex items-center text-sm text-muted-foreground">
              <span>Cycle Order Management</span>
              <span className="mx-2">/</span>
              <span className="text-foreground font-medium capitalize">
                {activeScreen.replace("-", " ")}
              </span>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Environment: Production
            </span>
            <div className="w-2 h-2 rounded-full bg-chart-3" />
          </div>
        </header>

        {/* Screen Content */}
        <main className="flex-1 overflow-auto">{renderScreen()}</main>
      </div>

      {/* Mobile close button when sidebar is open */}
      {sidebarOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-3 left-[17rem] z-50 lg:hidden bg-sidebar text-sidebar-foreground"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

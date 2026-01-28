"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, BarChart3, UserCircle, Package, Calendar, TrendingUp } from "lucide-react"

interface DashboardScreenProps {
  onNavigate: (screen: string) => void
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-foreground">Welcome, João Custódio.</h1>
        <p className="text-muted-foreground">
          Manage your cycle orders and track your organization&apos;s procurement.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">24</p>
                <p className="text-sm text-muted-foreground">Active Orders</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-chart-2/20 rounded-lg">
                <Calendar className="h-6 w-6 text-chart-2" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">Q1 2026</p>
                <p className="text-sm text-muted-foreground">Current Cycle</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-chart-3/20 rounded-lg">
                <TrendingUp className="h-6 w-6 text-chart-3" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">87%</p>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-chart-4/20 rounded-lg">
                <BarChart3 className="h-6 w-6 text-chart-4" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">156</p>
                <p className="text-sm text-muted-foreground">Products Available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action Cards */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className="bg-primary hover:bg-primary/90 cursor-pointer transition-colors group"
            onClick={() => onNavigate("new-order")}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/20 rounded-lg">
                  <PlayCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary-foreground">Start Current Cycle Order</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-primary-foreground/80">
                Begin a new order for the active procurement cycle. Select products and quantities.
              </CardDescription>
              <Button
                variant="secondary"
                className="mt-4 group-hover:bg-card group-hover:text-card-foreground"
              >
                Start Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card hover:border-primary/50 cursor-pointer transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <BarChart3 className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-card-foreground">Proportional Grade Order</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Calculate and distribute orders based on grade-level proportions.
              </CardDescription>
              <Button variant="outline" className="mt-4 bg-transparent">
                Configure
              </Button>
            </CardContent>
          </Card>

          <Card
            className="bg-card hover:border-primary/50 cursor-pointer transition-colors"
            onClick={() => onNavigate("profile")}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <UserCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-card-foreground">Update Profile</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Review and update your profile information, department, and cost center.
              </CardDescription>
              <Button variant="outline" className="mt-4 bg-transparent">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
          <CardDescription>Your latest actions and order updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Order #2024-0124 submitted", time: "2 hours ago", status: "success" },
              { action: "Profile updated", time: "1 day ago", status: "info" },
              { action: "Order #2024-0118 approved", time: "3 days ago", status: "success" },
              { action: "New cycle Q1 2026 opened", time: "1 week ago", status: "info" },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.status === "success" ? "bg-chart-3" : "bg-primary"
                    }`}
                  />
                  <span className="text-sm text-card-foreground">{activity.action}</span>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

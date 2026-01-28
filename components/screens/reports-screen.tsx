"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  Package,
  DollarSign,
  Users,
  Calendar,
  Printer,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart,
} from "recharts"

const reports = [
  { id: "orders-overview", title: "Orders Overview", icon: Package, category: "Operations" },
  { id: "financial-summary", title: "Financial Summary", icon: DollarSign, category: "Finance" },
  { id: "demand-trends", title: "Demand Trends", icon: TrendingUp, category: "Analytics" },
  { id: "department-usage", title: "Department Usage", icon: Users, category: "HR" },
  { id: "cycle-performance", title: "Cycle Performance", icon: Calendar, category: "Operations" },
]

const categoryColors: Record<string, string> = {
  Operations: "bg-primary/10 text-primary",
  Finance: "bg-emerald-500/10 text-emerald-600",
  Analytics: "bg-amber-500/10 text-amber-600",
  HR: "bg-violet-500/10 text-violet-600",
}

// Mock Data for Reports
const ordersData = [
  { month: "Jan", orders: 245, fulfilled: 230, pending: 15 },
  { month: "Feb", orders: 312, fulfilled: 298, pending: 14 },
  { month: "Mar", orders: 287, fulfilled: 275, pending: 12 },
  { month: "Apr", orders: 356, fulfilled: 340, pending: 16 },
  { month: "May", orders: 398, fulfilled: 385, pending: 13 },
  { month: "Jun", orders: 425, fulfilled: 412, pending: 13 },
]

const financialData = [
  { department: "Engineering", budget: 150000, spent: 127500, remaining: 22500 },
  { department: "Marketing", budget: 85000, spent: 72250, remaining: 12750 },
  { department: "Operations", budget: 120000, spent: 108000, remaining: 12000 },
  { department: "HR", budget: 45000, spent: 38250, remaining: 6750 },
  { department: "Finance", budget: 35000, spent: 29750, remaining: 5250 },
]

const demandData = [
  { week: "W1", laptops: 45, monitors: 32, keyboards: 78, mice: 85 },
  { week: "W2", laptops: 52, monitors: 28, keyboards: 65, mice: 72 },
  { week: "W3", laptops: 38, monitors: 45, keyboards: 82, mice: 90 },
  { week: "W4", laptops: 65, monitors: 38, keyboards: 70, mice: 68 },
  { week: "W5", laptops: 58, monitors: 52, keyboards: 88, mice: 95 },
  { week: "W6", laptops: 72, monitors: 48, keyboards: 75, mice: 82 },
]

const departmentUsageData = [
  { name: "Engineering", value: 35, orders: 892 },
  { name: "Marketing", value: 22, orders: 562 },
  { name: "Operations", value: 18, orders: 460 },
  { name: "HR", value: 12, orders: 307 },
  { name: "Finance", value: 8, orders: 205 },
  { name: "Other", value: 5, orders: 128 },
]

const cyclePerformanceData = [
  { cycle: "Cycle 1", completion: 94, avgDays: 5.2, totalOrders: 312 },
  { cycle: "Cycle 2", completion: 97, avgDays: 4.8, totalOrders: 287 },
  { cycle: "Cycle 3", completion: 92, avgDays: 5.5, totalOrders: 356 },
  { cycle: "Cycle 4", completion: 98, avgDays: 4.2, totalOrders: 398 },
  { cycle: "Cycle 5", completion: 96, avgDays: 4.5, totalOrders: 425 },
  { cycle: "Cycle 6", completion: 99, avgDays: 3.9, totalOrders: 445 },
]

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444", "#6b7280"]

function OrdersOverviewReport() {
  const totalOrders = ordersData.reduce((acc, d) => acc + d.orders, 0)
  const totalFulfilled = ordersData.reduce((acc, d) => acc + d.fulfilled, 0)
  const fulfillmentRate = ((totalFulfilled / totalOrders) * 100).toFixed(1)

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="grid grid-cols-4 gap-4 print:gap-2">
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="text-2xl font-bold text-foreground">{totalOrders.toLocaleString()}</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" /> +12.5% vs last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Fulfilled</p>
            <p className="text-2xl font-bold text-foreground">{totalFulfilled.toLocaleString()}</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" /> +15.2% vs last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Fulfillment Rate</p>
            <p className="text-2xl font-bold text-foreground">{fulfillmentRate}%</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" /> +2.1% vs last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Pending Orders</p>
            <p className="text-2xl font-bold text-foreground">83</p>
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <ArrowDown className="h-3 w-3" /> -8.3% vs last period
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Monthly Orders Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72 print:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="fulfilled" name="Fulfilled" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" name="Pending" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Orders Detail Table</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-medium">Month</th>
                <th className="text-right py-2 font-medium">Total Orders</th>
                <th className="text-right py-2 font-medium">Fulfilled</th>
                <th className="text-right py-2 font-medium">Pending</th>
                <th className="text-right py-2 font-medium">Rate</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((row) => (
                <tr key={row.month} className="border-b border-muted">
                  <td className="py-2">{row.month} 2024</td>
                  <td className="text-right py-2">{row.orders}</td>
                  <td className="text-right py-2 text-emerald-600">{row.fulfilled}</td>
                  <td className="text-right py-2 text-amber-600">{row.pending}</td>
                  <td className="text-right py-2">{((row.fulfilled / row.orders) * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

function FinancialSummaryReport() {
  const totalBudget = financialData.reduce((acc, d) => acc + d.budget, 0)
  const totalSpent = financialData.reduce((acc, d) => acc + d.spent, 0)
  const totalRemaining = financialData.reduce((acc, d) => acc + d.remaining, 0)

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="grid grid-cols-4 gap-4 print:gap-2">
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Total Budget</p>
            <p className="text-2xl font-bold text-foreground">R${(totalBudget / 1000).toFixed(0)}K</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Total Spent</p>
            <p className="text-2xl font-bold text-foreground">R${(totalSpent / 1000).toFixed(0)}K</p>
            <p className="text-xs text-muted-foreground mt-1">{((totalSpent / totalBudget) * 100).toFixed(1)}% of budget</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Remaining</p>
            <p className="text-2xl font-bold text-emerald-600">R${(totalRemaining / 1000).toFixed(0)}K</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Cost Centers</p>
            <p className="text-2xl font-bold text-foreground">{financialData.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Budget vs Spending by Department</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72 print:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financialData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fontSize: 12 }} tickFormatter={(v) => `R$${v / 1000}K`} />
                <YAxis dataKey="department" type="category" tick={{ fontSize: 12 }} width={80} />
                <Tooltip formatter={(value: number) => `R$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="budget" name="Budget" fill="#e5e7eb" radius={[0, 4, 4, 0]} />
                <Bar dataKey="spent" name="Spent" fill="#2563eb" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Financial Detail by Department</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-medium">Department</th>
                <th className="text-right py-2 font-medium">Budget</th>
                <th className="text-right py-2 font-medium">Spent</th>
                <th className="text-right py-2 font-medium">Remaining</th>
                <th className="text-right py-2 font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              {financialData.map((row) => (
                <tr key={row.department} className="border-b border-muted">
                  <td className="py-2">{row.department}</td>
                  <td className="text-right py-2">R${row.budget.toLocaleString()}</td>
                  <td className="text-right py-2">R${row.spent.toLocaleString()}</td>
                  <td className="text-right py-2 text-emerald-600">R${row.remaining.toLocaleString()}</td>
                  <td className="text-right py-2">
                    <span className={((row.spent / row.budget) * 100) > 90 ? "text-red-600" : "text-foreground"}>
                      {((row.spent / row.budget) * 100).toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

function DemandTrendsReport() {
  return (
    <div className="space-y-6 print:space-y-4">
      <div className="grid grid-cols-4 gap-4 print:gap-2">
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Top Product</p>
            <p className="text-2xl font-bold text-foreground">Mice</p>
            <p className="text-xs text-muted-foreground mt-1">492 units ordered</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Trending Up</p>
            <p className="text-2xl font-bold text-emerald-600">Laptops</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" /> +60% growth
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Trending Down</p>
            <p className="text-2xl font-bold text-red-600">Keyboards</p>
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <ArrowDown className="h-3 w-3" /> -4% decline
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Total Items</p>
            <p className="text-2xl font-bold text-foreground">1,548</p>
            <p className="text-xs text-muted-foreground mt-1">Last 6 weeks</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Product Demand Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72 print:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={demandData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="laptops" name="Laptops" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
                <Area type="monotone" dataKey="monitors" name="Monitors" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Area type="monotone" dataKey="keyboards" name="Keyboards" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                <Area type="monotone" dataKey="mice" name="Mice" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Weekly Demand Detail</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-medium">Week</th>
                <th className="text-right py-2 font-medium">Laptops</th>
                <th className="text-right py-2 font-medium">Monitors</th>
                <th className="text-right py-2 font-medium">Keyboards</th>
                <th className="text-right py-2 font-medium">Mice</th>
                <th className="text-right py-2 font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {demandData.map((row) => (
                <tr key={row.week} className="border-b border-muted">
                  <td className="py-2">{row.week}</td>
                  <td className="text-right py-2">{row.laptops}</td>
                  <td className="text-right py-2">{row.monitors}</td>
                  <td className="text-right py-2">{row.keyboards}</td>
                  <td className="text-right py-2">{row.mice}</td>
                  <td className="text-right py-2 font-medium">{row.laptops + row.monitors + row.keyboards + row.mice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

function DepartmentUsageReport() {
  const totalOrders = departmentUsageData.reduce((acc, d) => acc + d.orders, 0)

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="grid grid-cols-4 gap-4 print:gap-2">
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="text-2xl font-bold text-foreground">{totalOrders.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Top Department</p>
            <p className="text-2xl font-bold text-foreground">Engineering</p>
            <p className="text-xs text-muted-foreground mt-1">35% of all orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Active Depts</p>
            <p className="text-2xl font-bold text-foreground">{departmentUsageData.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Avg Orders/Dept</p>
            <p className="text-2xl font-bold text-foreground">{Math.round(totalOrders / departmentUsageData.length)}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Orders Distribution by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 print:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentUsageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentUsageData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Orders by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 print:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentUsageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#2563eb" radius={[4, 4, 0, 0]}>
                    {departmentUsageData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Department Usage Detail</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-medium">Department</th>
                <th className="text-right py-2 font-medium">Orders</th>
                <th className="text-right py-2 font-medium">Share %</th>
                <th className="text-left py-2 font-medium pl-4">Distribution</th>
              </tr>
            </thead>
            <tbody>
              {departmentUsageData.map((row, i) => (
                <tr key={row.name} className="border-b border-muted">
                  <td className="py-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS[i] }} />
                    {row.name}
                  </td>
                  <td className="text-right py-2">{row.orders}</td>
                  <td className="text-right py-2">{row.value}%</td>
                  <td className="py-2 pl-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="h-2 rounded-full" style={{ width: `${row.value}%`, backgroundColor: COLORS[i] }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

function CyclePerformanceReport() {
  const avgCompletion = (cyclePerformanceData.reduce((acc, d) => acc + d.completion, 0) / cyclePerformanceData.length).toFixed(1)
  const avgDays = (cyclePerformanceData.reduce((acc, d) => acc + d.avgDays, 0) / cyclePerformanceData.length).toFixed(1)
  const totalOrders = cyclePerformanceData.reduce((acc, d) => acc + d.totalOrders, 0)

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="grid grid-cols-4 gap-4 print:gap-2">
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Avg Completion</p>
            <p className="text-2xl font-bold text-emerald-600">{avgCompletion}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Avg Processing</p>
            <p className="text-2xl font-bold text-foreground">{avgDays} days</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="text-2xl font-bold text-foreground">{totalOrders.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 print:p-2">
            <p className="text-sm text-muted-foreground">Cycles Completed</p>
            <p className="text-2xl font-bold text-foreground">{cyclePerformanceData.length}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Completion Rate by Cycle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 print:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cyclePerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="cycle" tick={{ fontSize: 10 }} />
                  <YAxis domain={[85, 100]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="completion" name="Completion %" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Average Processing Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 print:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cyclePerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="cycle" tick={{ fontSize: 10 }} />
                  <YAxis domain={[0, 8]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="avgDays" name="Avg Days" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Cycle Performance Detail</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-medium">Cycle</th>
                <th className="text-right py-2 font-medium">Orders</th>
                <th className="text-right py-2 font-medium">Completion</th>
                <th className="text-right py-2 font-medium">Avg Days</th>
                <th className="text-left py-2 font-medium pl-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {cyclePerformanceData.map((row) => (
                <tr key={row.cycle} className="border-b border-muted">
                  <td className="py-2">{row.cycle}</td>
                  <td className="text-right py-2">{row.totalOrders}</td>
                  <td className="text-right py-2">
                    <span className={row.completion >= 95 ? "text-emerald-600" : "text-amber-600"}>
                      {row.completion}%
                    </span>
                  </td>
                  <td className="text-right py-2">{row.avgDays}</td>
                  <td className="py-2 pl-4">
                    <Badge className={row.completion >= 95 ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"}>
                      {row.completion >= 95 ? "Excellent" : "Good"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

export function ReportsScreen() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null)

  const handlePrint = () => {
    window.print()
  }

  const selectedReportData = reports.find((r) => r.id === selectedReport)

  const renderReportContent = () => {
    switch (selectedReport) {
      case "orders-overview":
        return <OrdersOverviewReport />
      case "financial-summary":
        return <FinancialSummaryReport />
      case "demand-trends":
        return <DemandTrendsReport />
      case "department-usage":
        return <DepartmentUsageReport />
      case "cycle-performance":
        return <CyclePerformanceReport />
      default:
        return null
    }
  }

  return (
    <div className="p-6 space-y-6 print:p-0">
      {selectedReport ? (
        <div className="space-y-4">
          {/* Report Header - hidden on print */}
          <div className="flex items-center justify-between print:hidden">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => setSelectedReport(null)} className="gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <span className="text-muted-foreground">/</span>
              <h2 className="font-semibold text-lg">{selectedReportData?.title}</h2>
              <Badge className={categoryColors[selectedReportData?.category || "Operations"]}>{selectedReportData?.category}</Badge>
            </div>
            <Button onClick={handlePrint} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Report
            </Button>
          </div>

          {/* Print Header - shown only on print */}
          <div className="hidden print:block print:mb-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h1 className="text-xl font-bold">{selectedReportData?.title}</h1>
                <p className="text-sm text-muted-foreground">Cycle Order Management System</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>Generated: {new Date().toLocaleDateString()}</p>
                <p>User: João Custódio</p>
              </div>
            </div>
          </div>

          {/* Report Content */}
          {renderReportContent()}
        </div>
      ) : (
        <>
          {/* Header */}
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Power BI Reports</h1>
            <p className="text-sm text-muted-foreground mt-1">Select a report to view detailed analytics and data</p>
          </div>

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report) => {
              const Icon = report.icon
              return (
                <Card
                  key={report.id}
                  className="hover:border-primary/50 transition-colors cursor-pointer group"
                  onClick={() => setSelectedReport(report.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className={categoryColors[report.category]}>{report.category}</Badge>
                    </div>
                    <CardTitle className="text-base mt-3">{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" size="sm" className="gap-2 w-full justify-center">
                      <BarChart3 className="h-4 w-4" />
                      View Report
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

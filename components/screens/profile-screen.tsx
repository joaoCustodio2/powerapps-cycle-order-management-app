"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { User, Mail, Building, DollarSign, Save, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const departments = [
  "Finance",
  "Human Resources",
  "Information Technology",
  "Marketing",
  "Operations",
  "Sales",
  "Research & Development",
]

const costCenters = [
  { id: "CC-001", name: "Corporate HQ" },
  { id: "CC-002", name: "Regional - East" },
  { id: "CC-003", name: "Regional - West" },
  { id: "CC-004", name: "Regional - Central" },
  { id: "CC-005", name: "Manufacturing" },
]

export function ProfileScreen() {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@company.com",
    department: "Information Technology",
    costCenter: "CC-001",
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-6 space-y-6 max-w-3xl">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-foreground">My Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information linked to DADOSCADASTRAIS.
        </p>
      </div>

      {saved && (
        <Alert className="bg-chart-3/10 border-chart-3">
          <CheckCircle className="h-4 w-4 text-chart-3" />
          <AlertTitle className="text-chart-3">Success</AlertTitle>
          <AlertDescription className="text-chart-3/80">
            Your profile has been updated successfully.
          </AlertDescription>
        </Alert>
      )}

      {/* Profile Form */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Personal Information</CardTitle>
          <CardDescription>Update your profile details below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6 pb-6 border-b border-border">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-card-foreground">{formData.fullName}</h3>
              <p className="text-sm text-muted-foreground">{formData.email}</p>
              <p className="text-xs text-muted-foreground mt-1">User ID: USR-00124</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="fullName" className="flex items-center gap-2 text-card-foreground">
                <User className="h-4 w-4 text-muted-foreground" />
                Full Name
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                }
                className="bg-input"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-card-foreground">
                <Mail className="h-4 w-4 text-muted-foreground" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="bg-input"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="department" className="flex items-center gap-2 text-card-foreground">
                <Building className="h-4 w-4 text-muted-foreground" />
                Department
              </Label>
              <Select
                value={formData.department}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, department: value }))
                }
              >
                <SelectTrigger id="department" className="bg-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="costCenter" className="flex items-center gap-2 text-card-foreground">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                Cost Center
              </Label>
              <Select
                value={formData.costCenter}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, costCenter: value }))
                }
              >
                <SelectTrigger id="costCenter" className="bg-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {costCenters.map((cc) => (
                    <SelectItem key={cc.id} value={cc.id}>
                      {cc.id} - {cc.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Source Info */}
      <Card className="bg-muted/50 border-dashed">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-sm text-card-foreground">Data Source: DADOSCADASTRAIS</h4>
              <p className="text-xs text-muted-foreground mt-1">
                This form is linked to the DADOSCADASTRAIS table in your data model.
                Changes are synced automatically with the master user registry.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

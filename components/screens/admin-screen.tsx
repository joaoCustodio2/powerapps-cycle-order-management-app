"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileSpreadsheet, Zap, AlertTriangle, Settings, Edit2, Trash2 } from "lucide-react"

const systemParameters = [
  { id: 1, key: "MAX_ORDER_ITEMS", value: "50", description: "Maximum items per order", editable: true },
  { id: 2, key: "AUTO_APPROVE_THRESHOLD", value: "500.00", description: "Auto-approve orders below this value", editable: true },
  { id: 3, key: "CYCLE_DURATION_DAYS", value: "90", description: "Default cycle duration in days", editable: true },
  { id: 4, key: "EMAIL_NOTIFICATIONS", value: "true", description: "Send email notifications", editable: true },
  { id: 5, key: "REPORT_RETENTION_DAYS", value: "365", description: "Days to retain generated reports", editable: false },
]

export function AdminScreen() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-foreground">Admin & Reporting</h1>
        <p className="text-muted-foreground">
          Generate reports and manage system parameters.
        </p>
      </div>

      {/* Report Generation */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <FileSpreadsheet className="h-5 w-5 text-primary" />
            Report Generation
          </CardTitle>
          <CardDescription>
            Export consolidated order data to Excel format
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="gap-2">
              <FileSpreadsheet className="h-4 w-4" />
              Generate Consolidated Report (Excel)
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <FileSpreadsheet className="h-4 w-4" />
              Generate By Department
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <FileSpreadsheet className="h-4 w-4" />
              Generate By Cost Center
            </Button>
          </div>

          <Alert className="bg-primary/5 border-primary/20">
            <Zap className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary">Power Automate Integration</AlertTitle>
            <AlertDescription className="text-primary/80">
              Action triggers <strong>Power Automate Flow</strong> → Dynamic Column Macro in Excel.
              The flow will automatically format columns, apply filters, and distribute the report
              to designated stakeholders.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* System Parameters */}
      <Card className="bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Settings className="h-5 w-5 text-muted-foreground" />
                System Parameters
              </CardTitle>
              <CardDescription>
                Configure application-wide settings
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Add Parameter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Parameter Key</TableHead>
                <TableHead className="w-[150px]">Value</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[100px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {systemParameters.map((param) => (
                <TableRow key={param.id}>
                  <TableCell className="font-mono text-sm text-card-foreground">{param.key}</TableCell>
                  <TableCell>
                    <Input
                      defaultValue={param.value}
                      disabled={!param.editable}
                      className="h-8 w-24 bg-input"
                    />
                  </TableCell>
                  <TableCell className="text-muted-foreground">{param.description}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        disabled={!param.editable}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        disabled={!param.editable}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Access Control Notice */}
      <Alert variant="default" className="bg-chart-4/10 border-chart-4">
        <AlertTriangle className="h-4 w-4 text-chart-4" />
        <AlertTitle className="text-chart-4">Admin Access Required</AlertTitle>
        <AlertDescription className="text-chart-4/80">
          Some parameters are locked and require elevated permissions to modify.
          Contact your system administrator for access.
        </AlertDescription>
      </Alert>
    </div>
  )
}

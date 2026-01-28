"use client"

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  FileSpreadsheet, 
  ArrowRight, 
  Database,
  FileJson,
  Server,
  Clock,
  CheckCircle2,
  Binary,
  Table2,
  Upload
} from "lucide-react"

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge 
      variant="secondary" 
      className="bg-primary/10 text-primary border border-primary/20 font-mono text-xs"
    >
      {children}
    </Badge>
  )
}

function FlowStep({ 
  icon: Icon, 
  title, 
  description, 
  isLast = false 
}: { 
  icon: React.ElementType
  title: string
  description: string
  isLast?: boolean 
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-8 bg-border mt-2" />
        )}
      </div>
      <div className="pt-1">
        <p className="font-medium text-sm text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  )
}

export function WorkflowsScreen() {
  return (
    <div className="p-6 space-y-6 bg-background min-h-full">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Backend Workflows</h1>
            <p className="text-sm text-muted-foreground">Power Automate integration architecture</p>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-chart-3/10 flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4 text-chart-3" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Success Rate</p>
                <p className="text-lg font-semibold text-foreground">99.7%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Runs Today</p>
                <p className="text-lg font-semibold text-foreground">847</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-chart-4/10 flex items-center justify-center">
                <Clock className="h-4 w-4 text-chart-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Avg Duration</p>
                <p className="text-lg font-semibold text-foreground">2.3s</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                <Database className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">API Reduction</p>
                <p className="text-lg font-semibold text-foreground">90%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Flow Cards */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Flow 1: High-Performance Order Submission */}
        <Card className="overflow-hidden">
          <CardHeader className="border-b border-border bg-muted/30">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-3/10 border border-chart-3/20 flex items-center justify-center">
                  <Upload className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <CardTitle className="text-base">High-Performance Order Submission</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Batch processing optimization</p>
                </div>
              </div>
              <Badge variant="outline" className="text-chart-3 border-chart-3/30 bg-chart-3/5">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-5 space-y-5">
            {/* Screenshot Placeholder */}
            <div className="aspect-video bg-muted/50 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <FileJson className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Insert Batch Processing Flow Screenshot</p>
              <p className="text-xs text-muted-foreground/70">Power Automate Designer View</p>
            </div>

            {/* Technical Context */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Server className="h-4 w-4 text-primary" />
                Technical Context
              </h4>
              
              {/* Trigger */}
              <div className="p-3 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Trigger</p>
                <p className="text-sm text-foreground">Power Apps (V2) receives a raw JSON collection</p>
              </div>

              {/* Flow Steps */}
              <div className="space-y-0">
                <FlowStep 
                  icon={FileJson}
                  title="Receive JSON Array"
                  description="App sends standardized JSON array instead of individual items"
                />
                <FlowStep 
                  icon={Database}
                  title="Parse JSON Action"
                  description="Validates and extracts data structure from payload"
                />
                <FlowStep 
                  icon={ArrowRight}
                  title="Optimized Apply to Each"
                  description="Parallel processing with concurrency control"
                  isLast
                />
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                <TechBadge>JSON Parsing</TechBadge>
                <TechBadge>SharePoint API</TechBadge>
                <TechBadge>Batch Ingestion</TechBadge>
                <TechBadge>Concurrency Control</TechBadge>
              </div>

              {/* Key Principle */}
              <div className="p-3 rounded-lg bg-chart-3/5 border border-chart-3/20">
                <p className="text-xs font-semibold text-chart-3 uppercase tracking-wide mb-1">Key Engineering Principle</p>
                <p className="text-sm text-foreground">Reduced API chatter by 90% using batch ingestion. Single network round-trip replaces N individual calls.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flow 2: Dynamic Excel Report Generation */}
        <Card className="overflow-hidden">
          <CardHeader className="border-b border-border bg-muted/30">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-4/10 border border-chart-4/20 flex items-center justify-center">
                  <FileSpreadsheet className="h-5 w-5 text-chart-4" />
                </div>
                <div>
                  <CardTitle className="text-base">Dynamic Excel Report Generation</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Server-side document generation</p>
                </div>
              </div>
              <Badge variant="outline" className="text-chart-3 border-chart-3/30 bg-chart-3/5">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-5 space-y-5">
            {/* Screenshot Placeholder */}
            <div className="aspect-video bg-muted/50 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <FileSpreadsheet className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Insert Excel Generation Flow Screenshot</p>
              <p className="text-xs text-muted-foreground/70">Power Automate Designer View</p>
            </div>

            {/* Technical Context */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Server className="h-4 w-4 text-primary" />
                Technical Context
              </h4>
              
              {/* Trigger */}
              <div className="p-3 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Trigger</p>
                <p className="text-sm text-foreground">User requests a consolidated report</p>
              </div>

              {/* Flow Steps */}
              <div className="space-y-0">
                <FlowStep 
                  icon={Clock}
                  title="Initialize Variables"
                  description="File variables & timestamp initialization"
                />
                <FlowStep 
                  icon={Binary}
                  title="Get File Content"
                  description="Retrieves binary Excel template from SharePoint"
                />
                <FlowStep 
                  icon={FileSpreadsheet}
                  title="Create File Instance"
                  description="Generates new unique file with timestamp"
                />
                <FlowStep 
                  icon={Table2}
                  title="Create Table Structure"
                  description="Dynamically generates table based on cycle schema"
                />
                <FlowStep 
                  icon={FileJson}
                  title="Populate Rows"
                  description="Parses JSON and writes data to Excel rows"
                  isLast
                />
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                <TechBadge>Binary Stream</TechBadge>
                <TechBadge>Excel Business Connector</TechBadge>
                <TechBadge>JSON Parsing</TechBadge>
                <TechBadge>Dynamic Schema</TechBadge>
              </div>

              {/* Key Principle */}
              <div className="p-3 rounded-lg bg-chart-4/5 border border-chart-4/20">
                <p className="text-xs font-semibold text-chart-4 uppercase tracking-wide mb-1">Key Engineering Principle</p>
                <p className="text-sm text-foreground">Server-side document generation handling binary streams and dynamic schema adaptation. No client-side processing required.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Architecture Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Database className="h-4 w-4 text-primary" />
            Integration Architecture Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-medium text-sm text-foreground mb-2">Data Layer</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>SharePoint Lists as primary data store</li>
                <li>JSON collections for data transfer</li>
                <li>Indexed lookup columns for performance</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-medium text-sm text-foreground mb-2">Processing Layer</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>Power Automate for orchestration</li>
                <li>Batch operations to reduce API calls</li>
                <li>Error handling with retry logic</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-medium text-sm text-foreground mb-2">Presentation Layer</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>Power Apps canvas for user interface</li>
                <li>Excel exports for reporting</li>
                <li>Power BI for analytics dashboards</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

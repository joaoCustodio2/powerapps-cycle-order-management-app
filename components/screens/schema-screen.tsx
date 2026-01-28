"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Key, Link2 } from "lucide-react"

type TableField = {
  name: string
  type: string
  isPK?: boolean
  isFK?: boolean
  fkRef?: string
}

type TableEntity = {
  id: string
  name: string
  displayName: string
  category: "master" | "time" | "transaction" | "bridge" | "catalog"
  fields: TableField[]
  position: { x: number; y: number }
}

const entities: TableEntity[] = [
  {
    id: "users",
    name: "USERS",
    displayName: "DadosCadastrais",
    category: "master",
    fields: [
      { name: "UserID", type: "INT", isPK: true },
      { name: "FullName", type: "NVARCHAR(100)" },
      { name: "Email", type: "NVARCHAR(255)" },
      { name: "Dept", type: "NVARCHAR(50)" },
      { name: "CostCenter", type: "NVARCHAR(20)" },
    ],
    position: { x: 0, y: 0 },
  },
  {
    id: "cycles",
    name: "CYCLES",
    displayName: "Periodos",
    category: "time",
    fields: [
      { name: "CycleID", type: "INT", isPK: true },
      { name: "CycleName", type: "NVARCHAR(50)" },
      { name: "StartDate", type: "DATE" },
      { name: "EndDate", type: "DATE" },
      { name: "Status", type: "NVARCHAR(20)" },
    ],
    position: { x: 2, y: 0 },
  },
  {
    id: "orders",
    name: "ORDERS",
    displayName: "Pedidos",
    category: "transaction",
    fields: [
      { name: "OrderID", type: "INT", isPK: true },
      { name: "UserID", type: "INT", isFK: true, fkRef: "USERS" },
      { name: "CycleID", type: "INT", isFK: true, fkRef: "CYCLES" },
      { name: "OrderDate", type: "DATETIME" },
      { name: "Status", type: "NVARCHAR(20)" },
      { name: "TotalAmount", type: "DECIMAL(10,2)" },
    ],
    position: { x: 1, y: 1 },
  },
  {
    id: "order_items",
    name: "ORDER_ITEMS",
    displayName: "PedidosXProdutos",
    category: "bridge",
    fields: [
      { name: "ItemID", type: "INT", isPK: true },
      { name: "OrderID", type: "INT", isFK: true, fkRef: "ORDERS" },
      { name: "ProductID", type: "INT", isFK: true, fkRef: "PRODUCTS" },
      { name: "Quantity", type: "INT" },
      { name: "UnitPrice", type: "DECIMAL(10,2)" },
    ],
    position: { x: 1, y: 2 },
  },
  {
    id: "products",
    name: "PRODUCTS",
    displayName: "Produtos",
    category: "catalog",
    fields: [
      { name: "ProductID", type: "INT", isPK: true },
      { name: "Name", type: "NVARCHAR(100)" },
      { name: "SKU", type: "NVARCHAR(20)" },
      { name: "UnitPrice", type: "DECIMAL(10,2)" },
      { name: "Category", type: "NVARCHAR(50)" },
    ],
    position: { x: 2, y: 2 },
  },
]

const categoryColors: Record<string, { bg: string; border: string; badge: string }> = {
  master: { bg: "bg-primary/5", border: "border-primary/30", badge: "bg-primary text-primary-foreground" },
  time: { bg: "bg-chart-2/10", border: "border-chart-2/30", badge: "bg-chart-2 text-foreground" },
  transaction: { bg: "bg-chart-3/10", border: "border-chart-3/30", badge: "bg-chart-3 text-foreground" },
  bridge: { bg: "bg-chart-4/10", border: "border-chart-4/30", badge: "bg-chart-4 text-foreground" },
  catalog: { bg: "bg-chart-5/10", border: "border-chart-5/30", badge: "bg-chart-5 text-foreground" },
}

const categoryLabels: Record<string, string> = {
  master: "Master",
  time: "Time Dimension",
  transaction: "Transaction",
  bridge: "Bridge/Details",
  catalog: "Catalog",
}

function EntityCard({ entity }: { entity: TableEntity }) {
  const colors = categoryColors[entity.category]

  return (
    <Card className={`${colors.bg} ${colors.border} border-2`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold flex items-center gap-2 text-card-foreground">
            <Database className="h-4 w-4" />
            {entity.name}
          </CardTitle>
          <Badge className={`${colors.badge} text-xs`}>
            {categoryLabels[entity.category]}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground font-mono">({entity.displayName})</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {entity.fields.map((field) => (
            <div
              key={field.name}
              className="flex items-center justify-between py-1 px-2 rounded text-xs bg-background/50"
            >
              <div className="flex items-center gap-2">
                {field.isPK && <Key className="h-3 w-3 text-chart-4" />}
                {field.isFK && <Link2 className="h-3 w-3 text-primary" />}
                <span className={`font-mono ${field.isPK || field.isFK ? "font-semibold" : ""} text-card-foreground`}>
                  {field.name}
                </span>
              </div>
              <span className="text-muted-foreground font-mono">{field.type}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function RelationshipLine({
  from,
  to,
  label,
  cardinality,
}: {
  from: string
  to: string
  label: string
  cardinality: string
}) {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="font-mono font-semibold text-card-foreground">{from}</span>
      <div className="flex items-center gap-1">
        <div className="w-4 h-px bg-border" />
        <span className="text-primary font-semibold">{cardinality}</span>
        <div className="w-4 h-px bg-border" />
        <span className="px-1 bg-muted rounded">{label}</span>
        <div className="w-4 h-px bg-border" />
      </div>
      <span className="font-mono font-semibold text-card-foreground">{to}</span>
    </div>
  )
}

export function SchemaScreen() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-foreground">Data Architecture (Schema)</h1>
        <p className="text-muted-foreground">
          System Entity Relationship Diagram (ERD) - Visual representation of the underlying data model.
        </p>
      </div>

      {/* Legend */}
      <Card className="bg-card">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-sm font-medium text-card-foreground">Legend:</span>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded ${categoryColors[key].badge}`} />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
            <div className="border-l border-border pl-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Key className="h-3 w-3 text-chart-4" />
                <span>Primary Key</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Link2 className="h-3 w-3 text-primary" />
                <span>Foreign Key</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ERD Diagram */}
      <div className="relative">
        {/* Connection lines - visual representation */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {/* USERS -> ORDERS */}
          <svg className="absolute w-full h-full" style={{ zIndex: 0 }}>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" className="fill-primary/40" />
              </marker>
              <marker id="crowfoot" markerWidth="12" markerHeight="12" refX="0" refY="6" orient="auto">
                <path d="M0,6 L12,0 M0,6 L12,6 M0,6 L12,12" className="stroke-primary/40" fill="none" strokeWidth="1.5" />
              </marker>
            </defs>
            {/* USERS to ORDERS */}
            <path
              d="M 180 180 Q 220 260, 180 340"
              fill="none"
              className="stroke-primary/30"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#crowfoot)"
            />
            {/* CYCLES to ORDERS */}
            <path
              d="M 420 180 Q 380 260, 420 340"
              fill="none"
              className="stroke-chart-2/30"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#crowfoot)"
            />
            {/* ORDERS to ORDER_ITEMS */}
            <path
              d="M 300 420 L 300 520"
              fill="none"
              className="stroke-chart-3/30"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#crowfoot)"
            />
            {/* PRODUCTS to ORDER_ITEMS */}
            <path
              d="M 420 560 L 380 560"
              fill="none"
              className="stroke-chart-5/30"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>

        {/* Entity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* Row 1: Master Tables */}
          <EntityCard entity={entities.find((e) => e.id === "users")!} />
          <div className="hidden lg:block" /> {/* Spacer */}
          <EntityCard entity={entities.find((e) => e.id === "cycles")!} />

          {/* Row 2: Transaction Table */}
          <div className="hidden lg:block" /> {/* Spacer */}
          <EntityCard entity={entities.find((e) => e.id === "orders")!} />
          <div className="hidden lg:block" /> {/* Spacer */}

          {/* Row 3: Bridge and Catalog */}
          <div className="hidden lg:block" /> {/* Spacer */}
          <EntityCard entity={entities.find((e) => e.id === "order_items")!} />
          <EntityCard entity={entities.find((e) => e.id === "products")!} />
        </div>
      </div>

      {/* Relationships */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Table Relationships</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <RelationshipLine
            from="USERS"
            to="ORDERS"
            label="places"
            cardinality="1:N"
          />
          <RelationshipLine
            from="CYCLES"
            to="ORDERS"
            label="contains"
            cardinality="1:N"
          />
          <RelationshipLine
            from="ORDERS"
            to="ORDER_ITEMS"
            label="has"
            cardinality="1:N"
          />
          <RelationshipLine
            from="PRODUCTS"
            to="ORDER_ITEMS"
            label="included in"
            cardinality="1:N"
          />
        </CardContent>
      </Card>

      {/* Technical Notes */}
      <Card className="bg-muted/50 border-dashed">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-sm mb-3 text-card-foreground">Data Model Notes</h4>
          <ul className="text-xs text-muted-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Star Schema Design:</strong> The ORDER_ITEMS table serves as the fact table,
                with USERS, CYCLES, and PRODUCTS as dimension tables.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Referential Integrity:</strong> All foreign key constraints are enforced
                with ON DELETE RESTRICT to prevent orphaned records.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Indexing Strategy:</strong> Composite indexes on (OrderID, ProductID) in
                ORDER_ITEMS for optimized join operations.
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Minus, Plus, ShoppingCart, Trash2, Package } from "lucide-react"

const cycles = [
  { id: "q1-2026", label: "Q1 2026 - Current Cycle", status: "active" },
  { id: "q4-2025", label: "Q4 2025 - Closed", status: "closed" },
  { id: "q3-2025", label: "Q3 2025 - Closed", status: "closed" },
]

const products = [
  { id: "1", name: "Office Paper A4 (500 sheets)", sku: "OFF-PAP-001", price: 12.99 },
  { id: "2", name: "Ballpoint Pens (Box of 50)", sku: "OFF-PEN-002", price: 15.50 },
  { id: "3", name: "Sticky Notes (12 Pack)", sku: "OFF-STK-003", price: 8.25 },
  { id: "4", name: "File Folders (100 Pack)", sku: "OFF-FLD-004", price: 24.00 },
  { id: "5", name: "Stapler Heavy Duty", sku: "OFF-STP-005", price: 18.75 },
  { id: "6", name: "Desk Organizer Set", sku: "OFF-ORG-006", price: 32.00 },
  { id: "7", name: "Whiteboard Markers (8 Pack)", sku: "OFF-MRK-007", price: 11.50 },
  { id: "8", name: "Binder Clips (Assorted)", sku: "OFF-BND-008", price: 6.99 },
]

type OrderItem = {
  productId: string
  name: string
  quantity: number
  price: number
}

export function NewOrderScreen() {
  const [selectedCycle, setSelectedCycle] = useState("q1-2026")
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { productId: "1", name: "Office Paper A4 (500 sheets)", quantity: 10, price: 12.99 },
    { productId: "2", name: "Ballpoint Pens (Box of 50)", quantity: 5, price: 15.50 },
  ])
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + delta),
    }))
  }

  const addToOrder = (product: (typeof products)[0]) => {
    const qty = quantities[product.id] || 0
    if (qty === 0) return

    setOrderItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id)
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      }
      return [...prev, { productId: product.id, name: product.name, quantity: qty, price: product.price }]
    })
    setQuantities((prev) => ({ ...prev, [product.id]: 0 }))
  }

  const removeFromOrder = (productId: string) => {
    setOrderItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  const totalItems = orderItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalValue = orderItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-foreground">New Cycle Order</h1>
        <p className="text-muted-foreground">
          Select products and quantities for your current cycle order.
        </p>
      </div>

      {/* Cycle Selector */}
      <Card className="bg-card">
        <CardContent className="pt-6">
          <div className="flex items-end gap-4">
            <div className="flex-1 max-w-sm">
              <Label htmlFor="cycle" className="text-card-foreground">Select Active Cycle (PERIODOS)</Label>
              <Select value={selectedCycle} onValueChange={setSelectedCycle}>
                <SelectTrigger id="cycle" className="mt-2 bg-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cycles.map((cycle) => (
                    <SelectItem
                      key={cycle.id}
                      value={cycle.id}
                      disabled={cycle.status === "closed"}
                    >
                      {cycle.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-chart-3" />
              <span>Active cycle</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Grid */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Products (PRODUTOS)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-card-foreground truncate">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
                      <p className="text-sm font-semibold text-primary mt-1">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={quantities[product.id] || 0}
                        onChange={(e) =>
                          setQuantities((prev) => ({
                            ...prev,
                            [product.id]: Math.max(0, parseInt(e.target.value) || 0),
                          }))
                        }
                        className="w-16 h-8 text-center bg-input"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addToOrder(product)}
                      disabled={(quantities[product.id] || 0) === 0}
                    >
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Order Summary</h2>
          <Card className="bg-card sticky top-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                <ShoppingCart className="h-5 w-5" />
                PEDIDOSxPRODUTOS
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Items from intersection table
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderItems.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No items in order
                </p>
              ) : (
                <>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {orderItems.map((item) => (
                      <div
                        key={item.productId}
                        className="flex items-center justify-between py-2 border-b border-border"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate text-card-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Qty: {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-card-foreground">
                            ${(item.quantity * item.price).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-destructive hover:text-destructive"
                            onClick={() => removeFromOrder(item.productId)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Items</span>
                      <span className="font-medium text-card-foreground">{totalItems}</span>
                    </div>
                    <div className="flex justify-between text-base">
                      <span className="font-medium text-card-foreground">Total Value</span>
                      <span className="font-bold text-primary">${totalValue.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full">Submit Order</Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

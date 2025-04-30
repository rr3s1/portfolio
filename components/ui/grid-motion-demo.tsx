import { GridMotion } from "@/components/ui/grid-motion"

export function GridMotionDemo() {
  const items = [
    'Item 1',
    <div key='jsx-item-1' className="text-center">
      <h3 className="text-lg font-bold">Custom Content</h3>
      <p className="text-sm">With rich formatting</p>
    </div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 4',
    <div key='jsx-item-2' className="text-center">
      <h3 className="text-lg font-bold">Another Custom</h3>
      <p className="text-sm">With different style</p>
    </div>,
    'Item 6',
    <div key='jsx-item-3' className="text-center">
      <h3 className="text-lg font-bold">Third Custom</h3>
      <p className="text-sm">With unique content</p>
    </div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 8',
    <div key='jsx-item-4' className="text-center">
      <h3 className="text-lg font-bold">Fourth Custom</h3>
      <p className="text-sm">With special layout</p>
    </div>,
    'Item 10',
    <div key='jsx-item-5' className="text-center">
      <h3 className="text-lg font-bold">Fifth Custom</h3>
      <p className="text-sm">With custom design</p>
    </div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 13',
    <div key='jsx-item-6' className="text-center">
      <h3 className="text-lg font-bold">Sixth Custom</h3>
      <p className="text-sm">With final touch</p>
    </div>,
    'Item 14'
  ];

  return (
    <div className="space-y-8">
      {/* Default grid with system-generated items */}
      <div className="h-screen w-full bg-gradient-to-br from-background to-muted">
        <GridMotion />
      </div>

      {/* Custom grid with rich content */}
      <div className="h-screen w-full bg-gradient-to-br from-background to-muted">
        <GridMotion 
          items={items}
          gradientColor="hsl(var(--brand))"
          className="relative z-10 backdrop-blur-sm"
        />
      </div>

      {/* Minimal grid with dark theme */}
      <div className="h-screen w-full bg-black">
        <GridMotion 
          items={items.slice(0, 14)}
          gradientColor="hsl(var(--brand-foreground))"
          className="opacity-75"
        />
      </div>
    </div>
  )
} 
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your dashboard. This is a simplified template without authentication.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Example Card 1</h3>
          <p className="text-sm text-muted-foreground">
            This is an example card component.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Example Card 2</h3>
          <p className="text-sm text-muted-foreground">
            This is another example card component.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Example Card 3</h3>
          <p className="text-sm text-muted-foreground">
            This is yet another example card component.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Example Card 4</h3>
          <p className="text-sm text-muted-foreground">
            This is the fourth example card component.
          </p>
        </div>
      </div>
      
      <div className="rounded-lg border p-6">
        <h3 className="font-semibold mb-4">Main Content Area</h3>
        <p className="text-muted-foreground">
          This is the main content area of your dashboard. You can add any content here.
        </p>
      </div>
    </div>
  )
}

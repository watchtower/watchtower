export default function NewService() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="select-none">
          <h1 className="text-lg font-medium md:text-xl">New Service</h1>
          <p className="text-muted-foreground text-sm">
            Start monitoring your service
          </p>
        </div>
      </div>
    </main>
  );
}

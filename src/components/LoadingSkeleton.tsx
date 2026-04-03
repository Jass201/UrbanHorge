export default function LoadingSkeleton() {
  return (
    <div className="container-shell space-y-8 py-8">
      <div className="h-14 animate-pulse rounded-full bg-sand" />
      <div className="h-[65svh] animate-pulse rounded-[34px] bg-sand" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <div className="h-[420px] animate-pulse rounded-[28px] bg-sand" />
            <div className="h-5 w-2/3 animate-pulse rounded-full bg-sand" />
            <div className="h-4 w-full animate-pulse rounded-full bg-sand" />
          </div>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <div className="h-[380px] animate-pulse rounded-[24px] bg-sand" />
            <div className="h-5 w-1/2 animate-pulse rounded-full bg-sand" />
            <div className="h-4 w-1/3 animate-pulse rounded-full bg-sand" />
          </div>
        ))}
      </div>
    </div>
  );
}

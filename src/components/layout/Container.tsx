export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex h-full min-h-svh w-full max-w-screen-xl flex-col px-2 md:px-6">
      {children}
    </div>
  );
}

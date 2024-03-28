

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <button>Home</button>
      {children}
    </main>

  );
}

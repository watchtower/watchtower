import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}

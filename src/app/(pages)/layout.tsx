import { Header } from "@/components/header";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 container">
      <Header />
      {children}
    </div>
  );
}

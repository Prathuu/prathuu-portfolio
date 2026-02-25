import "./globals.css";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* background light blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] bg-blue-500/30 rounded-full blur-[160px]" />

          <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-purple-500/30 rounded-full blur-[160px]" />
        </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}

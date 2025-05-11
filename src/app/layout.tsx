// app/layout.tsx
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import ZoomInfoTracking from "@/components/ZoomInfoTracking";

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono", // This connects to our theme
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoMono.variable}`}>
      <body>
        <ZoomInfoTracking />
        {children}
      </body>
    </html>
  );
}

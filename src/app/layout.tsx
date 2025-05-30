import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>36websolutions</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}

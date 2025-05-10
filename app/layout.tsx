import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Martian_Mono } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SR Portfolio",
  description: "Web Dev Portfolio LP",
};

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Or use a variable font range if available and desired
  // variable: '--font-martian-mono', // Optional: if you want to use it as a CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Coda:wght@400;800&family=Merienda:wght@300..900&family=Varela+Round&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
       
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"     
          enableSystem={false} 
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}

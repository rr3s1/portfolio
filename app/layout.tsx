import type { Metadata } from "next";
import { Inter, Martian_Mono, Coda, Merienda, Varela_Round, Quantico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-quantico",
});

export const metadata: Metadata = {
  title: "SR Portfolio",
  description: "Web Dev Portfolio LP",
};

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Or use a variable font range if available and desired
  variable: '--font-martian-mono', // Optional: if you want to use it as a CSS variable
});

const coda = Coda({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: '--font-coda',
});

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-merienda',
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-varela-round',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font links removed */}
      </head>
      <body className={`${inter.className} ${coda.variable} ${merienda.variable} ${varelaRound.variable} ${martianMono.variable}  ${quantico.variable}`}>
       
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

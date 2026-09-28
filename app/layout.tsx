import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, STIX_Two_Text } from "next/font/google";
import { Nav } from "@/components/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stixTwo = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Um-e-Kalsoum Asif",
  description:
    "Computer Science student at the University of Guelph specializing in Cybersecurity. Building reliable, user-centered software.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${stixTwo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-grid" />
        <Nav />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Mono, STIX_Two_Text } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const stixTwo = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
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
      className={`${stixTwo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-grid" />
        <Nav />
        {children}
      </body>
    </html>
  );
}

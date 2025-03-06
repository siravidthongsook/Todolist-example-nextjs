import type { Metadata } from "next";
import { Kanit } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkManagementApp",
  description: "Created by Siravid Thongsook",
};

const KanitFont = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
})


function makeAllFont() {
  let text = ""
  const fonts = [KanitFont]
  fonts.map((font) => {
    text += (font.variable + " ")
  })

  return text
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#000] text-base text-white antialiased ${makeAllFont()}`}
      >  
        {children}
      </body>
    </html>
  );
}

import { Exo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const EXO = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
})

export const metadata = {
  title: "YT Start",
  description: "Let us build your YouTube empire",
  icons: {
    icon: '/favIcon.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${EXO.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

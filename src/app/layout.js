import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata = {
  title: "Intro section",
  description: "Intro section with dropdown navigation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} antialiased`}>{children}</body>
    </html>
  );
}

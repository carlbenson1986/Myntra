import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnbctv18.com%2Fretail%2Fmyntra-changes-logo-after-complaint-calls-signage-offensive-to-women-8153851.htm&psig=AOvVaw0uhtbsfkfkIY9xjP4IoY1z&ust=1693643293097000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJi_4qr_iIEDFQAAAAAdAAAAABAJ",
  },
  title: "Myntra",
  description: "CAPSTONE PROJECT ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
      
    </html>
  );
}

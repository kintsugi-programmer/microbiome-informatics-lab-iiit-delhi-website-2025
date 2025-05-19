import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppThemeProvider} from "@/components/AppThemeProvider";
import DelayedLoader from "@/components/DelayedLoader";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Microbiome@IIITD",
description:
    "Led by Dr. Tarini Shankar Ghosh, IIIT-Delhi`s Microbiome Informatics Lab unravels microbiome assembly, host–microbiome–environment interactions, data-driven functional metagenomics, and cross-site pan-microbiome dynamics to advance precision diagnostics and therapeutics.",
  authors: [
    {
      name: "Dr. Tarini Shankar Ghosh",
      url: "https://www.iiitd.ac.in/tarini",   // optional but nice for rich previews
    },
  ],
  creator: "Dr. Tarini Shankar Ghosh",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 

        
        <head>
        <meta name="color-scheme" content="light" />
        <meta name="apple-mobile-web-app-title" content="MI Lab" />

</head>
<AppThemeProvider             
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange>
<DelayedLoader>

  
    {children}
  

</DelayedLoader>
</AppThemeProvider>
           
      </body>
    </html>
  );
}

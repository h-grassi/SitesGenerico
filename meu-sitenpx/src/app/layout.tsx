"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import { useBootstrap } from "@/hook/useBootstrap"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

//import { useEffect } from "react";
import Footer from "@/Componentes/Footer";
import NavHeader from "@/Componentes/navHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  }: Readonly<{
  children: React.ReactNode; 
  }>
  )
  {
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} bg-cor-background`}>
          <NavHeader/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}

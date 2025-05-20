import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.scss";

import Footer from "@/Componentes/Footer";
import {NavHeaderBig} from '@/Componentes/navHeader';

export default function RootLayout({
  children,
  }: Readonly<{
  children: React.ReactNode; 
  }>
  )
  {
    return (
      <html lang="en">
        <body className={`bg-cor-background`}>
          <NavHeaderBig/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}

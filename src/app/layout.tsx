'use client';

import GlobalStyles from "./styles/GlobalStyles";
import Header from "@/app/components/organisms/Header";
import Footer from "@/app/components/organisms/Footer";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <head />
      <body>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
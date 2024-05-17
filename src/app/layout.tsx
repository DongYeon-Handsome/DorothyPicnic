'use client';

import Providers from "./Providers";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export default function RootLayout(props: React.PropsWithChildren){
  return(
    <html>
      <body>
        <Header />
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
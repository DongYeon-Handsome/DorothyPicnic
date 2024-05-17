'use client';

import Providers from "./Providers";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "@/components/organisms/Header";

export default function RootLayout(props: React.PropsWithChildren){
  return(
    <html>
      <body>
        <Header />
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  )
}
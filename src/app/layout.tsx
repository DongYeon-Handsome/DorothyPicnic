import Providers from "./Providers";
import GlobalStyles from "./styles/GlobalStyles";
import React from "react";

export default function RootLayout(props: React.PropsWithChildren){
  return(
    <html>
      <body>
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  )
}
import { theme } from "../styles/theme"
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from "@clerk/localizations";

export default function App({ Component, pageProps: {
  session,
  ...pageProps
} }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ClerkProvider
        localization={ptBR}>
        <Toaster position="top-right" />
        <div className="h-full flex items-center justify-center">
          <Component {...pageProps} />
        </div>
      </ClerkProvider>
    </ChakraProvider>
  )
}

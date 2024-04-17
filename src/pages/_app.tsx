import { theme } from "../styles/theme"
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { Toaster } from 'react-hot-toast';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

export default function App({ Component, pageProps: {
  session,
  ...pageProps
} }: AppProps) {
  return (
    <ClerkProvider
      localization={ptBR}
      {...pageProps}>
      <ChakraProvider theme={theme} resetCSS>
        <Toaster position="top-right" />
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <div className="h-full flex items-center justify-center">
            <RedirectToSignIn />
          </div>
        </SignedOut>
      </ChakraProvider>
    </ClerkProvider>
  )
}

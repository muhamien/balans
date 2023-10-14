import '@/styles/globals.css'
import { SessionProvider, getSession, useSession } from "next-auth/react"
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider } from '@chakra-ui/react'
import {
  RecoilRoot,
} from 'recoil';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import queryClient from '@/utils/queryClient'

function App({ Component, pageProps: { session, ...pageProps } }) {

  return (
        <QueryClientProvider client={queryClient} >
          <SessionProvider session={session}>
            <RecoilRoot>
              <ChakraProvider>
                <AntdConfigProvider>
                {Component.auth ? (
                    <Auth>
                      <Component {...pageProps} />
                    </Auth>
                ) : (
                    <Component {...pageProps} />
                )}
                </AntdConfigProvider>
              </ChakraProvider>
            </RecoilRoot>
          </SessionProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
  )
}

export default App

function Auth({ children }) {
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <h3>Loading...</h3>
      </div>
    )
  }

  return children
}
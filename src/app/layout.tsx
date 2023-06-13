import StyledComponentsRegistry from '../lib/registry';
import './globals.css';
import { Saira } from 'next/font/google';
import { GlobalContextProvider } from '@/contexts/GlobalContext';

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
});

export const metadata = {
  title: 'Caputeeno',
  description: 'Caputeeno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <GlobalContextProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </GlobalContextProvider>
      </body>
    </html>
  )
}

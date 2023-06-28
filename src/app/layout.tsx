'use client';
import Navbar from '@/components/navBar/Navbar';

import { Body } from './layoutStyle';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): any {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <title>Igor Dokai</title>
      </head>
      <Body>
        <Navbar />
        {children}
      </Body>
    </html>
  );
}

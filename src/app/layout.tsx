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
        <title>Igor Dokai</title>
      </head>
      <Body>
        <Navbar />
        {children}
      </Body>
    </html>
  );
}

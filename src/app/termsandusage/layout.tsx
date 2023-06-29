'use client';
import { useState } from 'react';

import * as color from '@/config/colorPalette';

import {
  Container,
  ChildrenPage,
  Main,
  MenuSubpages,
  Subpage
} from './layoutStyle';

export default function TermsAndUsageLayout({ children }: any): JSX.Element {
  const [mindzenScale, setMindzenScale] = useState<string>('1');
  const [mindzenColor, setMindzenColor] = useState<string>(color.sectionColor);
  const [bzmScale, setBzmScale] = useState<string>('1');
  const [bzmColor, setBzmColor] = useState<string>(color.sectionColor);

  return (
    <Container>
      <Main>
        <MenuSubpages>
          <Subpage
            href={'/termsandusage/mindzen'}
            style={{ scale: mindzenScale, borderColor: mindzenColor }}
            onClick={() => {
              setMindzenScale('1.3');
              setMindzenColor(color.colorBack);
              setBzmScale('1');
              setBzmColor(color.sectionColor);
            }}
          >
            MindZen
          </Subpage>
          <Subpage
            href={'/termsandusage/bzmtextil'}
            style={{ scale: bzmScale, borderColor: bzmColor }}
            onClick={() => {
              setMindzenScale('1');
              setMindzenColor(color.sectionColor);
              setBzmScale('1.3');
              setBzmColor(color.colorBack);
            }}
          >
            BZM Textil
          </Subpage>
        </MenuSubpages>
        <ChildrenPage>{children}</ChildrenPage>
      </Main>
    </Container>
  );
}

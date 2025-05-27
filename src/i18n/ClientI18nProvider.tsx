
'use client';

import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './client';

export default function ClientI18nProvider({ children }: PropsWithChildren) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
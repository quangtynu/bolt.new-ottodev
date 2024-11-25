import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => {
  return [
    { title: 'OttoDev Bolt: Open Source AI App Builder with Local & Hosted Free AI Models' },
    { name: 'description', content: 'OttoDev Bolt is an open-source, community-driven platform for building AI-powered apps. Access local and hosted free AI models from a large list of options to suit your needs!' },
    { name: 'keywords', content: 'open source AI app builder, OttoDev, Bolt, community-driven, free AI models, local models, hosted models, browser-based development, app development, full-stack development' },
    
    // Open Graph tags
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'OttoDev Bolt: Open Source AI App Builder' },
    { property: 'og:description', content: 'Build AI-powered apps with OttoDev Bolt - Access local and hosted free AI models.' },
    { property: 'og:site_name', content: 'OttoDev Bolt' },
    
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'OttoDev Bolt: Open Source AI App Builder' },
    { name: 'twitter:description', content: 'Build AI-powered apps with OttoDev Bolt - Access local and hosted free AI models.' }
  ];
};

export const loader = () => json({});

export default function Index() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
    </div>
  );
}

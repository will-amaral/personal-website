import { MainLayout } from '@/layouts';

import { Github, Twitter, Instagram, Linkedin, Behance } from '@/components/icons';

export default function Home() {
  return (
    <MainLayout title="Hi!, I'm Will">
      <h1>Hi, I'm Will </h1>
      <address>
        <a href='mailto:will@amaral.dev'>will@amaral.dev</a>
      </address>
      <p>
        I'm a web developer/journalist/graphic designer from Brazil. I build cool UIs with
        React and NextJs most of the time, but I also love messing around with Svelte.{' '}
        <small>(Don't tell my boss)</small>
      </p>
      <address>
        <a href='https://github.com/will-amaral'>
          <Github />
        </a>
        <a href='https://twitter.com/willamaral_io'>
          <Twitter />
        </a>
        <a href='https://www.instagram.com/will.amaral.io/'>
          <Instagram />
        </a>
        <a href='https://www.linkedin.com/in/willian-amaral/'>
          <Linkedin />
        </a>
        <a href='https://www.behance.net/will-amaral'>
          <Behance />
        </a>
      </address>
      <style jsx>
        {`
          h1 {
            font-weight: 500;
            margin-bottom: 0;
          }
          address > a {
            font-style: normal;
            font-size: 1.5em;
            font-weight: 200;
            text-decoration: none;
            color: inherit;
          }

          p {
            font-size: 1.5em;
            margin-top: 50px;
          }

          a:not(:last-child) {
            margin-right: 15px;
          }
        `}
      </style>
    </MainLayout>
  );
}

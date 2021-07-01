import { MainLayout } from '@/layouts';
import { Anchor } from '@/components';
import { Github, Twitter, Instagram, Linkedin } from '@/components/icons';

export default function Home() {
  return (
    <MainLayout title="Hi!, I'm Will">
      <h1>Hi, I'm Will </h1>
      <address>
        <a href='mailto:will@amaral.dev'>will@amaral.dev</a>
      </address>
      <p>
        I'm a Brazilian web developer/journalist. <br />
        I build cool UIs with <Anchor
          href='https://reactjs.org/'
          label='React'
        /> and <Anchor href='https://nextjs.org/' label='NextJS' /> most of the time, but
        I also love messing around with{' '}
        <Anchor href='https://svelte.dev/' label='Svelte' /> and anything JavaScript.
      </p>
      <address>
        <a
          href='https://github.com/will-amaral'
          aria-label='My github profile'
          target='_blank'
          rel='noreferrer'
        >
          <Github />
        </a>
        <a
          href='https://twitter.com/willamaral_io'
          aria-label='My twitter profile'
          target='_blank'
          rel='noreferrer'
        >
          <Twitter />
        </a>
        <a
          href='https://www.instagram.com/will.amaral.io/'
          aria-label='My instagram profile'
          target='_blank'
          rel='noreferrer'
        >
          <Instagram />
        </a>
        <a
          href='https://www.linkedin.com/in/willian-amaral/'
          aria-label='My linkedin profile'
          target='_blank'
          rel='noreferrer'
        >
          <Linkedin />
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
            margin-top: 50px;
            font-size: 1.5em;
          }

          a:not(:last-child) {
            margin-right: 15px;
          }
        `}
      </style>
    </MainLayout>
  );
}

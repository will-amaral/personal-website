import styles from '../styles/Home.module.css';

import { Main, Section, Card } from '@/components';

export default function Home() {
  return (
    <Main grid='full' style={{ paddingTop: '10%' }}>
      <h1>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>

      <p>
        Get started by editing <code>pages/index.js</code>
      </p>

      <Section grid='halves'>
        <Card title='Documentation' href='https://nextjs.org/docs'>
          Find in-depth information about Next.js features and API.
        </Card>

        <Card title='Learn' href='https://nextjs.org/learn'>
          Learn about Next.js in an interactive course with quizzes!
        </Card>

        <Card
          title='Examples'
          href='https://github.com/vercel/next.js/tree/master/examples'
        >
          Discover and deploy boilerplate example Next.js projects.
        </Card>

        <Card
          title='Deploy'
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        >
          Instantly deploy your Next.js site to a public URL..
        </Card>
      </Section>
    </Main>
  );
}

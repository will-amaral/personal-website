import Head from 'next/head';
import { NavLink, ThemeSwitcher } from '@/components';
import { useThemeContext } from '@/context/theme';
import { ReactNode } from 'react';

function MainLayout(props: MainLayoutProps) {
  const { children, title } = props;
  const { isDark, toggleTheme } = useThemeContext();
  return (
    <>
      <Head>
        <title>{title} | Will Amaral</title>
      </Head>
      <header>
        <nav>
          <NavLink href="/">Hi!</NavLink>
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </nav>
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
      </header>
      <main>{children}</main>
      <footer className="grid-container full">
        <p>Copyright © {new Date().getFullYear()} Willian Amaral</p>
      </footer>
      <style jsx>{`
        header {
          max-width: var(--container-max-width);
          margin: 4% auto;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        main {
          max-width: var(--container-max-width);
          margin: auto;
          min-height: 60vh;
        }

        footer {
          margin-top: 20px;
        }

        footer > p {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

export default MainLayout;

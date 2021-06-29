import { Sun, Moon } from './icons';

function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { isDark, toggleTheme } = props;
  return (
    <button aria-label='Trocar o tema' onClick={toggleTheme}>
      {isDark ? <Sun /> : <Moon />}
      <style jsx>{`
        button {
          padding: 0;
          margin: 0;
          height: unset;
          border: none;
          line-height: 1.15;
          border-radius: 50%;
        }

        button:hover {
          color: var(--accent-color);
        }

        button:focus {
          outline: 1px solid;
        }

        button:focus:not(:focus-visible) {
          outline: 0;
        }
      `}</style>
    </button>
  );
}

type ThemeSwitcherProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export default ThemeSwitcher;

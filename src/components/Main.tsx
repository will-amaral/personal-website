import { BaseProps } from './utils';
import clsx from 'clsx';

function Main(props: BaseProps<'main'>) {
  const { grid, className, ...rest } = props;

  return <main className={clsx(grid && 'grid-container', grid, className)} {...rest} />;
}

export default Main;

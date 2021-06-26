import { BaseProps } from './utils';
import clsx from 'clsx';

function Div(props: BaseProps<'div'>) {
  const { grid, className, ...rest } = props;

  return <div className={clsx(grid && 'grid-container', grid, className)} {...rest} />;
}

export default Div;

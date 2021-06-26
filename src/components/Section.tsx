import { BaseProps } from './utils';
import clsx from 'clsx';

function Section(props: BaseProps<'section'>) {
  const { grid, className, ...rest } = props;

  return (
    <section className={clsx(grid && 'grid-container', grid, className)} {...rest} />
  );
}

export default Section;

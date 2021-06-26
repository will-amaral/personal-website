import { BaseProps } from './utils';
import clsx from 'clsx';

function Article(props: BaseProps<'article'>) {
  const { grid, className, ...rest } = props;

  return (
    <article className={clsx(grid && 'grid-container', grid, className)} {...rest} />
  );
}

export default Article;

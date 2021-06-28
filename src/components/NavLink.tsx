import { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

function NavLink(props: PropsWithChildren<LinkProps>) {
  const { href, children, ...rest } = props;
  const { pathname } = useRouter();

  return (
    <>
      <Link href={href} {...rest}>
        <a aria-current={pathname === href ? 'page' : null}>{children}</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          padding-bottom: 10px;
          color: var(--text-color-softer);
        }

        a:not(:last-child) {
          margin-right: 15px;
        }

        [aria-current='page'] {
          font-weight: 900;
          border-bottom: 1px solid;
        }
      `}</style>
    </>
  );
}

export default NavLink;

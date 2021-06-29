import { ComponentPropsWithoutRef, ReactNode } from 'react';

function Anchor(props: AnchorProps) {
  const { href, label, children, ...rest } = props;
  return (
    <a href={href} aria-label={`Go to ${label}`} target='_blank' {...rest}>
      {children ?? label}
    </a>
  );
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  label: string;
  children?: ReactNode;
}

export default Anchor;

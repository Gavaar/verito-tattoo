import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <Link href='/'><div>Home</div></Link>
      <Link href='/changelog'><div>Changelog</div></Link>
    </header>
  );
});

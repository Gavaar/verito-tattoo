import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import Header from '../components/header/header';
import layoutStyles from './main-layout.css?inline';

export default component$(() => {
  useStylesScoped$(layoutStyles);

  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.github.com/gavaar" target="_blank">
          Made by Gavaar
        </a>
      </footer>
    </>
  );
});

import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Changelog } from "~/components/changelog";

export default component$(() => {
    return (<Changelog />);
});

export const head: DocumentHead = {
    title: 'Changelog',
};

import { component$ } from "@builder.io/qwik";
import { Changelog as ChangelogData } from "./changelog-log";

export const Changelog = component$(() => {
    return (
        <ul>
            {ChangelogData.map(change => {
                return (
                    <li>
                        <strong>{change.version}</strong>
                        <ul>
                            {change.changes.client.map(c => <li>{c}</li>)}
                            {change.changes.technical?.map(t => <li>{t}</li>)}
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
});

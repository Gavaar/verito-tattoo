interface Changes {
    version: `${number}.${number}.${number}`,
    changes: {
        client: string[];
        technical?: string[];
    };
}

export const Changelog: Changes[] = [
    {
        version: '0.0.2',
        changes: {
            client: ['Changelog exists now'],
        }
    },
    {
        version: '0.0.1',
        changes: {
            client: ['First structure for the new verito tattoo'],
            technical: ['Qwik city'],
        }
    }
];

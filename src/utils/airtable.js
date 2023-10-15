import Airtable from 'airtable';

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);

export { base };
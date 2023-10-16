// import { tableSeat, getMinifiedRecord, minifyRecords } from '../../utils/airtable';

// export default async function handler(req, res) {
//     try {
//         const records = await tableSeat.select().firstPage();
//         const formattedRecords = minifyRecords(records);
//         res.status(200).json(formattedRecords);
//     } catch (error) {
//         console.error(error);
//         res.statusCode = 500;
//         res.json({ msg: 'Something went wrong' });
//     }
// }
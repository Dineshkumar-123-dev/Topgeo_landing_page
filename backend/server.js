import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import xlsx from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const EXCEL_FILE = path.join(__dirname, 'leads.xlsx');

app.use(cors());
app.use(bodyParser.json());

// Initialize Excel File if it doesn't exist
const initExcel = () => {
    if (!fs.existsSync(EXCEL_FILE)) {
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet([]);
        xlsx.utils.book_append_sheet(wb, ws, 'Leads');
        xlsx.writeFile(wb, EXCEL_FILE);
        console.log('Created new Excel file: leads.xlsx');
    }
};

initExcel();

app.post('/api/submit-lead', (req, res) => {
    try {
        const leadData = req.body;
        console.log('Received Lead:', leadData);

        // Read existing file
        const workbook = xlsx.readFile(EXCEL_FILE);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert current sheet to JSON
        const data = xlsx.utils.sheet_to_json(worksheet);

        // Add submission timestamp
        leadData.submittedAt = new Date().toLocaleString();

        // Append new lead
        data.push(leadData);

        // Create new sheet from expanded data
        const newWorksheet = xlsx.utils.json_to_sheet(data);
        workbook.Sheets[sheetName] = newWorksheet;

        // Write back to file
        xlsx.writeFile(workbook, EXCEL_FILE);

        res.status(200).json({ success: true, message: 'Lead saved to Excel successfully' });
    } catch (error) {
        console.error('Error saving to Excel:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});

const XLSX = require('xlsx');
const path = 'c:\\Users\\ryoji\\OneDrive\\デスクトップ\\cursor\\vault\\消防本部ホームページ構築\\新構成_サイトマップ.xlsx';

try {
    const workbook = XLSX.readFile(path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    let currentMain = "";
    let currentSub = "";

    // Simple hierarchical print
    data.forEach(row => {
        const col0 = row[0]; // Main
        const col1 = row[1]; // Sub
        const col2 = row[2]; // Detail
        const col3 = row[3]; // More Detail

        if (col0 && col0 !== currentMain) {
            console.log(`\n# ${col0}`);
            currentMain = col0;
        }
        if (col1 && col1 !== currentSub) {
            console.log(`  - ${col1}`);
            currentSub = col1;
        }
        if (col2) {
            console.log(`    * ${col2}`);
        }
        if (col3) {
            console.log(`      > ${col3}`);
        }
    });

} catch (e) {
    console.error("Error reading file:", e.message);
}

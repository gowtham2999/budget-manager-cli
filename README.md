# 💸 Personal Budget Manager — Full Intern Instructions

> Welcome, developers! In this project, you will build a complete **Budget Manager** that runs inside the **terminal** using **Node.js**.

---

# Project Overview

You will:

- Add **income** and **expense** records.
- Save data in a JSON file.
- See **financial summaries** like balance and expense breakdown.
- Generate **monthly reports**.
- Work entirely inside the terminal with **no UI** — only console outputs.

---

# 6-Day Breakdown

| Day   | Tasks                                                               |
| :---- | :------------------------------------------------------------------ |
| Day 1 | Setup project, basic CLI parsing, basic commands                    |
| Day 2 | File system (fs) integration: Save and load transactions            |
| Day 3 | Implement summary (totals: income, expense, balance)                |
| Day 4 | Add filtering (by category, by month/year)                          |
| Day 5 | Generate and export reports                                         |
| Day 6 | Refactor code, error handling, CLI polish, (bonus features if time) |

---

# Step-by-Step Setup

## 1. Create the project folder

```bash
git clone https://github.com/GowthamNaruto/budget-manager-cli.git
```

---

## 2. Initialize Node.js project

```bash
npm init -y
```

This creates a `package.json` file.

---

## 3. Setup basic project structure

Create the following files and folders:

```
budget-manager/
├── package.json
├── app.js
├── data/
│   └── records.json
├── utils/
│   ├── fileManager.js
│   ├── transactionManager.js│   └── reportGenerator.js
└── README.md
```

**Create Empty Files:**

Inside `records.json`, add an empty array to start:

```json
[]
```

---

## 4. Install useful libraries (optional but recommended)

```bash
npm install chalk yargs
```

- `chalk` → for coloring terminal text.
- `yargs` → for better command-line parsing.

---

# 🧩 File Responsibilities

| File                          | Responsibility                                  |
| :---------------------------- | :---------------------------------------------- |
| `app.js`                      | Main entry point. Handle CLI commands.          |
| `data/records.json`           | Stores all your transaction records.            |
| `utils/fileManager.js`        | Read/write JSON file functions.                 |
| `utils/transactionManager.js` | Add transactions, list, filter, summarize data. |
| `utils/reportGenerator.js`    | Generate and save a financial report.           |

---

# 📜 CLI Commands Specification

Here’s how your app will be used:

| Command       | Purpose                                  | Example                                                                                            |
| :------------ | :--------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `add-income`  | Add an income entry                      | `node app.js add-income --amount=5000 --description="Salary" --date="2025-04-01"`                  |
| `add-expense` | Add an expense entry                     | `node app.js add-expense --amount=200 --category="Food" --description="Lunch" --date="2025-04-02"` |
| `list`        | List all transactions                    | `node app.js list`                                                                                 |
| `summary`     | Show total income, expenses, and balance | `node app.js summary`                                                                              |
| `filter`      | Filter transactions by category or date  | `node app.js filter --category="Food"` or `node app.js filter --month="04" --year="2025"`          |
| `report`      | Export a financial report                | `node app.js report --month="04" --year="2025"`                                                    |

---

# 📚 Helpful Hints for Development

## For CLI Parsing:

- If you use `process.argv`, you can manually extract command and options.
- If you use `yargs`, it automatically parses `--amount`, `--description`, etc.

Example (`yargs` usage):

```javascript
const yargs = require('yargs');

yargs.command({
	command: 'add-income',
	describe: 'Add a new income',
	builder: {
		amount: { type: 'number', demandOption: true },
		description: { type: 'string', demandOption: true },
		date: { type: 'string', demandOption: true },
	},
	handler(argv) {
		console.log('Adding new income:', argv);
	},
});

yargs.parse();
```

---

## For File Reading/Writing (in `fileManager.js`):

- Use Node's `fs` module:

```javascript
const fs = require('fs');
const filePath = './data/records.json';

function readRecords() {
	if (!fs.existsSync(filePath)) return [];
	const data = fs.readFileSync(filePath);
	return JSON.parse(data);
}

function writeRecords(records) {
	fs.writeFileSync(filePath, JSON.stringify(records, null, 2));
}

module.exports = { readRecords, writeRecords };
```

---

## For Transaction Management (in `transactionManager.js`):

- Create functions like:

```javascript
function addIncome(amount, description, date) {
	/*...*/
}
function addExpense(amount, description, category, date) {
	/*...*/
}
function listTransactions() {
	/*...*/
}
function summarize() {
	/*...*/
}
function filterByCategory(category) {
	/*...*/
}
function filterByDate(month, year) {
	/*...*/
}
```

---

## For Report Generation (in `reportGenerator.js`):

- Export selected transactions into `.txt` or `.json`:

```javascript
const fs = require('fs');

function generateReport(transactions, month, year) {
	const filename = `report_${year}_${month}.txt`;
	const content = transactions.map((t) => JSON.stringify(t)).join('\n');
	fs.writeFileSync(`./data/${filename}`, content);
	console.log(`Report saved to data/${filename}`);
}

module.exports = { generateReport };
```

---

# Final Checklist Before Submission

✅ All required CLI commands working  
✅ Transactions saved to `records.json`  
✅ `summary` command displays totals correctly  
✅ `filter` command correctly filters by category/month  
✅ `report` command exports a `.txt` file  
✅ Code is clean, modular (separated into utils), and readable  
✅ `README.md` updated with your details  
✅ Basic error handling in place (e.g., no negative amounts)  
✅ (Bonus) Terminal outputs look nice with `chalk`

---

# Bonus Stretch Goals (Optional)

- Validate input dates properly (use `new Date()`)
- Sort transactions by date when listing
- Support multiple currencies
- Build a colorful CLI dashboard (like a simple ASCII graph)

---

# Final Words

> Work like real developers!  
> Keep functions small and reusable.  
> Handle errors nicely (e.g., wrong inputs, file not found).  
> Take your time to refactor messy code.

---

# 📬 Questions?

If you're stuck:

- **Google first**: "Node.js read file", "Node.js CLI arguments", stack overflow or MDN docs.

- **!!! PLEASE DO NOT USE ANY GPTs OR LLMs**:

---

---

✅ **Ready to Build!**

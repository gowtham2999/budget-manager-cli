// app.js
// You are not allowed to write all logic inside app.js. Split your business logic into proper modules inside the utils/ folder.

// 1. Import necessary modules
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const {
	addIncome,
	addExpense,
	listTransactions,
	summarize,
	filterTransactions,
} = require('./utils/transactionManager');
const { generateReport } = require('./utils/reportGenerator');

// 2. Setup yargs and define commands
yargs(hideBin(process.argv))
	// Add Income Command
	.command(
		'add-income',
		'Add a new income entry',
		{
			amount: {
				type: 'number',
				demandOption: true,
				describe: 'Amount of income',
			},
			description: {
				type: 'string',
				demandOption: true,
				describe: 'Description of income',
			},
			date: {
				type: 'string',
				demandOption: true,
				describe: 'Date of income (YYYY-MM-DD)',
			},
		},
		(argv) => {
			addIncome(argv.amount, argv.description, argv.date);
		}
	)

	// Add Expense Command
	.command(
		'add-expense',
		'Add a new expense entry',
		{
			amount: {
				type: 'number',
				demandOption: true,
				describe: 'Amount of expense',
			},
			category: {
				type: 'string',
				demandOption: true,
				describe: 'Category of expense',
			},
			description: {
				type: 'string',
				demandOption: true,
				describe: 'Description of expense',
			},
			date: {
				type: 'string',
				demandOption: true,
				describe: 'Date of expense (YYYY-MM-DD)',
			},
		},
		(argv) => {
			addExpense(argv.amount, argv.category, argv.description, argv.date);
		}
	)

	// List All Transactions Command
	.command('list', 'List all transactions', {}, () => {
		listTransactions();
	})

	// Summary Command
	.command('summary', 'Show income, expenses, and balance summary', {}, () => {
		summarize();
	})

	// Filter Transactions Command
	.command(
		'filter',
		'Filter transactions by category or date',
		{
			category: { type: 'string', describe: 'Category to filter by' },
			month: { type: 'string', describe: 'Month to filter by (MM)' },
			year: { type: 'string', describe: 'Year to filter by (YYYY)' },
		},
		(argv) => {
			filterTransactions(argv);
		}
	)

	// Generate Report Command
	.command(
		'report',
		'Generate a financial report',
		{
			month: {
				type: 'string',
				demandOption: true,
				describe: 'Month for report (MM)',
			},
			year: {
				type: 'string',
				demandOption: true,
				describe: 'Year for report (YYYY)',
			},
		},
		(argv) => {
			generateReport(argv.month, argv.year);
		}
	)

	// Help command (default)
	.demandCommand(1, 'You need to specify a command to run the application.')
	.help().argv;

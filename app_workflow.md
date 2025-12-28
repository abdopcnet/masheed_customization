# Workflow

## Gross Profit Report Workflow

```
User Opens Report
    ↓
Select Filters (Company, Date Range, Group By, etc.)
    ↓
Execute Report
    ↓
GrossProfitGenerator.process()
    ↓
Load Invoice Items
    ↓
Load Stock Ledger Entries
    ↓
Calculate Buying Rates (Valuation Rate)
    ↓
Calculate Gross Profit
    ↓
Group Data by Selected Criteria
    ↓
Generate Columns
    ↓
Display Report
```

## Sales Order/Invoice Customization Workflow

```
User Opens Sales Order/Invoice Form
    ↓
Load Client Script (sales_order.js / sales_invoice.js)
    ↓
User Interacts with Form Fields
    ↓
Trigger Custom Validation/Logic
    ↓
Update Form Behavior
```

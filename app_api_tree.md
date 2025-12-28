# API Structure

## Reports

### Gross Profit Based On Valuation Rate

- **Entry Point**: `execute(filters=None)`
- **Path**: `masheed.masheed_customization.report.gross_profit_based_on_valuation_rate.gross_profit_based_on_valuation_rate.execute`
- **Class**: `GrossProfitGenerator`
  - `process()` - Main data processing
  - `load_invoice_items()` - Load Sales Invoice items
  - `load_stock_ledger_entries()` - Load stock valuation data
  - `get_buying_amount()` - Calculate buying amounts
  - `get_average_buying_rate()` - Calculate average buying rates

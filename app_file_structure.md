# File Structure

```
masheed/
├── masheed/
│   ├── hooks.py                                    # App hooks configuration
│   ├── masheed_customization/
│   │   ├── report/
│   │   │   └── gross_profit_based_on_valuation_rate/
│   │   │       ├── gross_profit_based_on_valuation_rate.py   # Report logic
│   │   │       ├── gross_profit_based_on_valuation_rate.js    # Report filters
│   │   │       └── gross_profit_based_on_valuation_rate.json  # Report definition
│   │   └── doctype/
│   ├── config/
│   └── templates/
├── README.md
└── [documentation files]
```

## Key Files

- `gross_profit_based_on_valuation_rate.py` - Report execution and data processing
- `gross_profit_based_on_valuation_rate.js` - Report filters UI
- `hooks.py` - App hooks and configuration

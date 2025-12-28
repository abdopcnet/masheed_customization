frappe.query_reports['Gross Profit Based On Valuation Rate'] = {
	filters: [
		{
			fieldname: 'company',
			label: __('Company'),
			fieldtype: 'Link',
			options: 'Company',
			reqd: 1,
			default: frappe.defaults.get_user_default('Company'),
		},
		{
			fieldname: 'from_date',
			label: __('From Date'),
			fieldtype: 'Date',
			default: frappe.datetime.get_today(),
		},
		{
			fieldname: 'to_date',
			label: __('To Date'),
			fieldtype: 'Date',
			default: frappe.datetime.get_today(),
		},
		{
			fieldname: 'sales_invoice',
			label: __('Sales Invoice'),
			fieldtype: 'Link',
			options: 'Sales Invoice',
		},
		{
			fieldname: 'group_by',
			label: __('Group By'),
			fieldtype: 'Select',
			options:
				'Invoice\nItem Code\nItem Group\nBrand\nWarehouse\nCustomer\nCustomer Group\nTerritory\nSales Person\nProject',
			default: 'Invoice',
		},
		{
			fieldname: 'created_by',
			label: __('Created By'),
			fieldtype: 'Link',
			options: 'User',
		},
	],
};

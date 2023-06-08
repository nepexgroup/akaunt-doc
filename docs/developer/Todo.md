# Todo

- create api and ui
    - Bank allocation
    - Attendance
    - Salary structure
    - Payroll voucher
    - Holidays
    - Overtimes
    - Shifts
    - Pay Head Computation Table
    - Pay Head Computation
    - Qualification
    - Department
    - Fiscal year
    - Institute
    - Naming series
    - Vehicle Allocation
    - Vehicle Brands
    - Vehicles
- check if reference number changes in any model
- If reference number is consistent then we could use reference number instead of id in all scenario
- consistent ordering of list of items in data table

# Integration test with transaction and its function
- simple voucher
- simple voucher with inventory
- simple voucher with inventory, tax and discount
- add attendance, holiday and make compatible with payroll voucher
- add payroll voucher

## TASK
- create Accounting Features for controlling accounting feature, like wise for payroll, inventory


## Transaction Test
- create `capital account` and `cash account/bank account` of **Rs. 1,00,000**

### Case 1
- create `purchase voucher` of worth **Rs. 20,000** (this will create bill)
- create `bill allocation` which will satisfy bill.
- Track `item movement record`(automatic), which would have all the record of movement of item.

### Case 2
- create deposit of cash to bank of worth **Rs. 50,000**
- create `bank allocation` for bank and assign instrument number.

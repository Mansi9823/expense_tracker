
export interface ExpenseRecord{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Transaction ID : Data	*/
	transaction_id: string
	/**	Amount : Float	*/
	amount: number
	/**	Type  : Select	*/
	type?: "Credit" | "Debit"
	/**	Description : Data	*/
	description: string
	/**	Formmated Amount : Float	*/
	formmated_amount?: number
	/**	Remarks : Small Text	*/
	remarks?: string
}
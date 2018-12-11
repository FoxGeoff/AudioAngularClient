export interface TestItem {
    id: number;
    associated_employee_id?: number;
    associated_location_id?: number;
    associated_customer_id?: number;
    company_name: string;
    username: string; 
    first_name: string;
    last_name: string;
    address: string;
    address_2?: string;
    city:string;
    zip_code:number;
    bill_address_different: boolean;
    phone_1_description: string;
    phone_1_extension: string;
    small_note: string;
    note:string;
}

import React, { Component } from 'react'

import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';

var rows  = [
  {
    "id": 1,
    "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
    "is_obsolete": false,
    "created_on": "2022-02-15T21:17:42.714Z",
    "modified_on": "2022-02-15T21:17:42.714Z",
    "loan_amount": "100000",
    "ledger_type": "CREDIT",
    "person_of_interest": "Aavash Khatri",
    "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},  {
  "id": 1,
  "idx": "5fa249a0-fedf-489b-8b9e-cac02b9f4862",
  "is_obsolete": false,
  "created_on": "2022-02-15T21:17:42.714Z",
  "modified_on": "2022-02-15T21:17:42.714Z",
  "loan_amount": "100000",
  "ledger_type": "CREDIT",
  "person_of_interest": "Aavash Khatri",
  "payback_completed": true
},
  {
      "id": 2,
      "idx": "ca6df232-fbfe-487e-b1a6-4812e96d54ae",
      "is_obsolete": false,
      "created_on": "2022-02-15T21:18:06.065Z",
      "modified_on": "2022-02-15T21:18:06.065Z",
      "loan_amount": "100000",
      "ledger_type": "CREDIT",
      "person_of_interest": "Aavash Khatri",
      "payback_completed": false
  }
]

var columns = [
  {
   field: "person_of_interest",
   use: "Person of Interest",
   //Will not be used in search filtering
   use_in_search:false
 },
 {
   field: "payback_completed",
   use: "Payback Completed",
 },
 {
   field: "ledger_type",
   use: "Ledger Type",

   //Will not be displayed in the table
  //  use_in_display: false
 },
 {
   field: "loan_amount",
   use: "Loan Amount",
   //would not be exported as a CSV column
   use_in_export: false

 }
]

function loans() {
  return (
    <Table columns={columns} rows={rows} show_search={false} should_export={false} bulk_select_options={["Save","Delete","Update"]} />
  )
}

export default loans
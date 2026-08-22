// ==================== EMPLOYEE DATABASE ====================
const employeesData = [
  {
    id: 'akash-r',
    name: 'Akash Raut',
    designation: 'Project',
  
    email: 'akash@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/1J0fEgUfvhprW7toPDCCWNswE___LjMge',
    dashboards: [
    {
      title: 'Airtech Progress Dashboard',
      url: 'https://script.google.com/a/macros/avaniyshinterior.com/s/AKfycbxBqPiof-i02R7xg0VxjjLcl99fBL6MQZCfG0rUufBnBhAEYtJ2QIUKvrIkzFQwOIo/exec?page=pms'
    },
    {
      title: 'Airtech Material Checklist',
      url: 'https://script.google.com/macros/s/AKfycbyj1PuG5FaR1jtF-BA_DUe2klBDSWKDWYavXVAji0v7V7gY5aXYvk5hR7UF6QBWSQYsfw/exec'
    },
    {
      title: 'Airtech Schedular',
      url: 'https://script.google.com/a/macros/avaniyshinterior.com/s/AKfycbxBqPiof-i02R7xg0VxjjLcl99fBL6MQZCfG0rUufBnBhAEYtJ2QIUKvrIkzFQwOIo/exec?page=fitout'
    },

    {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
    }
  ],

  projects: [
      { 
        name: 'AISPL Proforma Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '1013826524', 
        selectedColumns: ['Sr.No.', 'Proforma Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL Tax Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '665653959', 
        selectedColumns: ['Sr.No.', 'Tax Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL PO To Vendor', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '286319358', 
        selectedColumns: ['Sr.No.', 'PO No.','Vendor Name', 'Project Name','Remarks','Created By'] 
      },
    ],
    sheets: [
      
      { name: 'Project Visit', formUrl:'https://forms.gle/ZRpDTA4KUkGnbwtX8', docId: '11TLkJxGV3EFz4ZdVqKpuX3O-8FV4TrlMIYjxyAZ0lqY', gid: '2045538987', selectedColumns: ['Date', 'Project Site Visitor', 'Project Name', 'Location', 'Visit Purpose', 'Observation'] },
      { name: 'Office Expenses',formUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeFG1ZBY4mstlGPDpcNhUb9vi2WiJGBr3aG2cuTtYqPNXf4Nw/viewform?usp=header', docId: '1N2DF6vzSoJcIxwL2makablsGtDlMB-rxhcWT3_VLHBY', gid: '440445714', selectedColumns: ['Date', 'Paid to', 'Amount', 'Reason', 'Categories','URD Purchase','Tax Invoice'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Project Specification Changes',formUrl:'https://forms.gle/2Zew9NZYBjbF32bE6', docId: '1oOS8lE1JviRkNhbM7FP_0VUxPV9FZgMU70t_j0A_N2A', gid: '944341180', selectedColumns: ['Date', 'Project Name', 'Specific Changes / Additional Work', 'Cost Change (If Any)', 'Requested / Instructed By', 'Approval Status'] },
      { name: 'Delegation Score PH', docId: '1JsKyve_bNF80c-D-jvLAmFGfDKE6xLzYBtiFep0UXlc', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Daily Video Call', docId: '16wXUF_fWDvbdBZf63sZiIU0hCkI-qjnFLGgFui9t4yY', gid: '2092959791', selectedColumns: ['Name', 'Task', 'Planned', 'Actual', 'Status'] },
            { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

     
    ]
  },
  {
    id: 'mahavir-c',
    name: 'Mahavir Chabukswar',
    designation: 'Project',
   
    email: 'mahavir@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/1-fJug9Xn7MBNGbl7M57Ap4YL_SFvzExN',
    dashboards: [
    {
      title: 'Airlife Gases Pvt. Ltd. Progress Dashboard',
      url: 'https://script.google.com/a/macros/avaniyshinterior.com/s/AKfycbxoo7jVxrxKUBRtqy05_b0T0EK676VBzEPpiK7ntxkTOO_LZdrN4gbEcIHECXni7wq_tg/exec'
    },
       {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
    }
   
  ],
    projects: [
      { 
        name: 'AISPL Proforma Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '1013826524', 
        selectedColumns: ['Sr.No.', 'Proforma Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL Tax Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '665653959', 
        selectedColumns: ['Sr.No.', 'Tax Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL PO To Vendor', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '286319358', 
        selectedColumns: ['Sr.No.', 'PO No.','Vendor Name', 'Project Name','Remarks','Created By'] 
      },
    ],
 
    sheets: [
     { name: 'Project Visit', formUrl:'https://forms.gle/ZRpDTA4KUkGnbwtX8', docId: '11TLkJxGV3EFz4ZdVqKpuX3O-8FV4TrlMIYjxyAZ0lqY', gid: '2045538987', selectedColumns: ['Date', 'Project Site Visitor', 'Project Name', 'Location', 'Visit Purpose', 'Observation'] },
      { name: 'Office Expenses',formUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeFG1ZBY4mstlGPDpcNhUb9vi2WiJGBr3aG2cuTtYqPNXf4Nw/viewform?usp=header', docId: '1N2DF6vzSoJcIxwL2makablsGtDlMB-rxhcWT3_VLHBY', gid: '440445714', selectedColumns: ['Date', 'Paid to', 'Amount', 'Reason', 'Categories','URD Purchase'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Project Specification Changes',formUrl:'https://forms.gle/2Zew9NZYBjbF32bE6', docId: '1oOS8lE1JviRkNhbM7FP_0VUxPV9FZgMU70t_j0A_N2A', gid: '944341180', selectedColumns: ['Date', 'Project Name', 'Specific Changes / Additional Work', 'Cost Change (If Any)', 'Requested / Instructed By', 'Approval Status'] },
      { name: 'Delegation Score PH', docId: '1JsKyve_bNF80c-D-jvLAmFGfDKE6xLzYBtiFep0UXlc', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

   
      ]
  },
  {
    id: 'sachin-m',
    name: 'Sachin Maharana',
    designation: 'Project',
   
    email: 'projects1@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/18zLmgSBmGprsf970P_iaZK-k_2UD0R-8',
    dashboards: [
    {
      title: 'Airtech Progress Dashboard',
      url: 'https://script.google.com/a/macros/avaniyshinterior.com/s/AKfycbxBqPiof-i02R7xg0VxjjLcl99fBL6MQZCfG0rUufBnBhAEYtJ2QIUKvrIkzFQwOIo/exec?page=pms'
    },
       {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
    }
  ],
    projects: [
      { 
        name: 'AISPL Proforma Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '1013826524', 
        selectedColumns: ['Sr.No.', 'Proforma Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL Tax Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '665653959', 
        selectedColumns: ['Sr.No.', 'Tax Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL PO To Vendor', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '286319358', 
        selectedColumns: ['Sr.No.', 'PO No.','Vendor Name', 'Project Name','Remarks','Created By'] 
      },
    ],
    sheets: [
      { name: 'Daily Report',formUrl:'https://forms.gle/YUV27rV5kPXKyn799', docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '799922129', selectedColumns: ['Date', 'Project Name', 'Location', 'In - Time ', 'Out- Time', 'Have you done site visit?','Described Days Activities (Mentioned by Points) In Office','Described Days Activities (Mentioned by Points) In Site'] },
      { name: 'Daily Video Call', docId: '16wXUF_fWDvbdBZf63sZiIU0hCkI-qjnFLGgFui9t4yY', gid: '2092959791', selectedColumns: ['Name', 'Task', 'Planned', 'Actual', 'Status'] },
      { name: 'Petrol Allowance',formUrl:'https://forms.gle/2EmAJQdZ7f2BwMLF9', docId: '1qbbbN4uU0x1UFC3rIzkO6lekrFw3A7XD1lx7zZYxSxE', gid: '1266941161', selectedColumns: ['Date', 'Name', 'From', 'To', 'Km','Others','Upload'] },
      { name: 'Safety Check', formUrl:'https://forms.gle/gRj1gRTZSnvygyVV6',docId: '1Lub7fEdgOKBjfuLDpMhYQ4do78_DamGxLasxjIbf9Vo', gid: '1997998379', selectedColumns: ['Date', 'Project Member', 'Project Name', 'Location', 'Agency Name', 'Total Labour Count', 'PPE Kit', 'Gadgets Check'] },
      { name: 'Delivery Challan',formUrl:'https://forms.gle/EuBCvSYkfQVYjBYw7', docId: '1ssmVTMIvMmNcqm5oloGabxX6XrWd-qMWCxzb5QYdc6s', gid: '1102974409', selectedColumns: ['Date', 'Project Name', 'Name', 'Work', 'Challan', 'Returnable Materials List', 'Reason'] },
      { name: 'Project Visit',formUrl:'https://forms.gle/ZRpDTA4KUkGnbwtX8', docId: '11TLkJxGV3EFz4ZdVqKpuX3O-8FV4TrlMIYjxyAZ0lqY', gid: '2045538987', selectedColumns: ['Date', 'Project Site Visitor', 'Project Name', 'Location', 'Visit Purpose', 'Observation'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Upload URD',formUrl:'https://forms.gle/ojbkRA6NZ92w96mZ9', docId: '1ezKQET2dMdSkJ_rUmbMiWxFA0wSVmDrwM8XGDaajkF8', gid: '1029448347', selectedColumns: ['Date', 'Name', 'Project Name', 'Tax Invoice', 'URD Purchase'] },
      { name: 'Site Inspection Checklist', formUrl:'https://forms.gle/qfXppXnNK4JDP3tc8', docId: '1zpPnIESV3EBTrrGKMpjW2UNsbouv3bTA88YuN4XZEgs', gid: '1839387537', selectedColumns: ['Date', 'Name', 'Project Name', 'Work Activity', 'Upload'] },
      { name: 'Debit Note',formUrl:'https://forms.gle/RGcNHw5EjYBrrbfv9', docId: '1rc9AKbkiagJLYpNXvaxbzAhVAWhGJH4AuTENu1NknB0', gid: '12767300', selectedColumns: ['Date', 'Name', 'Project Name', 'Vendor Name', 'Debit To (Worker Name)', 'Reason', 'Amount', 'Approved By'] },
      { name: 'Delegation Sheet Team', docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Help Slip',formUrl:'https://forms.gle/naMThh9BWnzcAme38', docId: '16R8q7J5kc3GYXgZC1q6KS4nVJyMIaHqfleFnT3l7v_4', gid: '1930440204', selectedColumns: ['Timestamp', 'Employee Name', 'Department', 'Required From (Person Name)', 'Challenge / Question', 'Solution 1'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Project Specification Changes',formUrl:'https://forms.gle/2Zew9NZYBjbF32bE6', docId: '1oOS8lE1JviRkNhbM7FP_0VUxPV9FZgMU70t_j0A_N2A', gid: '944341180', selectedColumns: ['Date', 'Project Name', 'Specific Changes / Additional Work', 'Cost Change (If Any)', 'Requested / Instructed By', 'Approval Status'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'shubham-p',
    name: 'Shubham Pawar',
    designation: 'Project',
    
    email: 'projects1@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/1vUHQd3U07-6NieBDnLPeDlTKkseCbGxd',
      dashboards: [
    {
      title: 'Airlife Gases Pvt. Ltd. Progress Dashboard',
      url: 'https://script.google.com/a/macros/avaniyshinterior.com/s/AKfycbxoo7jVxrxKUBRtqy05_b0T0EK676VBzEPpiK7ntxkTOO_LZdrN4gbEcIHECXni7wq_tg/exec'
    },
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
    }
   
  ],
    projects: [
      { 
        name: 'AISPL Proforma Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '1013826524', 
        selectedColumns: ['Sr.No.', 'Proforma Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL Tax Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '665653959', 
        selectedColumns: ['Sr.No.', 'Tax Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL PO To Vendor', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '286319358', 
        selectedColumns: ['Sr.No.', 'PO No.','Vendor Name', 'Project Name','Remarks','Created By'] 
      },
    ],
    sheets: [
      { name: 'Daily Report',formUrl:'https://forms.gle/YUV27rV5kPXKyn799',  docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '799922129', selectedColumns: ['Date', 'Project Name', 'Location', 'In - Time ', 'Out- Time', 'Have you done site visit?','Described Days Activities (Mentioned by Points) In Office','Described Days Activities (Mentioned by Points) In Site'] },
      { name: 'Petrol Allowance',formUrl:'https://forms.gle/2EmAJQdZ7f2BwMLF9', docId: '1qbbbN4uU0x1UFC3rIzkO6lekrFw3A7XD1lx7zZYxSxE', gid: '1266941161', selectedColumns: ['Date', 'Name', 'From', 'To', 'Km','Others','Upload'] },
      { name: 'Safety Check',formUrl:'https://forms.gle/gRj1gRTZSnvygyVV6', docId: '1Lub7fEdgOKBjfuLDpMhYQ4do78_DamGxLasxjIbf9Vo', gid: '1997998379', selectedColumns: ['Date', 'Project Member', 'Project Name', 'Location', 'Agency Name', 'Total Labour Count', 'PPE Kit', 'Gadgets Check'] },
      { name: 'Delivery Challan',formUrl:'https://forms.gle/EuBCvSYkfQVYjBYw7', docId: '1ssmVTMIvMmNcqm5oloGabxX6XrWd-qMWCxzb5QYdc6s', gid: '1102974409', selectedColumns: ['Date', 'Project Name', 'Name', 'Work', 'Challan', 'Returnable Materials List', 'Reason'] },
      { name: 'Project Visit',formUrl:'https://forms.gle/ZRpDTA4KUkGnbwtX8', docId: '11TLkJxGV3EFz4ZdVqKpuX3O-8FV4TrlMIYjxyAZ0lqY', gid: '2045538987', selectedColumns: ['Date', 'Project Site Visitor', 'Project Name', 'Location', 'Visit Purpose', 'Observation'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Upload URD',formUrl:'https://forms.gle/ojbkRA6NZ92w96mZ9', docId: '1ezKQET2dMdSkJ_rUmbMiWxFA0wSVmDrwM8XGDaajkF8', gid: '1029448347', selectedColumns: ['Date', 'Name', 'Project Name', 'Tax Invoice', 'URD Purchase'] },
      { name: 'Site Inspection Checklist', formUrl:'https://forms.gle/qfXppXnNK4JDP3tc8',docId: '1zpPnIESV3EBTrrGKMpjW2UNsbouv3bTA88YuN4XZEgs', gid: '1839387537', selectedColumns: ['Date', 'Name', 'Project Name', 'Work Activity', 'Upload'] },
      { name: 'Debit Note',formUrl:'https://forms.gle/RGcNHw5EjYBrrbfv9', docId: '1rc9AKbkiagJLYpNXvaxbzAhVAWhGJH4AuTENu1NknB0', gid: '12767300', selectedColumns: ['Date', 'Name', 'Project Name', 'Vendor Name', 'Debit To (Worker Name)', 'Reason', 'Amount', 'Approved By'] },
      { name: 'Delegation Sheet Team', docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Help Slip',formUrl:'https://forms.gle/naMThh9BWnzcAme38', docId: '16R8q7J5kc3GYXgZC1q6KS4nVJyMIaHqfleFnT3l7v_4', gid: '1930440204', selectedColumns: ['Timestamp', 'Employee Name', 'Department', 'Required From (Person Name)', 'Challenge / Question', 'Solution 1'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Project Specification Changes', formUrl:'https://forms.gle/2Zew9NZYBjbF32bE6',docId: '1oOS8lE1JviRkNhbM7FP_0VUxPV9FZgMU70t_j0A_N2A', gid: '944341180', selectedColumns: ['Date', 'Project Name', 'Specific Changes / Additional Work', 'Cost Change (If Any)', 'Requested / Instructed By', 'Approval Status'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'saurav-r',
    name: 'Saurav Rathod',
    designation: 'Project',
 
    email: 'sauravrathod281@gmail.com',
    photo: 'https://lh3.googleusercontent.com/d/1AIjrFcKQZSCFbXTrc0dmqG0RVgJyXvun',

    dashboards: [
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
         }
  ],
    sheets: [
      { name: 'Daily Report', formUrl:'https://forms.gle/YUV27rV5kPXKyn799', docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '799922129', selectedColumns: ['Date', 'Project Name', 'Location', 'In - Time ', 'Out- Time', 'Have you done site visit?','Described Days Activities (Mentioned by Points) In Office','Described Days Activities (Mentioned by Points) In Site'] },
      { name: 'Petrol Allowance',formUrl:'https://forms.gle/2EmAJQdZ7f2BwMLF9', docId: '1qbbbN4uU0x1UFC3rIzkO6lekrFw3A7XD1lx7zZYxSxE', gid: '1266941161', selectedColumns: ['Date', 'Name', 'From', 'To', 'Km','Others','Upload'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Safety Check',formUrl:'https://forms.gle/gRj1gRTZSnvygyVV6', docId: '1Lub7fEdgOKBjfuLDpMhYQ4do78_DamGxLasxjIbf9Vo', gid: '1997998379', selectedColumns: ['Date', 'Project Member', 'Project Name', 'Location', 'Agency Name', 'Total Labour Count', 'PPE Kit', 'Gadgets Check'] },
      { name: 'Delivery Challan',formUrl:'https://forms.gle/EuBCvSYkfQVYjBYw7', docId: '1ssmVTMIvMmNcqm5oloGabxX6XrWd-qMWCxzb5QYdc6s', gid: '1102974409', selectedColumns: ['Date', 'Project Name', 'Name', 'Work', 'Challan', 'Returnable Materials List', 'Reason'] }, 
      { name: 'Daily Video Call', docId: '16wXUF_fWDvbdBZf63sZiIU0hCkI-qjnFLGgFui9t4yY', gid: '2092959791', selectedColumns: ['Name', 'Task', 'Planned', 'Actual', 'Status'] },
      { name: 'Upload URD',formUrl:'https://forms.gle/ojbkRA6NZ92w96mZ9', docId: '1ezKQET2dMdSkJ_rUmbMiWxFA0wSVmDrwM8XGDaajkF8', gid: '1029448347', selectedColumns: ['Date', 'Name', 'Project Name', 'Tax Invoice', 'URD Purchase'] },
      { name: 'Site Inspection Checklist',formUrl:'https://forms.gle/qfXppXnNK4JDP3tc8', docId: '1zpPnIESV3EBTrrGKMpjW2UNsbouv3bTA88YuN4XZEgs', gid: '1839387537', selectedColumns: ['Date', 'Name', 'Project Name', 'Work Activity', 'Upload'] },
      { name: 'Debit Note', formUrl:'https://forms.gle/RGcNHw5EjYBrrbfv9',docId: '1rc9AKbkiagJLYpNXvaxbzAhVAWhGJH4AuTENu1NknB0', gid: '12767300', selectedColumns: ['Date', 'Name', 'Project Name', 'Vendor Name', 'Debit To (Worker Name)', 'Reason', 'Amount', 'Approved By'] },
      { name: 'Delegation Sheet Team', docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Help Slip',formUrl:'https://forms.gle/naMThh9BWnzcAme38', docId: '16R8q7J5kc3GYXgZC1q6KS4nVJyMIaHqfleFnT3l7v_4', gid: '1930440204', selectedColumns: ['Timestamp', 'Employee Name', 'Department', 'Required From (Person Name)', 'Challenge / Question', 'Solution 1'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'kiran-c',
    name: 'Kiran Chabukswar',
    designation: 'Project',
   
    email: 'chabukswarkiran73@gmail.com',
    photo: 'https://lh3.googleusercontent.com/d/1ZGkkyPPLjQ6ZQjufHvY39lSgpxkdFEwZ',
      dashboards: [
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
         }
  ],
    sheets: [
      { name: 'Daily Report',formUrl:'https://forms.gle/YUV27rV5kPXKyn799',  docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '799922129', selectedColumns: ['Date', 'Project Name', 'Location', 'In - Time ', 'Out- Time', 'Have you done site visit?','Described Days Activities (Mentioned by Points) In Office','Described Days Activities (Mentioned by Points) In Site'] },
      { name: 'Petrol Allowance',formUrl:'https://forms.gle/2EmAJQdZ7f2BwMLF9', docId: '1qbbbN4uU0x1UFC3rIzkO6lekrFw3A7XD1lx7zZYxSxE', gid: '1266941161', selectedColumns: ['Date', 'Name', 'From', 'To', 'Km','Others','Upload'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Safety Check',formUrl:'https://forms.gle/gRj1gRTZSnvygyVV6', docId: '1Lub7fEdgOKBjfuLDpMhYQ4do78_DamGxLasxjIbf9Vo', gid: '1997998379', selectedColumns: ['Date', 'Project Member', 'Project Name', 'Location', 'Agency Name', 'Total Labour Count', 'PPE Kit', 'Gadgets Check'] },
      { name: 'Delivery Challan',formUrl:'https://forms.gle/EuBCvSYkfQVYjBYw7', docId: '1ssmVTMIvMmNcqm5oloGabxX6XrWd-qMWCxzb5QYdc6s', gid: '1102974409', selectedColumns: ['Date', 'Project Name', 'Name', 'Work', 'Challan', 'Returnable Materials List', 'Reason'] }, 
      { name: 'Upload URD',formUrl:'https://forms.gle/ojbkRA6NZ92w96mZ9', docId: '1ezKQET2dMdSkJ_rUmbMiWxFA0wSVmDrwM8XGDaajkF8', gid: '1029448347', selectedColumns: ['Date', 'Name', 'Project Name', 'Tax Invoice', 'URD Purchase'] },
      { name: 'Site Inspection Checklist',formUrl:'https://forms.gle/qfXppXnNK4JDP3tc8', docId: '1zpPnIESV3EBTrrGKMpjW2UNsbouv3bTA88YuN4XZEgs', gid: '1839387537', selectedColumns: ['Date', 'Name', 'Project Name', 'Work Activity', 'Upload'] },
      { name: 'Debit Note', formUrl:'https://forms.gle/RGcNHw5EjYBrrbfv9',docId: '1rc9AKbkiagJLYpNXvaxbzAhVAWhGJH4AuTENu1NknB0', gid: '12767300', selectedColumns: ['Date', 'Name', 'Project Name', 'Vendor Name', 'Debit To (Worker Name)', 'Reason', 'Amount', 'Approved By'] },
      { name: 'Delegation Sheet Team', docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Help Slip',formUrl:'https://forms.gle/naMThh9BWnzcAme38', docId: '16R8q7J5kc3GYXgZC1q6KS4nVJyMIaHqfleFnT3l7v_4', gid: '1930440204', selectedColumns: ['Timestamp', 'Employee Name', 'Department', 'Required From (Person Name)', 'Challenge / Question', 'Solution 1'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'bhakti-b',
    name: 'Bhakti Bule',
    designation: 'Designer',
    email: 'design1@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/1VLQ_MT-ER1OQqio7Nzx28VZ6WYUxd39m',
      dashboards: [
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
         }
  ],
    sheets: [
      { name: 'Daily Report',formUrl:'https://docs.google.com/forms/d/e/1FAIpQLSf7y6FpZ4Ff4Ihi7Jq6SyqMXHEnvXkaWSQ24v6RPQCMcuqcGw/viewform', docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '1518539535', selectedColumns: ['Date', 'Project', 'Location', 'In-Time', 'Out-time'] },
      { name: 'Daily Video Call', docId: '16wXUF_fWDvbdBZf63sZiIU0hCkI-qjnFLGgFui9t4yY', gid: '2092959791', selectedColumns: ['Name', 'Task', 'Planned', 'Actual', 'Status'] },
      { name: 'Petrol Allowance',formUrl:'https://forms.gle/2EmAJQdZ7f2BwMLF9', docId: '1qbbbN4uU0x1UFC3rIzkO6lekrFw3A7XD1lx7zZYxSxE', gid: '1266941161', selectedColumns: ['Date', 'Name', 'From', 'To', 'Km','Others','Upload'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Delegation Sheet Team', docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Help Slip',formUrl:'https://forms.gle/naMThh9BWnzcAme38', docId: '16R8q7J5kc3GYXgZC1q6KS4nVJyMIaHqfleFnT3l7v_4', gid: '1930440204', selectedColumns: ['Timestamp', 'Employee Name', 'Department', 'Required From (Person Name)', 'Challenge / Question', 'Solution 1'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'sakshi-b',
    name: 'Sakshi Makote',
    designation: 'Designer',
    
    email: 'design2@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/10KJzpS3TIVgGh6DgQMW4mm6vz30fxInI',
      dashboards: [
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
         }
  ],
    sheets: [
       { name: 'Daily Report',formUrl:'https://docs.google.com/forms/d/e/1FAIpQLSf7y6FpZ4Ff4Ihi7Jq6SyqMXHEnvXkaWSQ24v6RPQCMcuqcGw/viewform', docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '1518539535', selectedColumns: ['Date', 'Project', 'Location', 'In-Time', 'Out-time'] },
      { name: 'Petrol Allowance',formUrl:'https://forms.gle/2EmAJQdZ7f2BwMLF9', docId: '1qbbbN4uU0x1UFC3rIzkO6lekrFw3A7XD1lx7zZYxSxE', gid: '1266941161', selectedColumns: ['Date', 'Name', 'From', 'To', 'Km','Others','Upload'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Delegation Sheet Team', docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Help Slip',formUrl:'https://forms.gle/naMThh9BWnzcAme38', docId: '16R8q7J5kc3GYXgZC1q6KS4nVJyMIaHqfleFnT3l7v_4', gid: '1930440204', selectedColumns: ['Timestamp', 'Employee Name', 'Department', 'Required From (Person Name)', 'Challenge / Question', 'Solution 1'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'namrata-r',
    name: 'Namrata Raut',
    designation: 'Executive Assistant',
   
    email: 'ea@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/10owEBw3gPnFrCn7jYKFFI3UOvwHlVgxk',
    
      dashboards: [
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
         }
  ],
    projects: [
      { 
        name: 'AISPL Proforma Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '1013826524', 
        selectedColumns: ['Sr.No.', 'Proforma Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL Tax Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '665653959', 
        selectedColumns: ['Sr.No.', 'Tax Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL PO To Vendor', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '286319358', 
        selectedColumns: ['Sr.No.', 'PO No.','Vendor Name', 'Project Name','Remarks','Created By'] 
      },
       { 
        name: 'Insurance Checklist', 
        docId: '1g6ZEWY32KmJlRhoBoxdEolQP_SPjwDbLlWCvmy7vPuk', 
        gid: '2092959791', 
        selectedColumns: ['Name','Task', 'Doer', 'Planned', 'Actual', 'Status'] 
      },
      { 
        name: 'Delegation Sheet Team',
        formUrl:'https://script.google.com/macros/s/AKfycbzC5FlAOwLsVB_FtxxqWfv4LwicmnUip04VkOu_Suu0yBvaL5lYvfLi0Lh_gC2b_uUj/exec', 
        docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', 
        gid: '1184708924', 
        selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] 
      },
      { 
        name: 'Delegation Sheet PH',
        formUrl:'https://script.google.com/macros/s/AKfycbz4qv33ACzgoPFqJPE54Y7fTU_ivcBU7wQ2026MVZXglVMF0uqJcAdWGw5m8UP68QfZMA/exec', 
        docId: '1JsKyve_bNF80c-D-jvLAmFGfDKE6xLzYBtiFep0UXlc', 
        gid: '1184708924', 
        selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] 
      } 

    ],
 
    sheets: [
      { name: 'Office Expenses',formUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeFG1ZBY4mstlGPDpcNhUb9vi2WiJGBr3aG2cuTtYqPNXf4Nw/viewform?usp=header', docId: '1N2DF6vzSoJcIxwL2makablsGtDlMB-rxhcWT3_VLHBY', gid: '440445714', selectedColumns: ['Date', 'Paid to', 'Amount', 'Reason', 'Categories','URD Purchase'] },
      { 
        name: 'Checklist', 
        docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', 
        gid: '2092959791', 
        selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] 
      },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'anuradha-s',
    name: 'Anuradha Bansode',
    designation: 'MIS Executive',
  
    email: 'mis@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/1CITTMe060N0kMHO8SVGXomLI_US1yqpn',
      dashboards: [
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
         }
  ],
    sheets: [
      { name: 'Daily Report',formUrl:'https://forms.gle/jL79VhahgCkduAYt6', docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '1518539535', selectedColumns: ['Date', 'In-Time', 'Out-time'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Delegation Sheet Team', docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Help Slip',formUrl:'https://forms.gle/naMThh9BWnzcAme38', docId: '16R8q7J5kc3GYXgZC1q6KS4nVJyMIaHqfleFnT3l7v_4', gid: '1930440204', selectedColumns: ['Timestamp', 'Employee Name', 'Department', 'Challenge / Question', 'Solution 1'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'harshada-s', 
    name: 'Harshada Shirsale',
    designation: 'CRM & PC',
  
    email: 'crm@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/1Cvdn631tScsIiJkwYCRM6aJC60bRlR8d',
      dashboards: [
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
         }
  ],
    sheets: [
      { name: 'Daily Report',formUrl:'https://forms.gle/jL79VhahgCkduAYt6', docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '1518539535', selectedColumns: ['Date', 'In-Time', 'Out-time'] },
      { name: 'Site Expenses', formUrl:'https://forms.gle/9uuXgx6oF3okLmxb7',docId: '13Vo3YIrbPT06a4ClN-BS-eO1DOCSNzo5dnn-XfO0Tds', gid: '1142344274', selectedColumns: ['Date', 'Project Name', 'Paid to', 'Amount', 'Reason','URD Purchase'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Delegation Sheet Team', docId: '1680NhH8rKFTKeY3HSZGV_izgEi4QieHiirbcbRi7hTA', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Help Slip',formUrl:'https://forms.gle/naMThh9BWnzcAme38', docId: '16R8q7J5kc3GYXgZC1q6KS4nVJyMIaHqfleFnT3l7v_4', gid: '1930440204', selectedColumns: ['Timestamp', 'Employee Name', 'Department', 'Required From (Person Name)', 'Challenge / Question', 'Solution 1'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  },
  {
    id: 'accounts-team',
    name: 'Kiran Hole',
    designation: 'Accounts',
  
    email: 'accounts@avaniyshinterior.com',
    photo: 'https://lh3.googleusercontent.com/d/1gZ5VMVCvdmH4PjVik-qxWXH9ooSVJFcB',
      dashboards: [
         {
      title: 'Checklist Dashboard',
      url: 'https://datastudio.google.com/reporting/b30bad2f-4552-4c9f-8d9d-b8afd5056244/page/gcG5F'
         }
  ],
    
    projects: [
      { 
        name: 'AISPL Proforma Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '1013826524', 
        selectedColumns: ['Sr.No.', 'Proforma Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL Tax Invoice', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '665653959', 
        selectedColumns: ['Sr.No.', 'Tax Invoice No.', 'Project Name','Authorized Signatory'] 
      },
       { 
        name: 'AISPL PO To Vendor', 
        docId: '1JZaXvcCxkq0jj4PETPWuwhRza570xBVIa3YBnxqEW8Y', 
        gid: '286319358', 
        selectedColumns: ['Sr.No.', 'PO No.','Vendor Name', 'Project Name','Remarks','Created By'] 
      },
    ],
 sheets: [
      { name: 'Office Expenses',formUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeFG1ZBY4mstlGPDpcNhUb9vi2WiJGBr3aG2cuTtYqPNXf4Nw/viewform?usp=header', docId: '1N2DF6vzSoJcIxwL2makablsGtDlMB-rxhcWT3_VLHBY', gid: '440445714', selectedColumns: ['Date', 'Paid to', 'Amount', 'Reason', 'Categories','URD Purchase'] },
      { name: 'Delegation Score PH', docId: '1JsKyve_bNF80c-D-jvLAmFGfDKE6xLzYBtiFep0UXlc', gid: '1184708924', selectedColumns: ['Name', 'Task', 'First Date', 'Revision 1','Revision 2', 'Total Revision','Status','Actual Completion Date'] },
      { name: 'Checklist', docId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw', gid: '2092959791', selectedColumns: ['Task', 'Doer', 'Planned', 'Actual', 'Status'] },
      { name: 'Leave Application', formUrl:'https://docs.google.com/forms/d/e/1FAIpQLScVKjl4j1wPbzV4QFAK9TlP8xpOkrHYxej75WTdFzt-lkV4Dg/viewform',docId: '1mrjfYpGMSMY-Em7Y4O4m9JZgfED0gdvbdPBD9qscgcM', gid: '148992', selectedColumns: ['Employee Name', 'Leave Type', 'Reason/Purpose', 'Half Day', 'Start Date of Leave','End Date of Leave'] }

    ]
  }
];

let activeEmployee = null;
let currentActiveSheet = null;

// ==================== MAIN PAGE INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (isLoggedIn !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  const userName = sessionStorage.getItem('loggedInUserName') || 'User';
  const userNameElem = document.getElementById('logged-in-user-name');
  if (userNameElem) {
    userNameElem.innerText = userName;
  }

 const role = sessionStorage.getItem('loggedInUserRole');
const systemNavBtn = document.querySelector('.nav-btn[data-target="system-view"]'); 

if (systemNavBtn) {
  if (role !== 'admin') {
    systemNavBtn.style.display = 'none'; 
  } else {
    systemNavBtn.style.display = 'flex'; 
  }
}

  const accessIds = JSON.parse(sessionStorage.getItem('accessIds') || '[]');
  let displayData = employeesData;

  if (role && role !== 'admin') {
    displayData = employeesData.filter(emp => accessIds.includes(emp.id));
  }

  setupNavigation();

  const empContainer = document.getElementById('designation-groups-container');
  if (empContainer) {
    renderEmployeeDirectory(displayData);
    setupEmployeeSearch();
  }

  setupTableSearch();
  setupModalEvents();

  const totalEmpElem = document.getElementById('total-employees');
  if (totalEmpElem) {
    totalEmpElem.innerText = displayData.length;
  }

  const pcTable = document.getElementById('data-table');
  if (pcTable) {
    loadSheetDataPC('airlife');
  }
});

function setupNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.content-view');

  navBtns.forEach(btn => {
    btn.onclick = (e) => {
      const href = btn.getAttribute('href');
      if (href && href !== '#' && href.endsWith('.html')) {
        return true; 
      }

      e.preventDefault();
      const targetView = btn.getAttribute('data-target');
      if (!targetView) return;

      navBtns.forEach(b => b.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      const targetElem = document.getElementById(targetView);
      if (targetElem) targetElem.classList.add('active');
    };
  });

  const backBtn = document.getElementById('back-to-employees-btn');
  if (backBtn) {
    backBtn.onclick = () => {
      views.forEach(v => v.classList.remove('active'));
      const empView = document.getElementById('employee-view');
      if (empView) empView.classList.add('active');
    };
  }
}

function renderEmployeeDirectory(data) {
  const container = document.getElementById('designation-groups-container');
  if (!container) return;
  container.innerHTML = '';

  if (!data || data.length === 0) {
    container.innerHTML = `<div class="placeholder-box"><p>No employees match your search or access profile.</p></div>`;
    return;
  }

  const groups = {};
  data.forEach(emp => {
    if (!groups[emp.designation]) {
      groups[emp.designation] = [];
    }
    groups[emp.designation].push(emp);
  });

  Object.keys(groups).forEach(designation => {
    const groupSection = document.createElement('div');
    groupSection.className = 'designation-group';

    const title = document.createElement('h2');
    title.className = 'designation-title';
    title.innerText = designation;
    groupSection.appendChild(title);

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'cards-grid';

    groups[designation].forEach(emp => {
      const card = document.createElement('div');
      card.className = 'employee-card';
      card.innerHTML = `
        <img src="${emp.photo}" alt="${emp.name}" onerror="this.src='https://via.placeholder.com/85?text=User'">
        <h3>${escapeHtml(emp.name)}</h3>
        <p>${escapeHtml(emp.designation)}</p>
      `;
      card.onclick = () => openEmployeeProfile(emp);
      cardsGrid.appendChild(card);
    });

    groupSection.appendChild(cardsGrid);
    container.appendChild(groupSection);
  });
}

function setupEmployeeSearch() {
  const searchInput = document.getElementById('employee-search-input');
  if (!searchInput) return;

  const role = sessionStorage.getItem('loggedInUserRole');
  const loggedInEmpId = sessionStorage.getItem('loggedInEmpId');

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    
    let baseData = employeesData;
    if (role && role !== 'admin') {
      baseData = employeesData.filter(emp => emp.id === loggedInEmpId);
    }

    const filtered = baseData.filter(emp => 
      emp.name.toLowerCase().includes(term) || 
      emp.designation.toLowerCase().includes(term)
    );
    renderEmployeeDirectory(filtered);
  });
}

function openEmployeeProfile(emp) {
  activeEmployee = emp;

  const nameElem = document.getElementById('profile-name');
  const desigElem = document.getElementById('profile-designation');
 
  const emailElem = document.getElementById('profile-email');
  
  if (nameElem) nameElem.innerText = emp.name;
  if (desigElem) desigElem.innerText = emp.designation;

  if (emailElem) emailElem.innerText = emp.email;
  
  const imgElem = document.getElementById('profile-img');
  if (imgElem) {
    imgElem.src = emp.photo;
    imgElem.onerror = () => { imgElem.src = 'https://via.placeholder.com/120?text=User'; };
  }


  
 
const dashContainer = document.getElementById('profile-dashboard-container');

if (dashContainer) {
  dashContainer.innerHTML = ''; 

  if (emp.dashboards && emp.dashboards.length > 0) {
    let html = '<div class="dashboards-grid" style="display: flex; gap: 15px; flex-wrap: wrap;">';
    
    emp.dashboards.forEach(dash => {
      html += `
        <div class="system-card" style="flex: 1; min-width: 280px; margin-bottom: 15px;">
          <div class="system-card-header">
            <div class="system-card-icon" style="background-color: #fff7ed; color: #ea580c;">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div class="system-card-info">
              <h3>${escapeHtml(dash.title || 'Dashboard')}</h3>
              
            </div>
          </div>
       
          <a href="${escapeHtml(dash.url)}" target="_blank" class="btn-open-system" style="background-color: #e37b0d;">
            <span>Open Dashboard</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      `;
    });

    html += '</div>';
    dashContainer.innerHTML = html;
    dashContainer.style.display = 'block';

  } else if (emp.dashboard) {
    dashContainer.innerHTML = `
      <div class="system-card">
        <div class="system-card-header">
          <div class="system-card-icon" style="background-color: #fff7ed; color: #ea580c;">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <div class="system-card-info">
            <h3>${escapeHtml(emp.dashboardTitle || 'Dashboard')}</h3>
            <p>Project Management System</p>
          </div>
        </div>
        <a href="${escapeHtml(emp.dashboard)}" target="_blank" class="btn-open-system" style="background-color: #e37b0d;">
          <span>Open Dashboard</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;
    dashContainer.style.display = 'block';
  } else {
    dashContainer.style.display = 'none';
  }
}
const projectsGrid = document.getElementById('employee-projects-grid');
const projectBlock = document.getElementById('project-list-block');

if (projectsGrid && projectBlock) {
  projectsGrid.innerHTML = '';

 
  if (emp.projects && Array.isArray(emp.projects) && emp.projects.length > 0) {
    projectBlock.style.display = 'block'; 

    emp.projects.forEach(project => {
      project.isProject = true;

      const card = document.createElement('div');
      card.className = 'sheet-card';

      let formBtnHtml = project.formUrl 
        ? `<a href="${escapeHtml(project.formUrl)}" target="_blank" class="btn-action btn-open-form" title="Open Google Form">
            <i class="fa-solid fa-pen-to-square"></i> Open Form
          </a>`
        : `<button class="btn-action btn-disabled" disabled title="Form link not available">
            <i class="fa-solid fa-pen-to-square"></i> No Form
          </button>`;

      card.innerHTML = `
        <div class="sheet-card-title">
          <i class="fa-solid fa-folder-closed" style="color: #0284c7;"></i>
          <h4>${escapeHtml(project.name)}</h4>
        </div>
        <div class="sheet-card-actions">
          <button class="btn-action btn-view-sheet">
            <i class="fa-solid fa-table"></i> View Data
          </button>
          ${formBtnHtml}
        </div>
      `;

      const viewDataBtn = card.querySelector('.btn-view-sheet');
      if (viewDataBtn) {
        viewDataBtn.onclick = () => loadSheetDataJSONP(project);
      }

      projectsGrid.appendChild(card);
    });
  } else {
    projectBlock.style.display = 'none'; 
  }
}

const sheetsGrid = document.getElementById('employee-sheets-grid');
if (sheetsGrid) {
  sheetsGrid.innerHTML = '';
  emp.sheets.forEach(sheet => {
    sheet.isProject = false;

    const card = document.createElement('div');
    card.className = 'sheet-card';

    let formBtnHtml = '';
    if (sheet.formUrl) {
      formBtnHtml = `
        <a href="${escapeHtml(sheet.formUrl)}" target="_blank" class="btn-action btn-open-form" title="Open Google Form">
          <i class="fa-solid fa-pen-to-square"></i> Open Form
        </a>
      `;
    } else {
      formBtnHtml = `
        <button class="btn-action btn-disabled" disabled title="Form link not available">
          <i class="fa-solid fa-pen-to-square"></i> No Form
        </button>
      `;
    }

    card.innerHTML = `
      <div class="sheet-card-title">
        <i class="fa-solid fa-file-excel"></i>
        <h4>${escapeHtml(sheet.name)}</h4>
      </div>
      <div class="sheet-card-actions">
        <button class="btn-action btn-view-sheet">
          <i class="fa-solid fa-table"></i> View Data
        </button>
        ${formBtnHtml}
      </div>
    `;

    const viewDataBtn = card.querySelector('.btn-view-sheet');
    if (viewDataBtn) {
      viewDataBtn.onclick = () => loadSheetDataJSONP(sheet);
    }

    sheetsGrid.appendChild(card);
  });
}

  document.querySelectorAll('.content-view').forEach(v => v.classList.remove('active'));
  const profView = document.getElementById('profile-view');
  if (profView) profView.classList.add('active');
}

window.handleGvizResponse = function(response) {
  const scriptTag = document.getElementById('jsonp-gviz-script');
  if (scriptTag) scriptTag.remove();

  const loader = document.getElementById('modal-loader');
  const container = document.getElementById('modal-table-container');
  const toolbar = document.getElementById('modal-toolbar');

  if (loader) loader.style.display = 'none';

  if (!container) return;

  if (!response || response.status === 'error') {
    const errorMsg = response?.errors?.[0]?.detailed_message || "Access denied or Sheet Not Shared publicly.";
    container.innerHTML = `
      <div style="text-align:center; padding: 30px; color:#ef4444;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size:2rem; margin-bottom:10px;"></i>
        <p><strong>Error Loading Sheet:</strong> ${escapeHtml(errorMsg)}</p>
        <p style="font-size:0.85rem; color:#64748b; margin-top:8px;">
          Make sure sheet access is set to: <strong>"Anyone with the link can view"</strong>.
        </p>
      </div>`;
    return;
  }

  const table = response.table;
  if (!table || !table.cols) {
    container.innerHTML = `<p style="text-align:center; padding:20px;">No data structure found in sheet.</p>`;
    return;
  }

  const allHeaders = table.cols.map(c => c ? (c.label || c.id || '').trim() : '');
  const rows = table.rows || [];

  let filteredRows = [];

  const isProjectSheet = currentActiveSheet && currentActiveSheet.isProject === true;

  if (isProjectSheet) {
    filteredRows = rows;
  } else {
    const firstName = activeEmployee ? activeEmployee.name.split(' ')[0].toLowerCase() : '';
    const fullName = activeEmployee ? activeEmployee.name.toLowerCase() : '';

    const ignoreHeaders = [
      'approved from', 
      'approved by', 
      'paid to', 
      'debit to (worker name)', 
      'required from (person name)',
      'name of colleague work handover', 
      'reporting to',
      'required from',
      'mention others employee name'
    ];

    const targetOwnerIndices = [];
    allHeaders.forEach((header, idx) => {
      const headerLower = header.toLowerCase().trim();
      const shouldIgnore = ignoreHeaders.some(ig => headerLower.includes(ig));
      
      if (!shouldIgnore) {
        targetOwnerIndices.push(idx);
      }
    });

   filteredRows = rows.filter(r => {
      if (!r.c) return false;

      if (currentActiveSheet && currentActiveSheet.name.toLowerCase().includes('leave')) {
        const empNameIdx = allHeaders.findIndex(h => 
          h.toLowerCase().includes('employee name') || h.toLowerCase() === 'name'
        );

        if (empNameIdx !== -1) {
          const cell = r.c[empNameIdx];
          if (!cell || cell.v === null || cell.v === undefined) return false;
          const val = String(cell.v).toLowerCase();
          return val.includes(fullName) || val.includes(firstName);
        }
      }

   
      return targetOwnerIndices.some(idx => {
        const cell = r.c[idx];
        if (!cell || cell.v === null || cell.v === undefined) return false;
        const val = String(cell.v).toLowerCase();
        return val.includes(fullName) || val.includes(firstName);
      });
    });
  }

  if (currentActiveSheet && currentActiveSheet.name.toLowerCase().includes('checklist')) {
    const plannedColIdx = allHeaders.findIndex(h => 
      h.toLowerCase().includes('planned') || h.toLowerCase().includes('date')
    );

    if (plannedColIdx !== -1) {
      const today = new Date();
      today.setHours(23, 59, 59, 999);

      filteredRows = filteredRows.filter(r => {
        const dateCell = r.c ? r.c[plannedColIdx] : null;
        const taskDate = parseGvizDate(dateCell);

        if (taskDate && taskDate > today) {
          return false;
        }
        return true;
      });
    }
  }

  if (filteredRows.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 35px; color:#64748b;">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 12px; color: #cbd5e1;"></i>
        <p>No data found for <strong>${escapeHtml(activeEmployee ? activeEmployee.name : '')}</strong>.</p>
      </div>`;
    return;
  }

  if (toolbar) toolbar.style.display = 'block';

  const selectedColsConfig = currentActiveSheet?.selectedColumns || [];
  let targetIndices = [];
  let displayHeaders = [];

  if (selectedColsConfig.length > 0) {
    selectedColsConfig.forEach(sc => {
      const idx = allHeaders.findIndex(h => h.toLowerCase() === sc.trim().toLowerCase());
      if (idx !== -1) {
        targetIndices.push(idx);
        displayHeaders.push(allHeaders[idx]);
      }
    });
  }

  if (targetIndices.length === 0) {
    targetIndices = allHeaders.map((_, i) => i);
    displayHeaders = allHeaders.map((h, i) => h || `Column ${i + 1}`);
  }

  renderModalTable(displayHeaders, filteredRows, targetIndices, container);
};

function loadSheetDataJSONP(sheet) {
  currentActiveSheet = sheet;

  const modal = document.getElementById('sheet-modal');
  const title = document.getElementById('modal-sheet-title');
  const subtitle = document.getElementById('modal-sheet-subtitle');
  const loader = document.getElementById('modal-loader');
  const container = document.getElementById('modal-table-container');
  const toolbar = document.getElementById('modal-toolbar');
  const tableSearchInput = document.getElementById('table-search-input');

  if (title) title.innerText = sheet.name;
  if (subtitle) subtitle.innerText = `Filtered for: ${activeEmployee ? activeEmployee.name : ''}`;
  if (loader) loader.style.display = 'block';
  if (container) container.innerHTML = '';
  if (toolbar) toolbar.style.display = 'none';
  if (tableSearchInput) tableSearchInput.value = '';
  
  if (modal) modal.classList.add('show');

  const oldScript = document.getElementById('jsonp-gviz-script');
  if (oldScript) oldScript.remove();

  const script = document.createElement('script');
  script.id = 'jsonp-gviz-script';
  script.src = `https://docs.google.com/spreadsheets/d/${sheet.docId}/gviz/tq?gid=${sheet.gid}&headers=1&tqx=responseHandler:handleGvizResponse`;

  script.onerror = function() {
    if (loader) loader.style.display = 'none';
    if (container) {
      container.innerHTML = `
        <div style="text-align:center; padding: 30px; color:#ef4444;">
          <p><strong>Failed to reach Google Sheet. Please check your internet connection.</strong></p>
        </div>`;
    }
  };

  document.body.appendChild(script);
}

function renderModalTable(headers, rows, indices, container) {
  let html = `<table class="custom-data-table" id="active-modal-table"><thead><tr>`;
  
  headers.forEach(h => {
    html += `<th>${escapeHtml(h)}</th>`;
  });
  html += `</tr></thead><tbody>`;

  rows.forEach(r => {
    html += `<tr>`;
    indices.forEach(idx => {
      const cell = r.c ? r.c[idx] : null;
      const val = cell && cell.f ? cell.f : (cell && cell.v !== null && cell.v !== undefined ? cell.v : '');
      const strVal = String(val);

     
      const urlRegex = /(https?:\/\/[^\s,]+)/g;
      const matches = strVal.match(urlRegex);

      if (matches && matches.length > 0) {
      
        let linksHtml = matches.map((url, index) => {
        
          const cleanUrl = url.replace(/[,.]$/, '');
          const label = matches.length > 1 ? `Open Link ${index + 1}` : 'Open Link';
          
          return `<a href="${escapeHtml(cleanUrl)}" target="_blank" style="color:#f38b1c; font-weight:600; margin-right: 8px; display: inline-block;">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> ${label}
                  </a>`;
        }).join(' ');

        html += `<td>${linksHtml}</td>`;
      } else {
     
        html += `<td>${escapeHtml(strVal)}</td>`;
      }
    });
    html += `</tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}
function setupTableSearch() {
  const tableSearchInput = document.getElementById('table-search-input');
  if (!tableSearchInput) return;

  tableSearchInput.addEventListener('input', (e) => {
    const filter = e.target.value.toLowerCase().trim();
    const table = document.getElementById('active-modal-table');
    if (!table) return;

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? '' : 'none';
    });
  });
}

function setupModalEvents() {
  const modal = document.getElementById('sheet-modal');
  const closeBtn = document.getElementById('close-modal-x');

  const closeModal = () => {
    if (modal) modal.classList.remove('show');
    const scriptTag = document.getElementById('jsonp-gviz-script');
    if (scriptTag) scriptTag.remove();
  };

  if (closeBtn) closeBtn.onclick = closeModal;

  window.onclick = (event) => {
    if (event.target === modal) closeModal();
  };
}

const SHEET_CONFIG = {
  airlife: {
    sheetId: '1mdlwmrJtiK4UgtWRGXhnV4ooIu9ZKOq4upgm7V8DbQg',
    gid: '0',
    selectedColumns: [0, 1, 3, 4, 5] 
  },
  airtech: {
    sheetId: '18HE85rKQRsC70A37F6c1LCFSzCGpme3v_tceQMC3BxY',
    gid: '0',
    selectedColumns: [1, 2, 3, 4, 5] 
  },
  checklist: {
    sheetId: '1m_P5_eP9FvD9eaYvanmLlV833cscTvk2xJk_c39cbZw',
    gid: '2092959791',
    selectedColumns: [1, 5, 6, 7] 
  }
};

let currentTab = 'airlife';

function switchTab(event, tabKey) {
  currentTab = tabKey;

  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
  
  loadSheetDataPC(tabKey);
}

window.handlePCGvizResponse = function(response) {
  const scriptTag = document.getElementById('pc-jsonp-script');
  if (scriptTag) scriptTag.remove();

  const spinner = document.getElementById('loading-spinner');
  const table = document.getElementById('data-table');
  const thead = document.getElementById('table-head');
  const tbody = document.getElementById('table-body');

  const config = SHEET_CONFIG[currentTab];

  if (!response || response.status === 'error') {
    const errorMsg = response?.errors?.[0]?.detailed_message || "Access Denied or Sheet is Private.";
    if (spinner) spinner.innerText = 'Error loading sheet: ' + errorMsg;
    return;
  }

  const cols = response.table ? response.table.cols : [];
  const rows = response.table ? response.table.rows : [];

  if (thead) {
    thead.innerHTML = '<tr>' + 
      config.selectedColumns.map(colIndex => {
        const label = cols[colIndex] ? (cols[colIndex].label || `Col ${colIndex + 1}`) : '';
        return `<th>${escapeHtml(label)}</th>`;
      }).join('') + 
      '</tr>';
  }

  if (tbody) {
    tbody.innerHTML = '';
    const fragment = document.createDocumentFragment();

    rows.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = config.selectedColumns.map(colIndex => {
        const cell = row.c ? row.c[colIndex] : null;
        const cellValue = cell ? (cell.f || (cell.v !== null && cell.v !== undefined ? cell.v : '')) : '';
        return `<td>${escapeHtml(String(cellValue))}</td>`;
      }).join('');
      fragment.appendChild(tr);
    });

    tbody.appendChild(fragment);
  }

  if (spinner) spinner.style.display = 'none';
  if (table) table.style.display = 'table';
};

function loadSheetDataPC(tabKey) {
  currentTab = tabKey;
  const config = SHEET_CONFIG[tabKey];
  const spinner = document.getElementById('loading-spinner');
  const table = document.getElementById('data-table');

  if (!config) return;

  if (spinner) {
    spinner.style.display = 'block';
    spinner.innerText = 'Loading...';
  }
  if (table) table.style.display = 'none';

  const oldScript = document.getElementById('pc-jsonp-script');
  if (oldScript) oldScript.remove();

  const script = document.createElement('script');
  script.id = 'pc-jsonp-script';
  script.src = `https://docs.google.com/spreadsheets/d/${config.sheetId}/gviz/tq?gid=${config.gid}&headers=1&tqx=responseHandler:handlePCGvizResponse`;

  script.onerror = function() {
    if (spinner) {
      spinner.innerText = 'Error: Failed to fetch sheet. Check your internet or Sheet Link.';
    }
  };

  document.body.appendChild(script);
}

function escapeHtml(str) {
  return (str || '')
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseGvizDate(cell) {
  if (!cell) return null;
  
  if (typeof cell.v === 'string' && cell.v.startsWith('Date(')) {
    const parts = cell.v.match(/\d+/g);
    if (parts && parts.length >= 3) {
      return new Date(parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2]));
    }
  }
  
  if (cell.v instanceof Date) return cell.v;

  const valStr = String(cell.f || cell.v || '').trim();
  if (!valStr) return null;

  const ddmmyyyy = valStr.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (ddmmyyyy) {
    return new Date(parseInt(ddmmyyyy[3]), parseInt(ddmmyyyy[2]) - 1, parseInt(ddmmyyyy[1]));
  }

  const parsed = Date.parse(valStr);
  if (!isNaN(parsed)) return new Date(parsed);

  return null;
}



 document.addEventListener("DOMContentLoaded", function () {
      if (typeof renderEmployees === 'function') {
        renderEmployees();
      } else if (typeof initEmployeePage === 'function') {
        initEmployeePage();
      }
    });

    function logout() {
      sessionStorage.removeItem('isLoggedIn');
      window.location.href = 'login.html';
    }

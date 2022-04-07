import MaterialTable from "material-table";
import React from 'react'

export default function UserProfileTable() {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);

    const data = [
        { OperationType: "Root Canal", datetime: "21-2-2022", status: "Completed", fee: "100$" },
        { OperationType: "Extraction", datetime: "20-3-2021", status: "Completed", fee: "100$" },
    ];
    const columns = [

        {
            title: "Operation Type",
            field: "OperationType",
        },
        {
            title: "Date and Time",
            field: "datetime",
        },
        {
            title: "Status",
            field: "status",
        },
        {
            title: "Fee",
            field: "fee",
        },

    ];
    return (
        <MaterialTable
            title="Latest Visits"
            data={data}
            columns={columns}


            options={{
                tableLayout: "auto", columnResizable: false, search: true, paging: true, filtering: false, grouping: true, exportButton: true,
                headerStyle: {
                    backgroundColor: '#27c4d3',
                    color: '#FFF'
                },
                rowStyle: rowData => ({
                    backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                })
            }
            }
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
            cellEditable={{
                cellStyle: {},
                onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                    return new Promise((resolve, reject) => {
                        console.log('newValue: ' + newValue);
                        setTimeout(resolve, 4000);
                    });
                }
            }}
        />
    );
}

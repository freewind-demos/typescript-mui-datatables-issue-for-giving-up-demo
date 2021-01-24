import React from 'react'
import MUIDataTable, {MUIDataTableColumn} from "mui-datatables";

type User = {
  id: number; name: string, company: string, city: string;
}

const columns: MUIDataTableColumn[] = [
  {name: "name", label: "Name", options: {filter: true, sort: true,}},
  {name: "company", label: "Company", options: {filter: true, sort: false,}},
  {
    name: "city", label: "City", options: {
      filter: true, sort: false, customBodyRender: (value, tableMeta, updateValue) => {
        return <pre>{JSON.stringify({value, tableMeta, updateValue}, null, 4)}</pre>
      }
    }
  },
]

const users: User[] = [
  {id: 111, name: "AAA", company: "Test Corp 1", city: "Yonkers",},
  {id: 222, name: "BBB", company: "Test Corp 2", city: "Hartford",},
  {id: 333, name: "CCC", company: "Test Corp 3", city: "Tampa",},
  {id: 444, name: "DDD", company: "Test Corp 3", city: "Dallas",},
]

export default function Hello() {
  return <MUIDataTable
    title={"Employee List"}
    data={users}
    columns={columns}
  />
}

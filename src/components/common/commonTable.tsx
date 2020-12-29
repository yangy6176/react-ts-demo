import React, { useEffect } from 'react'
import { Table } from 'antd'

function CommonTable(props: any) {
  useEffect(() => {
    console.log(props)
  })
  return(
    <>
      <Table
        dataSource={ props.tableData.data ? props.tableData.data : []  }
        columns={ props.column } loading={ props.tableData.loading }
        bordered
        pagination={{
          showSizeChanger: true,
          showQuickJumper: false,
          showTotal: () => `共${props.tableData.total}条`,
          total: props.tableData.total,
          current: props.tableData.page,
          pageSize: props.tableData.pageSize
        }}
      >

      </Table>
    </>
  )
}
export default CommonTable
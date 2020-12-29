import React, { useEffect, useState } from 'react'
import CommonTable from '../../components/common/commonTable'

function HomesIndex() {
  const [tableInformation] = useState([
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text: String) => <a href="#">{text}</a>
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    }
  ])
  const [tableData, setTableData] = useState({ data: [], loading: true })
  useEffect(() => {
    init()
  }, [])

  function init() {
    let obj: any = {
      data: [
        {
          name: '杨勇',
          age: 18,
          key: 0,
          address: '安徽省马鞍山市雨山区鹊桥小区'
        },
        {
          name: '张上网',
          age: 29,
          key: 1,
          address: '安徽省合肥市庐阳区'
        },
        {
          name: '汪胖子',
          age: 26,
          key: 2,
          address: '安徽省铜陵市枞阳县'
        }
      ],
      loading: false,
      total: 3,
      page: 1,
      pageSize: 10,

    }
    setTableData(obj)
  }

  return (
    <>
      <CommonTable tableData={tableData} column={tableInformation}></CommonTable>
    </>
  )
}

export default HomesIndex
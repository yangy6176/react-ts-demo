import React, {useEffect} from 'react'
import store from '../../store/index'

function HomeView() {
  useEffect(() => {
    console.log(store.getState())
  })
  return (
    <>
      首页主页
    </>
  )
}
export default HomeView
import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="grid grid-cols-[1.5fr_1fr_1fr] text-sm  m-auto">
        <div className="flex flex-col gap-2 px-10 py-5 ">
          <h3 className="text-3xl font-black">攏山股份有限公司</h3>
          <p>桃園市中壢區領航南路三段352號</p>
          <h2 className="text-3xl mt-auto">03-2876234</h2>
        </div>
        <div className="justify-self-start border-l  w-full ">
          <h3 className="text-2xl font-black py-2 px-5 border-b">
            服務產品項目
          </h3>
          <ul className="flex flex-col gap-2 flex-wrap px-5 max-h-32 py-3">
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              銀行信用貸款
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              房屋借貸
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              土地借貸
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              民間代書借款
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              汽機車貸款
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              手機貸款商品業務
            </li>
          </ul>
        </div>
        <div className="justify-self-end border-l w-full ">
          <h3 className="text-2xl font-black px-5 py-2 border-b">快速導覽</h3>
          <ul className="flex flex-col gap-2 flex-wrap max-h-32 px-5 py-3">
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              關於我們
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              借貸須知
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              防詐騙專區
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              相關案例
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              相關案例
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              一覽無遺
            </li>
            <li className="text-md text-gray-400 font-black hover:text-gray-800">
              為什麼是我們
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t text-xs text-gray-400 py-4 px-4 flex justify-between">
        <p>Copyright ©2023 舜至有限公司. All rights reserved.</p>
        <ul className="flex items-center gap-3">
          <li className="hover:text-gray-800 duration-300">
            公司統編: 83254205
          </li>
          <li>|</li>
          <li className="hover:text-gray-800 duration-300">
            公司官方LINE:@798advyq
          </li>
          <li>|</li>
          <li className="hover:text-gray-800 duration-300">
            公司信箱:longshan352@gmail.com
          </li>
        </ul>
      </div>
    </footer>
  )
}

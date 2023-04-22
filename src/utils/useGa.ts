import ReactGA, { EventArgs, TrackerNames } from 'react-ga'
import React, { useEffect } from 'react'

export const useGa = () => {
  // const initGA = () => {
  //   ReactGA.initialize('G-1WDJ70DSYK')
  // }

  // const logPageView = () => {
  //   ReactGA.set({ page: window.location.pathname })
  //   ReactGA.pageview(window.location.pathname)
  // }

  const handleSubmitForm = () => {
    // @ts-ignore
    // gtag('event', '客戶表單提交', {
    //   event_category: '表單提交完成',
    //   event_label: '客戶提交的個人資料表單',
    // })
  }

  const handleClickPhoneButton = () => {
    // @ts-ignore
    // gtag('event', '客戶點擊電話按鈕', {
    //   event_category: '電話按鈕',
    //   event_label: '客戶點擊撥打電話按鈕',
    // })
  }

  const handleClickLineButton = () => {
    // @ts-ignore
    // gtag('event', '客戶點擊LINE按鈕', {
    //   event_category: 'LINE按鈕',
    //   event_label: '客戶點擊LINE按鈕',
    // })
  }

  const handleTranferContactusPage = () => {
    // @ts-ignore
    // gtag('event', '客戶瀏覽表單頁面', {
    //   event_category: '表單頁面',
    //   event_label: '客戶點擊瀏覽表單頁面',
    // })
  }

  const handleSubmitFormError = () => {
    // @ts-ignore
    // gtag('event', '表單提交失敗', {
    //   event_category: '表單提交失敗',
    //   event_label: '表單提交失敗遇到問題',
    // })
  }

  return {
    handleSubmitForm,
    handleClickPhoneButton,
    handleClickLineButton,
    handleTranferContactusPage,
    handleSubmitFormError,
    // logPageView,
    // initGA,
  }
}

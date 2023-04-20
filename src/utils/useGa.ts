import ReactGA, { EventArgs, TrackerNames } from 'react-ga'
import React, { useEffect } from 'react'

export const useGa = () => {
  const handleSubmitForm = () =>
    ReactGA.event({
      category: '表單提交',
      action: '表單提交完成',
      label: '客戶提交的個人資料表單',
    })

  const handleClickPhoneButton = () =>
    ReactGA.event({
      category: '電話按鈕',
      action: '客戶點擊電話按鈕',
      label: '客戶點擊撥打電話按鈕',
    })

  const handleClickLineButton = () =>
    ReactGA.event({
      category: 'Line按鈕',
      action: '客戶點擊Line按鈕',
      label: '客戶點擊Line按鈕',
    })

  const handleTranferContactusPage = () =>
    ReactGA.event({
      category: '瀏覽表單頁面',
      action: '點擊瀏覽表單葉面',
      label: '點擊瀏覽表單葉面',
    })

  const handleSubmitFormError = () =>
    ReactGA.event({
      category: '提交失敗',
      action: '表單提交失敗',
      label: '表單提交失敗遇到問題',
    })

  return {
    handleSubmitForm,
    handleClickPhoneButton,
    handleClickLineButton,
    handleTranferContactusPage,
    handleSubmitFormError,
  }
}

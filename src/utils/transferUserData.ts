type UserData = Record<
  | 'username'
  | 'userphone'
  | 'useremail'
  | 'service'
  | 'price'
  | 'legalAge'
  | 'userdescription',
  string
>

export const transferUserData = ({
  username = '未填寫',
  userphone = '未填寫',
  useremail = '未填寫',
  service = '未填寫',
  price = '未填寫',
  legalAge = '未填寫',
  userdescription = '未填寫',
}: UserData) => {
  return `\n客戶名稱: ${username}\n客戶信箱: ${useremail}\n客戶電話: ${userphone}\n服務項目: ${service}\n預期借款金額: ${price}\n已成年: ${legalAge}\n客戶描述: ${userdescription}`
}

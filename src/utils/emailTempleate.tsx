import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { UserData } from './transferUserData'

const EmailTemplate = ({
  username = '未填寫',
  userphone = '未填寫',
  useremail = '未填寫',
  service = '未填寫',
  price = '未填寫',
  legalAge = '未填寫',
  userdescription = '未填寫',
}: UserData) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>My Email Template</title>
      </head>
      <body style={{ textAlign: 'center' }}>
        <div
          style={{
            maxWidth: '520px',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            border: '1px solid #f2f2f2',
          }}
        >
          <img
            src={`${process.env.LUNG_SHAN_URL}/images/LOGOPNG.png`}
            alt="Logo"
            style={{
              display: 'block',
              margin: '0 auto',
              marginBottom: '20px',
              width: '100px',
            }}
          />

          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            Hello,攏山借貸!您有一筆新的客戶表單!🎉
          </h1>
          <div style={{ maxWidth: '450px', marginTop: '20px', margin: 'auto' }}>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '10px',
              }}
            >
              客戶名稱: {username}
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '10px',
              }}
            >
              客戶電話: {userphone}
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '10px',
              }}
            >
              客戶郵件: {useremail}
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '10px',
              }}
            >
              選擇服務: {service}
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '10px',
              }}
            >
              預計借款金額: {price}
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '10px',
              }}
            >
              是否成年: {legalAge}
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '10px',
              }}
            >
              客戶描述: {userdescription}
            </p>
          </div>
          {useremail !== '未填寫' && (
            <a
              href={`mailto: ${useremail}`}
              style={{
                backgroundColor: '#0070f3',
                color: '#fff',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                display: 'inline-block',
                fontSize: '16px',
                marginTop: '20px',
              }}
            >
              客戶郵件信箱
            </a>
          )}
        </div>
      </body>
    </html>
  )
}

const RenderTemlate = (props: UserData) =>
  ReactDOMServer.renderToStaticMarkup(<EmailTemplate {...props} />)

export default RenderTemlate

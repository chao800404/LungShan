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
      <body>
        <table
          width="100%"
          border={0}
          align="center"
          cellPadding={0}
          cellSpacing={0}
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          <tr>
            <td align="center" style={{ backgroundColor: '#f8f8f8' }}>
              <table
                width="100%"
                border={0}
                align="center"
                cellPadding={0}
                cellSpacing={0}
              >
                <tr>
                  <td
                    align="center"
                    style={{
                      paddingTop: '40px',
                      paddingBottom: '20px',
                    }}
                  >
                    <img
                      src={`${process.env.LUNG_SHAN_URL}/images/LOGOPNG.png`}
                      alt="My Logo"
                      height="60"
                      style={{ background: '#f8f8f8' }}
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center">
              <table
                width="100%"
                border={0}
                align="center"
                cellPadding={0}
                cellSpacing={0}
                style={{ backgroundColor: '#ffffff' }}
              >
                <tr>
                  <td
                    align="center"
                    style={{
                      padding: '40px',
                      borderBottom: '1px solid #e0e0e0',
                      fontSize: '24px',
                    }}
                  >
                    Hello {username}!
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    style={{ padding: '40px', fontSize: '18px' }}
                  >
                    This is a test email with a logo image.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}

const RenderTemlate = (props: UserData) =>
  ReactDOMServer.renderToStaticMarkup(<EmailTemplate {...props} />)

export default RenderTemlate

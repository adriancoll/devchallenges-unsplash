import { FC, PropsWithChildren } from 'react'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      style={{ margin: '100px auto', maxWidth: '1440px', padding: '0 40px' }}>
      {children}
    </main>
  )
}

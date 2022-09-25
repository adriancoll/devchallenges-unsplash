import { PropsWithChildren, FC } from 'react'
import * as ReactDOM from 'react-dom'

const headRoot = document.head

export const Head: FC<PropsWithChildren> = ({ children }) =>
  ReactDOM.createPortal(children, headRoot)

export default Head

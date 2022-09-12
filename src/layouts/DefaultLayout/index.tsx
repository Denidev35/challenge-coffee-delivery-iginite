import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { DefaultContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultContainer>
      <Header />
      <Outlet />
    </DefaultContainer>
  )
}

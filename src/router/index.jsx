import { createHashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Promotion from '../pages/Promotion'

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/promociones',
    element: <Promotion />
  }
])

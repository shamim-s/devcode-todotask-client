import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Router/Routes';

function App({children}) {
  return (
    <div className='bg-base-200'>
      <RouterProvider router={route}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;

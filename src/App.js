import React from 'react';
import Body from './components/Body';
import Head from './components/Head';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createBrowserRouter,Router, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import YouTubeWatchPage from './components/YouTubeWatchPage';

const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<YouTubeWatchPage/>
    }
  ]
}
]);

function App() {

  return (
    <Provider store={store}>
      <div className='App'>
        <Head />
        {/* <Router> */}
        <RouterProvider router={appRouter}/>
        {/* </Router> */}
      </div>
    </Provider>
  );
}
export default App;
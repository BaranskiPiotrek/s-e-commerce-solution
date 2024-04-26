import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import Menu from './components/Menu';
import { QueryClient, QueryClientProvider } from 'react-query';
import { categoriesMenu } from './utils/categories';
import SideMenu from './components/SideMenu';

const queryClient = new QueryClient()

const handleItemClick = (category) => {
  console.log('Clicked category:', category);
  
};

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
      <AppBar position="fixed">
        <Menu />
        <SideMenu categories={categoriesMenu} onItemClick={handleItemClick} />
      </AppBar>
      <Toolbar />
      </QueryClientProvider>
      
    </React.Fragment>
  );
}

export default App;

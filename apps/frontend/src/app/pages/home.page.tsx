import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { BrowseImages } from '../components';

const parsePage = (value: string | null): number => {
  let page = parseInt(value || '1', 10);
  if (isNaN(page) || page < 1) {
    page = 1;
  }
  return page;
};

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parsePage(searchParams.get('page'));
  const onPageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <BrowseImages currentPage={currentPage} onPageChange={onPageChange} />
    </Box>
  );
};

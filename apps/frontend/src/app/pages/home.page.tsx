import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { SideNav } from '@picsum-image-editor/components';

import { BrowseImages, EditorIcon } from '../components';
import { useAppSelector } from '../store';

const parsePage = (value: string | null): number => {
  let page = parseInt(value || '1', 10);
  if (isNaN(page) || page < 1) {
    page = 1;
  }
  return page;
};

export const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { image } = useAppSelector((state) => state.editor);

  console.log(searchParams.get('page'));

  const [page, setPage] = useState(parsePage(searchParams.get('page')));

  useEffect(() => {
    if (page.toString() !== searchParams.get('page')) {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set('page', page.toString());
      setSearchParams(updatedSearchParams);
    }
  }, [page, setSearchParams, searchParams]);

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <SideNav>
        <EditorIcon onClick={() => navigate('/editor')} disabled={!image} />
      </SideNav>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <BrowseImages initialPage={page} onPageChange={setPage} />
      </Box>
    </Box>
  );
};

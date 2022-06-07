import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { NavIcon, SideNav } from '@picsum-image-editor/components';

import { BrowseImages } from '../components';
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

  const currentPage = parsePage(searchParams.get('page'));
  const onPageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <SideNav>
        <NavIcon
          onClick={() => navigate('/editor')}
          disabled={!image}
          tooltipText={
            !image ? 'Please choose an image to edit' : 'Go to Image Editor'
          }
          icon={<EditIcon />}
        />
      </SideNav>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <BrowseImages currentPage={currentPage} onPageChange={onPageChange} />
      </Box>
    </Box>
  );
};

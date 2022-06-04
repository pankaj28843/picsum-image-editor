import { ImageTile } from '../components/ImageTile';
import { usePicSumImages } from '../hooks';

export const HomePage = () => {
  const { images, isLoading } = usePicSumImages(1);
  return (
    <>
      <h1>Images</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        images.map((image) => <ImageTile key={image.id} image={image} />)
      )}
    </>
  );
};

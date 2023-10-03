import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="mb-10 mt-10">
      
      <h3 className="bg-sky-500 p-2 rounded-lg inline-block text-2xl mb-3  capitalize text-white">{category}</h3>

      
      {isLoading && <h2 className="text-white">Cargando...</h2>}

      {/* otra alternativa, esto hace la lógica interna si mostrarse o no */}
      {/* <LoadingMessage isLoading = {isLoading} /> */}

      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};

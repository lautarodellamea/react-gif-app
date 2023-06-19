export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YFJDJL6LFmZKjVJJ79qko67NN85wZhGd&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};

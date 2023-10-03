

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="bg-slate-800 rounded-md ">
      <img className="h-[250px] w-auto" src={url} alt={title} />
      <p className="text-white p-2 w-[150px] text-center mx-auto ">{title}</p>
    </div>
  );
};

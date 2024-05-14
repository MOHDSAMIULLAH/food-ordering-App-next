import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className=" rounded-2xl text-center bg-[#222831] group  hover:shadow-md  hover:shadow-black/25 transition-all    ">
      <div className="text-center h-[190px] flex justify-center items-center rounded-t-2xl rounded-bl-[45px]  bg-white    transition-all">
        <img src={image} className="max-h-auto max-h-24 block mx-auto scale-125 group-hover:scale-150" alt="pizza" />
      </div>
      <div className="p-4 bg-[#222831] rounded-b-2xl text-white">

        <h4 className="font-semibold text-xl ">{name}</h4>
        {/* <p className="text-gray-100 text-sm line-clamp-3">
          {description}
        </p> */}

        <div class="flex justify-between items-center ">
          <h6>
            ${basePrice}
          </h6>
          <div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] rounded-full bg-white" data-name="Layer 2" viewBox="0 0 35 35" id="Cart"><path d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z" fill="#d8a353" class="color000000 svgShape"></path><path d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z" fill="#d8a353" class="color000000 svgShape"></path><path d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z" fill="#d8a353" class="color000000 svgShape"></path></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] " viewBox="0 0 48 48" id="Cart"><path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96a2 2 0 0 0-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" fill="#d8a353" class="color000000 svgShape"></path><path fill="none" d="M0 0h48v48H0z"></path></svg> */}
        <AddToCartButton
          image={image}
          hasSizesOrExtras={hasSizesOrExtras}
          onClick={onAddToCart}
          basePrice={basePrice}
        />
          </div>
        </div>
      </div>
    </div>
  );
}
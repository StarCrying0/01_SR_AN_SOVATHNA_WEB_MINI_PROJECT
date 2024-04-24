"use client";
import { addFavoriteWorkSpace } from "@/app/action/addnew";
import { addToFavorite } from "@/app/services/workspace.service";
import Image from "next/image";
function FavoriteButton({ id, data }) {
  const handleClick = async () => {
    console.log(data.data);
    let favorite;
    const changeStarColor = document.getElementById("star");
    if (data.data.isFavorite === true) {
      //changeStarColor.className = "bx bxs-star text-2xl";
      favorite = { isFavorite: "false" };
    } else {
        //changeStarColor.className = "bx bx-star text-2xl";
      favorite = { isFavorite: "true" };
    }
    addFavoriteWorkSpace(id, favorite);
  };
  return (
    <>
      <button onClick={handleClick}>
        <div className="border border-gray rounded-lg p-1 flex justify-center items-center">
          <i className={`${data.data?.isFavorite===false?"bx bx-star text-2xl":"bx bxs-star text-2xl text-yellow-300"}`} id="star"></i>
        </div>
      </button>
    </>
  );
}
export default FavoriteButton;

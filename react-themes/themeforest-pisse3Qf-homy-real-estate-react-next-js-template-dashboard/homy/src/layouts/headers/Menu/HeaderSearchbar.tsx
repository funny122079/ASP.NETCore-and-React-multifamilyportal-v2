"use client"
import { useState } from "react";

const HeaderSearchbar = ({ isSearch, setIsSearch }: any) => {

   const [searchValue, setSearchValue] = useState("");

   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSearchValue('');
      setIsSearch(false);
   };

   return (
      <>
         <div className={`modal fade search-modal ${isSearch ? "active" : ""}`} id="searchModal">
            <div className="modal-dialog modal-fullscreen modal-dialog-centered">
               <div className="modal-content d-flex justify-content-center">
                  <form onSubmit={handleSubmit}>
                     <input value={searchValue} onChange={handleSearchChange} type="text" placeholder="Buy Apartments, Rent Condos, Sell Houses" />
                     <button><i className="fa-light fa-arrow-right-long"></i></button>
                  </form>
               </div>
            </div>
         </div>
         <div onClick={() => setIsSearch(false)} className={`search-backdrop modal-backdrop fade ${isSearch ? "show" : ""}`}></div>
      </>
   )
}

export default HeaderSearchbar

import { useNavigate } from "react-router";

const Header = ({cart}) => {

  const navigate = useNavigate()
  return (
    <header className="h-[86px] w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-full max-w-[1280px] items-center gap-8 px-6 lg:px-0">
        
        {/* Logo */}
        <div className="shrink-0 text-[32px] font-black tracking-[-2px]">
          SHOP.CO
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-[15px] md:flex">
          <button className="flex items-center gap-1">
            Shop
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>

          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </nav>

        {/* Search */}
        <div className="ml-auto hidden h-[50px] flex-1 items-center rounded-full bg-[#f1f1f1] px-5 lg:flex">
          <svg
            className="mr-3 h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="m20 20-4-4" />
          </svg>

          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <button
          
          onClick={()=>navigate("/my-cart")}
          className=" relative" aria-label="Cart">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
              />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            {cart?.length>0&&<span className=" absolute size-5 bg-black absolute top-[-12px] right-[-18px] rounded-full text-white flex justify-center items-center text-[10px] " >{cart?.length}</span>}
          </button>

          {/* User */}
          <button aria-label="Account">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <circle cx="12" cy="9" r="3" strokeWidth="2" />
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M6.5 19c.8-2.4 2.7-4 5.5-4s4.7 1.6 5.5 4"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
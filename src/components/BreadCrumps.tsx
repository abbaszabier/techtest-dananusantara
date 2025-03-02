import { HotelProps } from "../pages/HotelListPage/components/HotelCard";
import { useNavigate } from "react-router-dom";
export default function BreadCrumps({ hotel }: { hotel: HotelProps }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <ol className="flex items-center whitespace-nowrap py-3 px-8">
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="#"
          >
            Hotel
          </a>
          <svg
            className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 13L10 3"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
          </svg>
        </li>
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="#"
          >
            {hotel.country}
            <svg
              className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
        </li>
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="#"
          >
            {hotel.province}
            <svg
              className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
        </li>
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="#"
          >
            {hotel.location}
            <svg
              className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
        </li>
        <li
          className="inline-flex items-center text-xs font-semibold text-[#687176] truncate dark:text-neutral-200"
          aria-current="page"
        >
          {hotel.name}
        </li>
      </ol>
      <div className="flex items-center gap-2 px-8">
        <button
          className="text-sm text-blue-500 font-bold cursor-pointer"
          onClick={() => navigate(`/hotels?location=${hotel.location}`)}
        >
          Lihat akomodasi lainnya di {hotel.location}
        </button>
      </div>
    </div>
  );
}

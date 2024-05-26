import { useState } from "react";
import Select from "react-dropdown-select";

const options = [
  {
    id: 1,
    name: "Dhaka",
  },
  {
    id: 2,
    name: "New York",
  },
  {
    id: 2,
    name: "Sydney",
  },
];

function HomeSearch() {
  const [value, setValue] = useState(options[0]);

  return (
    <div
      className="homec-search-form mg-top-10"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <form className="homec-search-form__form homec-search-form__form--city">
        <div className="homec-search-form__group">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_275_829"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path d="M0 2.9405e-05H24V24H0V2.9405e-05Z" fill="white" />
            </mask>
            <g mask="url(#mask0_275_829)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24C12.2351 24 12.4546 23.8825 12.585 23.6869C13.1198 22.8847 13.7306 22.0293 14.3771 21.124C14.5713 20.852 14.7687 20.5756 14.9682 20.2947C15.8268 19.086 16.717 17.8062 17.5208 16.4992C19.1133 13.9099 20.4375 11.1064 20.4375 8.43752C20.4375 3.78447 16.653 2.9405e-05 12 2.9405e-05C7.34694 2.9405e-05 3.5625 3.78447 3.5625 8.43752C3.5625 11.1064 4.88667 13.9099 6.47921 16.4992C7.28303 17.8062 8.17317 19.086 9.03176 20.2947C9.23131 20.5756 9.42873 20.852 9.62293 21.124C10.2694 22.0293 10.8802 22.8847 11.415 23.6869C11.5454 23.8825 11.7649 24 12 24ZM7.67704 15.7625C6.10551 13.2073 4.96875 10.6905 4.96875 8.43752C4.96875 4.56111 8.12359 1.40628 12 1.40628C15.8764 1.40628 19.0312 4.56111 19.0312 8.43752C19.0312 10.6905 17.8945 13.2073 16.3229 15.7625C15.5447 17.0278 14.6771 18.2763 13.8218 19.4803C13.6277 19.7535 13.4339 20.0249 13.2418 20.2939C12.8133 20.894 12.3936 21.4818 12 22.0486C11.6064 21.4818 11.1867 20.894 10.7582 20.2939C10.5661 20.0249 10.3723 19.7534 10.1782 19.4803C9.32291 18.2763 8.45524 17.0278 7.67704 15.7625Z"
                fill="#7E8BA0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.78125 8.4375C7.78125 10.7642 9.67325 12.6562 12 12.6562C14.3267 12.6562 16.2187 10.7642 16.2187 8.4375C16.2187 6.11076 14.3267 4.21876 12 4.21876C9.67325 4.21876 7.78125 6.11076 7.78125 8.4375ZM12 11.25C10.4499 11.25 9.1875 9.9876 9.1875 8.4375C9.1875 6.88741 10.4499 5.62501 12 5.62501C13.5501 5.62501 14.8125 6.88741 14.8125 8.4375C14.8125 9.9876 13.5501 11.25 12 11.25Z"
                fill="#7E8BA0"
              />
            </g>
          </svg>
          {/* Form Group */}
          <div className="form-group">
            <Select
              values={[value]}
              options={options}
              labelField="name"
              valueField="id"
              onChange={(values) => setValue(values)}
              searchBy="name"
              searchable={true}
              handle={true}
              placeholder="Select Location"
              closeOnSelect={true}
              dropdownPosition="auto"
              style={{
                border: "none",
                outline: "none",
                zIndex: "999",
              }}
            />
          </div>
        </div>
        <button type="submit" className="homec-btn" aria-label="search">
          <span className="homec-btn__inside">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.45185 16.8948C10.3289 16.8949 12.1522 16.2686 13.633 15.1152L19.2197 20.7019C19.637 21.105 20.3021 21.0934 20.7051 20.6761C21.0983 20.269 21.0983 19.6236 20.7051 19.2165L15.1184 13.6298C17.9805 9.9456 17.314 4.63881 13.6298 1.77676C9.94555 -1.08529 4.63881 -0.418815 1.77676 3.26541C-1.08529 6.94964 -0.418815 12.2564 3.26541 15.1185C4.74865 16.2707 6.57361 16.8958 8.45185 16.8948ZM3.96301 3.95978C6.44215 1.48059 10.4616 1.48054 12.9408 3.95969C15.42 6.43883 15.4201 10.4583 12.9409 12.9375C10.4618 15.4167 6.44229 15.4167 3.9631 12.9376C3.96305 12.9376 3.96305 12.9376 3.96301 12.9375C1.48386 10.4764 1.46926 6.47159 3.93034 3.99245C3.94121 3.98153 3.95209 3.97065 3.96301 3.95978Z"></path>
            </svg>
            <span>Search</span>
          </span>
        </button>
      </form>
    </div>
  );
}

export default HomeSearch;

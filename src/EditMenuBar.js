import React from "react";

export const EditMenuBar = () => {
  return (
    <>
      <div className="css-1gmnpk6">
        <div className="dragdroppable dragdroppable-column">
          <div>
            <div className="dashboard-header css-1qf0uii" data-test-id="3">
              <div className="dashboard-component-header header-large">
                <span className="editable-title">
                  <span title="[ untitled dashboard ]">新規業務フロー</span>
                </span>
                <span className="ant-tag css-15voufr">Draft</span>
                <p className="fave-unfave-icon css-1nnaep8" role="button">
                  <span
                    role="img"
                    aria-label="favorite-unselected"
                    className="anticon css-sup2qv"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      className=""
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.9731 9.67407C19.8701 9.38097 19.6008 9.17499 19.2861 9.14856L14.7403 8.49755L12.7031 4.44246C12.5696 4.17187 12.2903 4 11.984 4C11.6778 4 11.3985 4.17187 11.265 4.44246L9.22779 8.48971L4.68199 9.14856C4.38034 9.19065 4.12934 9.39753 4.03488 9.68192C3.9485 9.95951 4.02533 10.2612 4.2346 10.4663L7.5341 13.6037L6.73519 18.0588C6.67696 18.359 6.80168 18.6651 7.05476 18.8431C7.30116 19.0161 7.626 19.0373 7.89361 18.898L11.984 16.8038L16.0585 18.9059C16.1706 18.968 16.2972 19.0004 16.426 19C16.5952 19.0006 16.7603 18.9484 16.8973 18.851C17.1504 18.673 17.2751 18.3669 17.2169 18.0666L16.418 13.6115L19.7175 10.4741C19.9529 10.2783 20.0524 9.96685 19.9731 9.67407ZM14.2593 12.9043L14.8172 16.0154L12.901 15.0264L11.9875 14.5551L9.13324 16.0165L9.5027 13.9567L9.69282 12.8965L7.454 10.7677L9.51467 10.469L10.5458 10.3196L11.983 7.46432L12.9531 9.39539L13.4223 10.3292L16.5034 10.7705L14.2593 12.9043Z"
                        fill="#B2B2B2"
                      ></path>
                    </svg>
                  </span>
                </p>
              </div>
              <div className="button-container">
                <div className="button-container">
                  <button
                    type="button"
                    className="ant-btn m-r-5 superset-button css-fwnxq5"
                  >
                    <span>Import</span>
                  </button>
                  <button
                    disabled=""
                    type="button"
                    className="ant-btn superset-button css-1mljg09"
                  >
                    <span>Save</span>
                  </button>
                </div>
                <div
                  id="save-dash-split-button"
                  role="button"
                  className="ant-dropdown-trigger css-1af8uep"
                >
                  <span
                    role="img"
                    aria-label="more-horiz"
                    className="anticon css-tp6bb2"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      className=""
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMenuBar;

/** @format */

import React from "react";
import image1 from "../../asserts/Projects/SchoolDashbaord.png";

import image2 from "../../asserts/Projects/SchoolDashbaord.png";

const DeskApp = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={image1}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="https://colorlib.com/cdn-cgi/image/quality=90,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/user-management-dashboard.jpg.webp"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://colorlib.com/cdn-cgi/image/quality=90,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/sales-dashboard.jpg.webp"
            class="w-100 shadow-1-strong rounded mb-4"
          />
          <img
            src="https://colorlib.com/cdn-cgi/image/quality=90,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/finance-saas-dashboard.jpg.webp"
            class="w-100 shadow-1-strong rounded mb-4"
          />
        </div>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://colorlib.com/cdn-cgi/image/quality=90,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/adminator-free-admin-dashboard-template.jpg.webp"
            class="w-100 shadow-1-strong rounded mb-4"
          />
          <img
            src="https://colorlib.com/cdn-cgi/image/quality=90,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/hospital-html-dashboard.jpg.webp"
            class="w-100 shadow-1-strong rounded mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default DeskApp;

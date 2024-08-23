import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  const handleClickImport = (e) => {
    const optionImportElement = e.target.closest(".optionImport");
    console.log(optionImportElement);

    const arrowIcon = document.querySelector(".fa-caret-down, .fa-caret-up");
    const optionImport = document.querySelector(".optionImport");
    optionImport.classList.toggle("hidden");
    if (arrowIcon) {
      arrowIcon.classList.toggle("fa-caret-down");
      arrowIcon.classList.toggle("fa-caret-up");
    }
  };

  const handleClickManageProduct = () => {
    const arrowIcon = document.querySelector(".fa-caret-down, .fa-caret-up");
    const optionImport = document.querySelector(".optionManageProduct");
    optionImport.classList.toggle("hidden");
    if (arrowIcon) {
      arrowIcon.classList.toggle("fa-caret-down");
      arrowIcon.classList.toggle("fa-caret-up");
    }
  };

  const handleClickAnalysis = () => {
    const arrowIcon = document.querySelector(".fa-caret-down, .fa-caret-up");
    const optionImport = document.querySelector(".optionAnalysis");
    optionImport.classList.toggle("hidden");
    if (arrowIcon) {
      arrowIcon.classList.toggle("fa-caret-down");
      arrowIcon.classList.toggle("fa-caret-up");
    }
  };

  const handleClickCustomer = () => {
    const arrowIcon = document.querySelector(".fa-caret-down, .fa-caret-up");
    const optionImport = document.querySelector(".optionCustomer");
    optionImport.classList.toggle("hidden");
    if (arrowIcon) {
      arrowIcon.classList.toggle("fa-caret-down");
      arrowIcon.classList.toggle("fa-caret-up");
    }
  };

  return (
    <div className="grid max-w-xs m-4 ">
      {/* Trang chủ */}
      <div>
        <div className="ml-2.5">
          <Link to="/" className="flex">
            <div className="h-6 w-6">
              <i className="fa-solid fa-house"></i>
            </div>
            <p className="pl-2">Trang chủ</p>
          </Link>
        </div>
      </div>

      {/* Nhập hàng */}
      <div>
        <div className="ml-2 mt-4"></div>
        <div className="flex cursor-pointer" onClick={handleClickImport}>
          <div className="h-6 w-6 pl-3">
            <i className="fa-regular fa-file-lines"></i>
          </div>
          <p className="pl-4 cursor-pointer">Nhập hàng</p>
          <div className="pl-24 hover:text-red-600 DropDownImport">
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
        <div className="grid ml-10 mt-2 optionImport hidden text-gray-500 ">
          <Link to="/import" className="mt-2.5 hover:text-red-600">
            Tất cả đơn hàng
          </Link>
          <Link to="/import" className="mt-2.5 hover:text-red-600">
            Thêm đơn
          </Link>
          <Link to="/import" className="mt-2.5 hover:text-red-600">
            Hết Hàng
          </Link>
          <Link to="/import" className="mt-2.5 hover:text-red-600">
            Cập nhập sản phẩm
          </Link>
        </div>
      </div>

      {/* Quản lý sản phẩm */}
      <div>
        <div className="ml-2 mt-4"></div>
        <div className="flex cursor-pointer" onClick={handleClickManageProduct}>
          <div className="h-6 w-6 pl-3">
            <i className="fa-solid fa-box"></i>
          </div>
          <p className="pl-4 cursor-pointer">Quản lý sản phẩm</p>
          <div className="pl-11 hover:text-red-600 DropDownManageProduct">
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
        <div className="grid ml-10 mt-2 optionManageProduct hidden text-gray-500">
          <Link to="/" className="mt-2.5 hover:text-red-600">
            Tất cả sản phẩm
          </Link>
          <Link to="/" className="mt-2.5 hover:text-red-600">
            Thêm sản phẩm
          </Link>
        </div>
      </div>

      {/* Phân tích */}
      <div>
        <div className="ml-2 mt-4 w-6"></div>
        <div className="flex cursor-pointer" onClick={handleClickAnalysis}>
          <div className="h-6 w-6 pl-3">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <p className="pl-4 cursor-pointer">Phân tích</p>
          <div className="pl-25 iconDownAnalysis hover:text-red-600 DropDownAnalysis">
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
        <div className="grid ml-10 mt-2 optionAnalysis hidden text-gray-500">
          <Link to="/" className="mt-2.5 hover:text-red-600">
            Tài chính
          </Link>
          <Link to="/" className="mt-2.5 hover:text-red-600">
            Sản Phẩm
          </Link>
          <Link to="/" className="mt-2.5 hover:text-red-600">
            Hiệu quả hoạt động
          </Link>
        </div>
      </div>

      {/* Khách hàng */}
      <div>
        <div className="ml-2 mt-4 w-6"></div>
        <div className="flex cursor-pointer" onClick={handleClickCustomer}>
          <div className="h-6 w-6 pl-3">
            <i className="fa-regular fa-user"></i>
          </div>
          <p className="pl-4 cursor-pointer">Khách hàng</p>
          <div className="pl-23 hover:text-red-600">
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
        <div className="grid ml-10 mt-2 optionCustomer hidden text-gray-500">
          <Link to="/" className="mt-2.5 hover:text-red-600">
            Thông tin
          </Link>
          <Link to="/" className="mt-2.5 hover:text-red-600">
            Thiết lập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

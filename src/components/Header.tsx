import Logo from "./Logo"

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white fixed w-full ">
      <div><Logo /></div>
      <div>
        <button className="bg-main text-white p-3 rounded-lg text-center">Add New Product</button>
      </div>
    </div>
  )
}

export default Header
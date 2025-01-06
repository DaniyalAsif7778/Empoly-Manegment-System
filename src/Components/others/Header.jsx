 
function Header() {
 return (
  <>
  <div className="flex items-center justify-between px-6 py-7 ">
   <h1 className="text-3xl leading-3px " style={{lineHeight: '50px'}}>Daniyal <br/> Asif &#128079;  </h1>

   <button className="text-1xl bg-red-700 px-3 py-1 font-medium rounded-md">Log Out</button>
  </div>
  </>
 );
}

export default Header;
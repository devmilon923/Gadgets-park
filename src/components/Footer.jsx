
export default function Footer() {
  return (
    <footer className=" bg-white text-gray-600 lg:p-10 py-4">
       <div className="text-center">
    <h1 className="text-2xl text-slate-800 font-extrabold">Gadget Park</h1>
    <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
  </div>
  <div className="divider container mx-auto"></div>
<div className="container text-center grid-cols-3 justify-center footer mx-auto px-2 lg:px-0">
 
<nav className="text-center mx-auto  col-span-1">
    <h6 className="footer-title text-slate-800">Services</h6>
    <a className="link link-hover">Support</a>
    <a className="link link-hover">Shipping</a>
    <a className="link link-hover">Returns</a>
    <a className="link link-hover">Tracking</a>
  </nav>
  
  <nav className="text-center mx-auto  col-span-1">
    <h6 className="footer-title text-slate-800">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="text-center mx-auto  col-span-1">
    <h6 className="footer-title text-slate-800">legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Cookie Policy</a>
 
  </nav>

</div>
</footer>
  )
}

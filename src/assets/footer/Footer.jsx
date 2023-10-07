import Logo from "../shared/navbar/Logo";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <Logo></Logo>
    <p>Vanilla Event Works <br/>Providing reliable Serviecs since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Decaration</a> 
    <a className="link link-hover">Custom Designs</a> 
    <a className="link link-hover">Lighting</a> 
    <a className="link link-hover">Sound</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Blogs</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;
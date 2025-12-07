const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="p-2 text-center text-sm">
      &copy; {year} Jeff. All rights reserved
    </div>
  );
};

export default Footer;

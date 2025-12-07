const Footer = () => {
  async function getDate() {
    "use cache";
    const year = new Date().getFullYear();

    return year;
  }

  return (
    <div className="p-2 text-center text-sm">
      &copy; {getDate()} Jeff. All rights reserved
    </div>
  );
};

export default Footer;

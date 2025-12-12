const Footer = () => {
  async function getDate() {
    "use cache";
    const year = new Date().getFullYear();

    return year;
  }

  return (
    <div className="p-4 text-center text-sm text-black dark:text-gray-200">
      &copy;{" "}
      <span className="font-roboto-mono">
        {getDate()} Jeff. All rights reserved
      </span>
    </div>
  );
};

export default Footer;

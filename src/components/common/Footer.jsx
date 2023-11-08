const Footer = () => {
  return (
    <div className="mt-auto ">
      <div className=" bg-dark p-2">
        <div className="text-center text-md-start my-2 d-flex justify-content-center text-white">
          <div>
            <a
              className="text-decoration-none text-white"
              href="https://www.dkzstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              Product by DKZ studio{" "}
            </a>
          </div>{" "}
          <div>-Copyright &copy;{new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

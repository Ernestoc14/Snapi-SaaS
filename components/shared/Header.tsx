
const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  
  return (
    <>
      <h2 className="text-3xl">{title}</h2>
      {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
    </>
  );
};

export default Header;

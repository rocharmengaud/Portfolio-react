export const Skill = ({ icon, name }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={icon} alt={`${name} icon`} />
      <p className="my-4">{name}</p>
    </div>
  );
};

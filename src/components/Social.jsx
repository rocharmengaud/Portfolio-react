export const Social = ({ name, icon, url, bgColor }) => {
  return (
    <a href={url} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bgColor}`}>
      <li className="flex items-center justify-between w-full text-gray-300">
        {name} {icon}
      </li>
    </a>
  );
};

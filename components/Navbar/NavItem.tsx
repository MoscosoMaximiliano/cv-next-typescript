import Link from "next/link"

const NavItem:React.FC<{
    activeItem: string,
    setActiveItem: Function, 
    name: string, 
    route: string
}> = ({activeItem, setActiveItem, name, route}) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a href=''>
        <span onClick={() => setActiveItem({name})} className="hover:text-green-400">{name}</span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;

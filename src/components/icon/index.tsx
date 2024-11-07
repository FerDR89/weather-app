interface IconProps {
  iconName: string;
}

const Icon = ({ iconName }: IconProps) => {
  return (
    <div className="flex h-40 w-36 items-center sm:h-60 sm:w-60">
      <img
        src={`/icons/${iconName}.svg`}
        alt="Weather Icon"
        className="h-40 w-36 sm:h-60 sm:w-60"
      />
    </div>
  );
};
export default Icon;

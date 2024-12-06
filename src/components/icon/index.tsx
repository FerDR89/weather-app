interface IconProps {
  iconName: string;
}

const Icon = ({ iconName }: IconProps) => {
  return (
    <div role="contentinfo" className={`flex h-auto w-48 items-center sm:w-60`}>
      <img
        src={`/icons/${iconName}.svg`}
        alt="Weather Icon"
        className={`h-auto w-48 sm:w-60`}
      />
    </div>
  );
};
export default Icon;

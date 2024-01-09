import * as Fi from "react-icons/fi";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";

export function DynamicIconFi(icon: string): JSX.Element {
  const IconComponent = Fi[icon as keyof typeof Fi];
  return <IconComponent className="text-xl sm:text-2xl" />;
}
export function DynamicIconFa(icon: string): JSX.Element {
  const IconComponent = Fa[icon as keyof typeof Fa];
  return <IconComponent className="text-xl sm:text-2xl lg:text-4xl" />;
}
export function DynamicIconSi(icon: string): JSX.Element {
  const IconComponent = Si[icon as keyof typeof Si];
  return <IconComponent className="text-xl sm:text-2xl lg:text-4xl" />;
}

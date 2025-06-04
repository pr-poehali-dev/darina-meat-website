import { icons, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon = ({
  name,
  fallback = "CircleAlert",
  className,
  ...props
}: IconProps) => {
  const LucideIcon = (icons as any)[name] || (icons as any)[fallback];

  return <LucideIcon className={cn("h-4 w-4", className)} {...props} />;
};

export default Icon;

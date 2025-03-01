import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = { left: ArrowLeft, right: ArrowRight };
export function ButtonNext({
  className,
  href,
  title,
  direction,
  placement = "right",
}) {
  const Icon = icons[direction] ?? ArrowRight;
  return (
    <div>
      <Button
        className={className}
        asChild
        effect="expandIcon"
        icon={Icon}
        iconPlacement={direction}
      >
        <Link href={href}>{title}</Link>
      </Button>
    </div>
  );
}

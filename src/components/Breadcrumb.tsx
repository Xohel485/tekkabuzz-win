import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items,
  ];

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={`flex items-center flex-wrap gap-1 text-sm text-muted-foreground ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center gap-1" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            {index > 0 && <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
            {item.href && index < allItems.length - 1 ? (
              <Link to={item.href} itemProp="item" className="hover:text-primary transition-colors">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="text-foreground font-medium">{item.label}</span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

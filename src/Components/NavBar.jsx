import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  X,
  Menu,
  FolderOpenDot,
  User,
  Code,
  GraduationCap,
  UserRoundPen,
} from "lucide-react";

const NavItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderOpenDot },
  { name: "Contact", href: "#Contact", icon: UserRoundPen },
  { name: "Education", href: "#education", icon: GraduationCap },
];

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Title Left */}
        <div className="flex-1 flex items-center justify-start">
          <a
            href="#Hero"
            className="text-xl font-bold text-primary flex items-center"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Vamshi</span> PortFolio
            </span>
          </a>
        </div>

        {/* Icons Center */}
        <div className="flex-1 hidden md:flex items-center justify-center space-x-8 bg-background p-5 rounded-full">
          {NavItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 flex flex-col items-center"
            >
              <span>{item.name}</span>
              {item.icon && <item.icon className="mt-1" size={18} />}
            </a>
          ))}
        </div>

        {/* Theme Toggle Right (placeholder for now) */}
        <div className="flex-1 flex items-center justify-end">
          {/* Place your ThemeToggle component here, e.g. <ThemeToggle /> */}
        </div>

        {/* Mobile Version */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} aria-label={isMenuOpen ? "Close Menu" : ""} />
          )}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col space-y-8">
            {NavItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 flex flex-col items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                {item.icon && <item.icon className="mt-1" size={18} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

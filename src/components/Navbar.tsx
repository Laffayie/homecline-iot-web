import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Info, UserPlus } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HomeCline
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Domov
              </Link>
            </Button>
            <Button
              variant={isActive("/o-nas") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/o-nas">
                <Info className="w-4 h-4 mr-2" />
                O nás
              </Link>
            </Button>
            <Button
              variant={isActive("/registracia") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/registracia">
                <UserPlus className="w-4 h-4 mr-2" />
                Registrácia
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Building2, LogOut, Plus, User } from 'lucide-react';

const Navbar = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <Building2 className="h-6 w-6" />
          PropManager
        </Link>

        <nav className="flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="sm">Properties</Button>
          </Link>
          {isAdmin && (
            <Link to="/properties/new">
              <Button variant="outline" size="sm" className="gap-1">
                <Plus className="h-4 w-4" /> Add Property
              </Button>
            </Link>
          )}
          {user ? (
            <Button variant="ghost" size="sm" onClick={() => signOut()} className="gap-1">
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          ) : (
            <Link to="/auth">
              <Button size="sm" className="gap-1">
                <User className="h-4 w-4" /> Sign In
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

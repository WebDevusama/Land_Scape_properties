import { useState } from 'react';
import {
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineSquare3Stack3D,
  HiOutlineInformationCircle,
  HiOutlineUser,
  HiOutlineUserPlus,
  HiOutlineBars3,
  HiOutlineXMark,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ModeToggle } from "../ui/mode-toggle";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: '/', label: 'Home', icon: HiOutlineHome },
    { href: '/properties', label: 'Properties', icon: HiOutlineBuildingOffice2 },
    { href: '/listings', label: 'Listings', icon: HiOutlineSquare3Stack3D },
    { href: '/about', label: 'About', icon: HiOutlineInformationCircle },
  ];

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link to="/auth" className="navbar-brand">
          <span className="navbar-brand-icon">
            <HiOutlineBuildingOffice2 aria-hidden />
          </span>
          <span className="navbar-brand-text">LandScape</span>
        </Link>

        <ul className="navbar-links">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link to={href} className="navbar-link">
                <Icon className="navbar-link-icon" aria-hidden />
                {label}
              </Link>
            </li>
          ))}
          <ModeToggle />
        </ul>

        <div className="navbar-actions">
          <Link to="/auth" className="navbar-btn navbar-btn-ghost">
            <HiOutlineUser className="navbar-btn-icon" aria-hidden />
            Login
          </Link>
          <Link to="/auth" className="navbar-btn navbar-btn-primary">
            <HiOutlineUserPlus className="navbar-btn-icon" aria-hidden />
            Register
          </Link>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <HiOutlineXMark aria-hidden />
          ) : (
            <HiOutlineBars3 aria-hidden />
          )}
        </button>
      </nav>

      <div
        className={`navbar-overlay ${mobileMenuOpen ? 'navbar-overlay-visible' : ''}`}
        aria-hidden={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className={`navbar-mobile ${mobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
        <ul className="navbar-mobile-links">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                to={href}
                className="navbar-mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="navbar-mobile-link-icon" aria-hidden />
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar-mobile-actions">
          <Link
            to="/auth"
            className="navbar-btn navbar-btn-ghost navbar-btn-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            <HiOutlineUser className="navbar-btn-icon" aria-hidden />
            Login
          </Link>
          <Link
            to="/auth"
            className="navbar-btn navbar-btn-primary navbar-btn-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            <HiOutlineUserPlus className="navbar-btn-icon" aria-hidden />
            Register
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { navigationItems } from '../../utils/data';
import logoPreto from '../../assets/Logo.png';
import logoBranco from '../../assets/Logo.png';
import './Header.scss';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleScrollCloseMenu = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Verifica se o clique foi fora do menu E fora do botão de toggle
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollCloseMenu, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollCloseMenu);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleAgendarConsulta = () => {
    setIsMobileMenuOpen(false);
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/11965486611?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    setIsMobileMenuOpen(false);
    window.open('https://www.instagram.com/ivanice.psi/', '_blank');
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : 'header--scrolled'}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <img 
              src={isScrolled ? logoBranco : logoPreto} 
              alt="Cuida da Mente - Psicologia e Neuropsicologia" 
              className="header__logo-img"
            />
          </div>

          <nav 
            ref={mobileMenuRef}
            className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}
          >
            <ul className="header__nav-list">
              {navigationItems.map((item) => (
                <li key={item.id} className="header__nav-item">
                  <button
                    className={`header__nav-link ${activeSection === item.id ? 'header__nav-link--active' : ''}`}
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Ir para seção ${item.label}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="header__nav-indicator"></span>
                    )}
                  </button>
                </li>
              ))}
              
              <li className="header__nav-item header__nav-item--cta">
                <button 
                  className="header__nav-link header__nav-cta"
                  onClick={handleAgendarConsulta}
                >
                  Agendar Consulta
                </button>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            {/* <button
              className="header__instagram-btn"
              onClick={handleInstagramClick}
              aria-label="Seguir no Instagram"
            >
              <Instagram className="header__instagram-icon" />
            </button>
             */}
            <button
              ref={toggleButtonRef}
              className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

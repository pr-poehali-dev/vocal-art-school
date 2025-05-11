
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Главная", path: "/" },
    { name: "О нас", path: "/about" },
    { name: "Преподаватели", path: "/teachers" },
    { name: "Цены", path: "/prices" },
    { name: "Распевки", path: "/vocal-exercises" },
  ];

  const socialLinks = [
    { name: "VK", icon: "Vk", url: "https://vk.com" },
    { name: "Telegram", icon: "Send", url: "https://t.me" },
    { name: "WhatsApp", icon: "Phone", url: "https://whatsapp.com" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Music2" className="h-6 w-6 text-primary" />
              <span className="font-playfair text-xl font-bold tracking-tight">
                VocalArt
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex md:gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Icon name={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="User" className="h-5 w-5" />
                <span className="sr-only">Профиль</span>
              </Button>
            </Link>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" className="h-5 w-5" />
                  <span className="sr-only">Меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 pt-10">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-sm font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="mt-6 flex gap-4">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Icon name={link.icon} className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <main className="flex-1">{children}</main>
      
      <footer className="border-t bg-muted/30">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-1">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Music2" className="h-6 w-6 text-primary" />
              <span className="font-playfair text-xl font-bold tracking-tight">
                VocalArt
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Школа вокала для всех возрастов и уровней
            </p>
          </div>
          <div className="flex gap-8">
            <div className="grid gap-2 text-sm">
              <h3 className="font-semibold">Навигация</h3>
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="grid gap-2 text-sm">
              <h3 className="font-semibold">Связаться</h3>
              <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary">
                +7 (800) 123-45-67
              </a>
              <a href="mailto:info@vocalart.ru" className="text-muted-foreground hover:text-primary">
                info@vocalart.ru
              </a>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Icon name={link.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4 text-center text-xs text-muted-foreground">
          <p>© 2025 VocalArt. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import { FOOTER_LINK } from '@/constants/footer.constant';
import LinkFooter from './LinkFooter';

export default function Footer() {
  return (
    <footer className="py-10 backdrop-blur-lg bg-black/20 border-b border-white/10 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Sarunya Portfolio</p>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex space-x-4">
            {FOOTER_LINK.map((el, idx) => (
              <LinkFooter
                key={idx}
                icon={el.icon}
                href={el.href}
                label={el.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

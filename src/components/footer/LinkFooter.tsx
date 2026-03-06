import { FooterLink } from '@/constants/footer.constant';

export default function LinkFooter({ icon: Icon, href, label }: FooterLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full hover:bg-gray-300 transition-colors hover:text-foreground"
      aria-label={label}
    >
      <Icon size={20} className="hover:animate-bounce" />
    </a>
  );
}

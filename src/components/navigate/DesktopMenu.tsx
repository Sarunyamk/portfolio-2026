import { NAVBAR_ITEMS } from '@/constants/nav-items';
import NavigateButton from './NavigateButton';

type Props = {
  activeSection: string;
};

export default function DesktopMenu({ activeSection }: Props) {
  return (
    <div className="hidden md:flex gap-4">
      {NAVBAR_ITEMS.map((item) => (
        <NavigateButton
          key={item.id}
          label={item.label}
          id={item.id}
          active={activeSection}
        />
      ))}
    </div>
  );
}

import { NAVBAR_ITEMS } from '@/constants/nav-items';
import NavigateButton from './NavigateButton';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div>&lt;My Portfolio /&gt;</div>
        <div className="flex ">
          {NAVBAR_ITEMS.map((item) => (
            <NavigateButton key={item.id} label={item.label} id={item.id} />
          ))}
        </div>
        <div>EN /TH</div>
      </div>
    </nav>
  );
}

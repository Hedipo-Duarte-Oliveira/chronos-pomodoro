import style from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, TimerIcon } from 'lucide-react';

export function Menu() {
  return (
    <nav className={style.menu}>
      <a className={style.menuLink} href='#'>
        <HouseIcon />
      </a>
      <a className={style.menuLink} href='#'>
        <HistoryIcon />
      </a>
      <a className={style.menuLink} href='#'>
        <SettingsIcon />
      </a>
      <a className={style.menuLink} href='#'>
        <TimerIcon />
      </a>
    </nav>
  );
}

import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('oi');
  return (
    <div>
      <Heading />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vero
        explicabo nemo et aliquid officiis adipisci reiciendis enim id,
        consectetur odio reprehenderit, molestias dignissimos soluta, nisi
        possimus earum consequatur sint.
      </p>
    </div>
  );
}

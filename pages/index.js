import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Restaurantes de Guápiles</h1>
      <ul>
        <li><Link href="/casona">🍴 Restaurante La Casona</Link></li>
        <li><Link href="/buen-sabor">🥪 Soda El Buen Sabor</Link></li>
        <li><Link href="/delicias">🥖 Panadería Delicias</Link></li>
      </ul>
    </div>
  );
}


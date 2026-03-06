import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Restaurantes de Guápiles</h1>
      <div className="menu">
        <Link href="/casona"><button>🍴 Restaurante La Casona</button></Link>
        <Link href="/buen-sabor"><button>🍔 Soda El Buen Sabor</button></Link>
        <Link href="/delicias"><button>🥐 Panadería Delicias</button></Link>
      </div>
    </div>
  );
}

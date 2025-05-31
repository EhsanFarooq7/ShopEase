import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductHighlight from '../components/ProductHighlight';
import ProductList from '../components/ProductList';
import Testimonials from '../components/Testimonials';

const sampleProducts = [
    { id: 1, name: 'T-shirt', price: 20, image: 'https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8MXwwfHx8MA%3D%3D' },
    { id: 2, name: 'Sneakers', price: 50, image: 'https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnN8ZW58MHwxfDB8fHww' },
    { id: 3, name: 'Watch', price: 100, image: 'https://plus.unsplash.com/premium_photo-1681504446264-708b83f4ea12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHwxfDB8fHww' },
];

export default function Home() {
    return (
        <div>
            <Hero />
            <ProductCard />
            <ProductHighlight />
            <ProductList products={sampleProducts} />
            <Testimonials />
            <Footer />
        </div>
    );
}

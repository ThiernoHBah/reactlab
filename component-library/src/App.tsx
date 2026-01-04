import { useState } from 'react';
import { AlertBox } from './components/ AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Engineer'
};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'Noise cancelling headphones',
  inStock: true
};

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <UserProfileCard user={user} showEmail showRole />

      <ProductDisplay
        product={product}
        showDescription
        showStockStatus
        onAddToCart={() => setShowAlert(true)}
      />
    </div>
  );
}

export default App;

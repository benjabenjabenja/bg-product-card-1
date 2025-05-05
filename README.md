# BG-PRODUCT-CARD-1

Paquete de pruebas para despliegue en NPM

_Curso de React Avanzado de Fernando Herrera (seccion 9)_

### Benja Dev

## Ejemplo:

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons, } from 'bg-product-card-1'
```

```
<ProductCard
    product={ product }
    className="bg-dark text-white"
    initialValues={{
        count: 6,
        // maxCount: 10,
    }}>

    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons" />
                
                <button onClick={ reset }>Reset</button>
                <button onClick={ () => increaseBy(-2) }> -2 </button>
                {
                    ( !isMaxCountReached && <button onClick={ ()=> increaseBy(+2) }> +2 </button> )
                }
                
                <span>{ count } - { maxCount }</span>
            </>
        )
    }
</ProductCard>

```
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/music/actions';

const ShowDataBaseComponent = () => {

  const {products, loadingProducts} = useSelector((state) => state.MusicReducer)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProducts())
  }, [])

    return (
    <div>
      {products.map(product => {
        <h1>Mi back:</h1>
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} width={300}></img>
            <p>{product.description}</p>
          </div>
        )
      })}
    </div>
    )

}

ShowDataBaseComponent.propTypes = {};

ShowDataBaseComponent.defaultProps = {};

export default ShowDataBaseComponent;

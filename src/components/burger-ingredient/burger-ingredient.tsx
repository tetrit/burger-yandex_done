import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { addIngredient } from '../../slices/stellarBurgerSlice';
import { useAppDispatch } from '../../services/store';

import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(
  ({ ingredient, count, index }) => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const handleAdd = () => {
      dispatch(addIngredient(ingredient));
    };

    return (
      <BurgerIngredientUI
        ingredient={ingredient}
        count={count}
        locationState={{ background: location }}
        handleAdd={handleAdd}
        index={index}
      />
    );
  }
);

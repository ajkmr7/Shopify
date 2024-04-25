// Libraries
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

// Constants
import COLORS from '../constants/colors';

// Components
import Header from '../components/reusable/Header';
import Categories from '../components/home/Categories';
import ProductList from '../components/home/ProductList';

// Network
import {fetchProducts, fetchCategories} from '../api/product-service';

const HomeScreen = () => {
  const [state, setState] = useState({
    products: [],
    filteredProducts: [],
    appliedFilters: [],
    categories: [],
    isFetching: true,
  });

  const toggleFilter = filter => {
    setState(prevState => {
      if (prevState.appliedFilters.includes(filter)) {
        return {
          ...prevState,
          appliedFilters: prevState.appliedFilters.filter(
            appliedFilter => appliedFilter !== filter,
          ),
        };
      } else {
        return {
          ...prevState,
          appliedFilters: [...prevState.appliedFilters, filter],
        };
      }
    });
  };

  const filterProducts = () => {
    const {products, appliedFilters} = state;
    if (appliedFilters.length === 0) {
      setState(prevState => ({
        ...prevState,
        filteredProducts: products,
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        filteredProducts: products.filter(product => {
          const productCategory = product.category.toLowerCase();
          return appliedFilters.some(
            filter => filter.toLowerCase() === productCategory,
          );
        }),
      }));
    }
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const fetchedProducts = await fetchProducts();
        const fetchedCategories = await fetchCategories();
        setState(prevState => ({
          ...prevState,
          products: fetchedProducts,
          filteredProducts: fetchedProducts,
          categories: fetchedCategories,
          isFetching: false,
        }));
      } catch (error) {
        {
          /** TODO: Handle Error **/
        }
        console.log(error);
      }
    }
    getProducts();
  }, [state.isFetching]);

  useEffect(() => {
    filterProducts();
  }, [state.appliedFilters, state.products]);

  if (state.isFetching) {
    return (
      <View style={[styles.container, styles.loader]}>
        <ActivityIndicator size="large" color={COLORS.primary800} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header}>Our Product</Header>
      <Categories data={state.categories} toggleFilter={toggleFilter} />
      <ProductList products={state.filteredProducts} cardStyle={styles.card} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary200,
  },
  header: {
    margin: 16,
  },
  card: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

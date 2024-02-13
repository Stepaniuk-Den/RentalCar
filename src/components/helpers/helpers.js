export function makerSelectOptions(carData) {
  const arrAllOptions = carData?.map(car => ({
    brandOptions: {
      value: car.make,
      label: car.make,
    },
    priceOptions: {
      value: car.rentalPrice.replace('$', ''),
      label: car.rentalPrice.replace('$', ''),
    },
  }));

  const uniqueBrands = new Set();
  const uniquePrice = new Set();
  const allUniqueOptions = {
    uniqBrandOptions: [],
    uniqPriceOptions: [],
  };

  for (let i = 0; i < arrAllOptions?.length; i++) {
    let objBrand = arrAllOptions[i].brandOptions;
    let brand = objBrand.label;

    if (!uniqueBrands.has(brand)) {
      uniqueBrands.add(brand);
      allUniqueOptions.uniqBrandOptions.push(objBrand);
    }

    let objPrice = arrAllOptions[i].priceOptions;
    let price = objPrice.value;

    if (!uniquePrice.has(price)) {
      uniquePrice.add(price);
      allUniqueOptions.uniqPriceOptions.push(objPrice);
    }
  }
  allUniqueOptions.uniqPriceOptions.sort((a, b) => a.label - b.label);

  return allUniqueOptions;
}

export function handlerSubmitSearch(
  { make, price, fromMileage, toMileage },
  carData
) {
  const filteredCarsMake =
    make === ''
      ? carData
      : carData?.filter(car => car.make.includes(make.trim()));

  const filteredCarsPrice =
    price === ''
      ? filteredCarsMake
      : filteredCarsMake.filter(
          car => parseInt(car.rentalPrice.slice(1)) <= parseInt(price)
        );

  const filter =
    fromMileage === '' && toMileage === ''
      ? filteredCarsPrice
      : filteredCarsPrice.filter(
          car => car.mileage >= fromMileage && car.mileage <= toMileage
        );

  return filter;
}

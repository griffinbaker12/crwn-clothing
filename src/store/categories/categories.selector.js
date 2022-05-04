export const selectCategoriesMap = state =>
  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

// const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//   const { title, items } = docSnapshot.data();
//   console.log(docSnapshot.data());
//   acc[title.toLowerCase()] = items;
//   return acc;
// }, {});

// return categoryMap;

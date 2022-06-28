export default (beerArr) => {
  return beerArr.reduce(
    (
      acc,
      { id, name, first_brewed, abv, ibu, target_og, image_url, tagline }
    ) => {
      const date = new Date();
      date.setMonth(first_brewed.split("/")[0] - 1);

      const dateName = date.toLocaleString("en-US", {
        month: "long",
      });
      acc = [
        ...acc,
        {
          image_url,
          id,
          name,
          first_brewed: `${dateName} ${first_brewed.split("/")[1]}`,
          abv,
          ibu,
          target_og,
          tagline,
        },
      ];
      return acc;
    },
    []
  );
};

import dateStringify from "@/utils/dateStringify";

export default (beerArr) => {
  return beerArr.reduce(
    (
      acc,
      { id, name, first_brewed, abv, ibu, target_og, image_url, tagline }
    ) => {
      const newDate = dateStringify(first_brewed);

      acc = [
        ...acc,
        {
          image_url,
          id,
          name,
          first_brewed: newDate,
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

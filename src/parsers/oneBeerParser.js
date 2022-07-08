export default (beer) => {
  return beer.reduce((acc, item) => {
    const date = new Date();
    date.setMonth(item.first_brewed.split("/")[0] - 1);

    const dateName = date.toLocaleString("en-US", {
      month: "long",
    });

    acc = {
      id: item.id,
      name: item.name,
      tagline: item.tagline,
      firstBrewed: `${dateName} ${item.first_brewed.split("/")[1]}`,
      description: item.description,
      imageUrl: item.image_url,
      abv: item.abv,
      ibu: item.ibu,
      targetFg: item.target_fg,
      targetOg: item.target_og,
      ebc: item.ebc,
      srm: item.srm,
      ph: item.ph,
      attenuationLevel: item.attenuation_level,
      volumeValue: item.volume.value,
      volumeUnit: item.volume.unit,
      boilValue: item.boil_volume.value,
      boilUnit: item.boil_volume.unit,
      mashTemp: item.method.mash_temp[0].temp.value,
      mashTempF: `${(item.method.mash_temp[0].temp.value * 9) / 5 + 32}`,
      mashDur: item.method.mash_temp[0].duration,
      fermentValue: item.method.fermentation.temp.value,
      fermentValueF: `${(item.method.fermentation.temp.value * 9) / 5 + 32}`,
      fermentUnit: item.method.fermentation.temp.unit,
      twist: item.method.twist,
      malt: item.ingredients.malt,
      hops: item.ingredients.hops,
      yeast: item.ingredients.yeast,
      foodPairing: item.food_pairing,
      brewersTips: item.brewers_tips,
      contributedBy: item.contributed_by,
    };
    return acc;
  }, {});
};

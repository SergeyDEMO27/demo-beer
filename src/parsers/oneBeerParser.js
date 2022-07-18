import dateStringify from "@/utils/dateStringify";

export default (beer) => {
  return beer.reduce((acc, item) => {
    const newDate = dateStringify(item.first_brewed);

    acc = {
      id: item.id,
      name: item.name,
      tagline: item.tagline,
      first_brewed: newDate,
      description: item.description,
      image_url: item.image_url,
      abv: item.abv,
      ibu: item.ibu,
      targetFg: item.target_fg,
      target_og: item.target_og,
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

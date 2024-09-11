export function formatPrice(
  price: number | Record<string, number | undefined>,
) {
  if (typeof price === "number") {
    price = price / 100;
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  const prices = Object.entries(price).map(([key, value]) => {
    if (!value) return { name: "", price: "" };
    value = value / 100;
    const priceUSD = value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    key = key.replace("_", " ");
    return {
      name: key,
      price: priceUSD,
    };
  });

  return prices;
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export default (guests, slices) => {
  const slicesInAPizza = 8
  const totalSlices = guests * slices
  const pizzas = Math.ceil(totalSlices / slicesInAPizza)
  return pizzas
}

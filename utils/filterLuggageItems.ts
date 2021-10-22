export default function filterLuggageItems(
  filter: VisibilityFilter,
  items: LuggageItems
) {
  switch (filter.id) {
    case 'show_all':
      return items
    case 'show_active':
      return items.filter((item: LuggageItem) => !item.completed)
    case 'show_completed':
      return items.filter((item: LuggageItem) => item.completed)
    default:
      throw new Error()
  }
}

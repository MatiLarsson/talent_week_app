
export const allTabs = [
  { label: "MIE 27", program: 'THIS IS THE PROGRAM'},
  { label: "JUE 28", program: 'THIS IS THE PROGRAM'},
];

const [MIE, JUE] = allTabs;
export const initialTabs = [MIE, JUE];

export function getNextIngredient(tabs) {
  const existing = new Set(tabs);
  return allTabs.find((tab) => !existing.has(tab));
}

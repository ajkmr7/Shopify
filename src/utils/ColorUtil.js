export const lightenColor = color => {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  const newR = Math.min(255, r + (255 - r) * 0.25);
  const newG = Math.min(255, g + (255 - g) * 0.25);
  const newB = Math.min(255, b + (255 - b) * 0.25);

  const newColor = `#${Math.round(newR)
    .toString(16)
    .padStart(2, '0')}${Math.round(newG)
    .toString(16)
    .padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;

  return newColor;
};

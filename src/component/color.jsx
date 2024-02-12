export function getColorHexCode(colorName) {
    const colorMap = {
      'blond': '#fdba74',
      'n/a': '#808080',
      'none': '#808080',
      'brown': '#8B4513',
      'black': '#000000',
      'white': '#FFFFFF',
      'grey': '#808080',
    };
    const lowerCaseColor = colorName.toLowerCase();
  
    return colorMap[lowerCaseColor] || '#808080';
  }
  
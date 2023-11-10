function getShadesOfColor(color: string, opacity: string) {
    try {
    var r = parseInt(color.slice(1, 3), 16),
        g = parseInt(color.slice(3, 5), 16),
        b = parseInt(color.slice(5, 7), 16);

    if (opacity) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    } catch{
        return 'rgb(' + 0 + ', ' + 0 + ', ' + 0 + ')';
    } 
}

export default getShadesOfColor;

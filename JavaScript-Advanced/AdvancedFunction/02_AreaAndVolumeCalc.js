function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let json = JSON.parse(input)
    let output = json.map(e =>({
        area: Math.abs(area.call(e)),
        volume: Math.abs(vol.apply(e))
    }))
    return output
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ))
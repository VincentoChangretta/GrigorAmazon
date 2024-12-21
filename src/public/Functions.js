export function calculateTestValue(testValue) {
    const counts = {
        A: 0,
        B: 0,
        C: 0,
    }
    const incrementCount = {
        A: () => counts.A++,
        B: () => counts.B++,
        C: () => counts.C++
    };
    testValue.forEach(answer => {
        const key = answer[1]
        if (incrementCount[key]) {
            incrementCount[key]()
        }
    })
    return counts
}
export function calculateEndValue(counts) {
    let aVal = 0
    let bVal = 0
    let cVal = 0
    for (let key in counts) {
        switch (key) {
            case "A":
                aVal = counts[key] * 0
            case "B":
                bVal = counts[key] * 1
            case "C":
                cVal = counts[key] * 2
        }
    }
    return aVal + bVal + cVal
}
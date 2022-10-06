export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0, high = haystack.length
    do {
        let mid = Math.floor(low + (high - low) / 2)
        let value = haystack[mid]
        if(needle === value) {
            return true
        }
        else if (needle > value) {
            low = mid + 1
        }
        else {
            high = mid
        }
    }while(low < high)
    return false
}
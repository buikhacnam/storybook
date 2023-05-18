export const beautifyDate = (date: string) => {
    let dateNow = new Date()
    let dateInput = new Date(date)
    let diff = dateNow.getTime() - dateInput.getTime()
    let diffDays = Math.floor(diff / (1000 * 3600 * 24))
    let diffHours = Math.floor(diff / (1000 * 3600))
    let diffMinutes = Math.floor(diff / (1000 * 60))
    let diffSeconds = Math.floor(diff / 1000)
    if (diffDays > 0) {
        if (diffDays === 1) {
            return `${diffDays} day ago`
        }
        return `${diffDays} days ago`
    } else if (diffHours > 0) {
        if (diffHours === 1) {
            return `${diffHours} hour ago`
        }
        return `${diffHours} hours ago`
    } else if (diffMinutes > 0) {
        if (diffMinutes === 1) {
            return `${diffMinutes} minute ago`
        }
        return `${diffMinutes} minutes ago`
    } else if (diffSeconds > 0) {
        if (diffSeconds === 1) {
            return `${diffSeconds} second ago`
        }
        return `${diffSeconds} seconds ago`
    } else {
        return 'just now'
    }
}

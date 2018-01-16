const centsToDollarString = (cents) => {
    if(typeof cents !== 'number') throw TypeError()
    const centStr = cents.toString()
    const justDollars = cents > 99 ? centStr.slice(0,-2) : '0'
    const justCents = cents > 9 ? centStr.slice(-2) : '0' + centStr
    return '$' + justDollars + '.' + justCents
}

export default centsToDollarString
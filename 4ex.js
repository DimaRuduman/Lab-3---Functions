    const result = [];

    for (const key in iface){
        console.log (iface[key])

    const type = typeof iface[key]
    if (type === 'function'){
        result.push([key, iface[key].length]);
    }
    }
    return result;


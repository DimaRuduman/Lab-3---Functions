    const generateKey = (length, characters) => {
    let key = '';

    for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length)
    const symbol = characters[index];
    key += symbol;
    console.log (key);
    }


    return key;
    };

    generateKey(12, 'asdfghjkl;');
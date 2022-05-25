function getById(id) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log(`Got ${id}`);
            resolve(id);
        }, 1000);
    })
}

(async function() {
    const ids = [10, 20, 30, 40, 50, 60];
    
    // for(const id of ids) {
    //     await getById(id);
    // }

    ids.forEach(async (id) => {
        await getById(id);
    });
})();

// forEach is not compatible with async functions, all code runs at once
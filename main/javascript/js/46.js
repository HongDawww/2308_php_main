async function test() {
    await PRO3('a',3000);
    await PRO3('b',2000);
    await PRO3('c',1000);
}

// 병렬처리 하는 방법 : promise.all()

async function test2() {
    return Promise.all(PRO3('a',3000),)
}
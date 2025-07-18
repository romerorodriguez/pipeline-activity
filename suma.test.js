const suma = require('./suma'); 

function test(desc, fn) {
    try {
        fn();
        console.log("✅" + desc);
    } catch (error) {
        console.error("❌" + desc);
        console.error("" + error.message);
        process.exitCode = 1;
    }
}

function assertEquals(actual, esperado) {
    if (actual !== esperado) {
        throw new Error(`Esperado: ${esperado}, pero obtuvo ${actual}`);
    }
}

test("Suma 2 + 2 = 4", () => {
    assertEquals(suma(3,0),3);
}); 

test("Suma 3 + 3 = 6", () => {
    assertEquals(suma(3,3),6);
}); 
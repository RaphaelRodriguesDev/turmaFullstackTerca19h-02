# Concatenação de strings javascript

Em JavaScript, você pode concatenar strings de várias maneiras. Aqui estão algumas das formas mais comuns de fazer isso:

## 1. Usando o operador `+`

Você pode usar o operador `+` para concatenar strings:

```javascript
let str1 = "Olá, ";
let str2 = "mundo!";
let resultado = str1 + str2;
console.log(resultado); // Saída: Olá, mundo!
```

## 2. Usando o método `concat()`

O método `concat()` pode ser usado para concatenar strings:

```javascript
let str1 = "Olá, ";
let str2 = "mundo!";
let resultado = str1.concat(str2);
console.log(resultado); // Saída: Olá, mundo!
```

## 3. Usando o template literals (template strings)

O template literals (template strings) podem ser usados para concatenar strings:

```javascript
let str1 = "Olá, ";
let str2 = "mundo!";
let resultado = `${str1}${str2}`;
console.log(resultado); // Saída: Olá, mundo! 
```

## 4. Usando o objeto `String`

O objeto `String` também pode ser usado para concatenar strings:

```javascript
let str1 = "Olá, ";
let str2 = "mundo!";
let resultado = new String(str1).concat(str2);
console.log(resultado); // Saída: Olá, mundo!
```

Essas são algumas das maneiras mais comuns de concatenar strings em JavaScript. Escolha a que melhor se adapta ao seu caso de uso!

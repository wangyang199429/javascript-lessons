// let a
let div1 = document.getElementById('div1')
let url = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
let p = new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = () => {
        console.log(111)
        resolve(img)
    }
    img.onerror = () => {
        reject(img)
    }
    img.src= url
})



// let p = new Promise((resolve, reject) => {
//     let img = document.createElement('img')
//     img.onload = () => {
//         console.log(111)
//         resolve(img)
//     }
//     img.onerror = () => {
//         reject(img)
//     }
//     img.src = url
// })

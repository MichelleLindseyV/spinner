const symbol = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
 let time = 100
 
 for (let i = 0; i < symbol.length; i ++) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol[i]}  `);
  }, time += 200);
};


 

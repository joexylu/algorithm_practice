// MyPromise
// class MyPromise {
//   thenCallBackQueue = [];
//   currentData;

//   constructor(exe) {
//     exe(this.resolve, this.reject.bind(this));
//   }
//   resolve = data => {
//     setTimeout(() => {
//       this.currentData = data;
//       while (this.thenCallBackQueue.length) {
//         const cb = this.thenCallBackQueue.shift();
//         if (this.currentData instanceof MyPromise) {
//           this.currentData.then(dataFromRes => {
//             this.currentData = cb(dataFromRes);
//           });
//         } else {
//           this.currentData = cb(this.currentData);
//         }
//       }
//     });
//   };
//   // reject() { }
//   then(thenCallBack) {
//     this.thenCallBackQueue.push(thenCallBack);
//     return this;
//   }
//   // catch(catchCallBack) { }
//   // all() {}
// }

class MyPromise {
  promiseState = 'pendding';
  thenCallBackQueue = [];
  catchCallBackQueue = [];
  currentData;
  currentError;

  constructor(exe) {
      exe(this.resolve, this.reject.bind(this));
  }
  resolve = (data) => {
      if (this.promiseState === 'failed') return;
      this.promiseState = 'fulfilled';
      setTimeout(() => {
          this.currentData = data;

          while (this.thenCallBackQueue.length) {
              const cb = this.thenCallBackQueue.shift();
              if (this.currentData instanceof MyPromise) {
                  // this.promiseState = 'pendding';
                  this.currentData.then(dataFromRes => {
                      this.currentData = cb(dataFromRes)
                  });
                  this.currentData.catch(error => {
                      this.currentError = error;
                  });
              } else {
                  this.currentData = cb(this.currentData);
              }
          }
      }, 0);
  }
  reject(error) {
      if (this.promiseState === 'fulfilled') return;
      this.promiseState = 'failed';
      setTimeout(() => {
          this.currentError = error;
          if (this.catchCallBackQueue.length) {
              const cb = this.catchCallBackQueue.shift();
              cb(this.currentError);
          }
      }, 0);
  }
  then(thenCallBack) {
      this.thenCallBackQueue.push(thenCallBack);
      return this;
  }
  catch(catchCallBack) {
      this.catchCallBackQueue.push(catchCallBack);
  }

  static all(array) {
      let counter = 0;
      const arrLength = array.length;
      const resolveData = new Array(arrLength);

      return new MyPromise((res, rej) => {
          array.forEach((ele, i) => {
              ele.then(data => {
                  counter++;
                  resolveData[i] = data;
                  if (arrLength === counter) res(resolveData);
              })
          });
      });
  }
}

const p = new Promise((resolve, reject) => {
      resolve('hello');
      // reject(new Error('fail'));
})
  .then(data => {
      console.log('this is data: ', data);
      return new Promise((res, rej) => {
          res('Dio');
          rej('Jojo');
      });
  })
  .then(data2 => console.log('this is data2: ', data2))
  .catch(err => console.log(err));


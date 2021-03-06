const {SyncLoopHook} = require('tapable'); // 解构同步钩子

class Lesson {
    constructor() {
        this.index = 0;
        this.hooks = {
            // 订阅钩子
            arch: new SyncLoopHook(['name', 'age'])
        }
    }
    start() {
        // 利用钩子的call方法调用监听函数
        this.hooks.arch.call('tom', 12);
    }
    tap() {
        // 利用钩子的tap方法注册监听函数
        this.hooks.arch.tap('node', (name, age) => {
            console.log('node', `${name}-${age}`); // node tom-12
            return ++this.index === 3 ? undefined : '继续学';
        });
        this.hooks.arch.tap('vue', name => {
            console.log('vue', name);
        });
    }
}

const l = new Lesson();
console.log(l.hooks.arch);
l.tap(); // 注册监听函数
console.log(l.hooks.arch.taps);
l.start(); // 启动钩子
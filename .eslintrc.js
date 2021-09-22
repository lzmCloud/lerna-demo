module.exports = {
    'root': true,
    'env': {
      'node': true,
      'browser': true
    },
    'extends': [
      'plugin:vue/essential',
      // "eslint:recommended"
    ],
    'parserOptions': {
      'parser': 'babel-eslint'
    },
    /**
       * "off"或者0    //关闭规则关闭
       * "warn"或者1    //在打开的规则作为警告（不影响退出代码）
       * "error"或者2    //把规则作为一个错误（退出代码触发时为1）
       */
    'rules': {
      'vue/no-dupe-keys': 'off',
      'vue/no-unused-components': 'off',
      'vue/no-parsing-error': 'off',
      'vue/no-duplicate-attributes': 'off',
      'vue/no-side-effects-in-computed-properties': 'off',
      'vue/no-unused-vars': 'off',
      'vue/no-use-v-if-with-v-for': 'off',
      'vue/valid-v-for': 'off',
      'vue/require-valid-default-prop': 'off',
      'vue/return-in-computed-property': 'off',
      'indent': ['warn', 2],
      'eqeqeq': 'warn', //强制全等( === 和 !==)
      // 'func-names': 'warn', //函数表达式必须有名字
      'camelcase': 'warn', //强制驼峰法命名
      'no-unused-vars': 'warn', //禁止出现未使用过的变量
      'no-redeclare': 'warn', //禁止多次声明同一变量
      'no-use-before-define': 'warn', //禁止在变量定义之前使用它们
      'no-shadow': ['warn', { //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        'allow': ['resolve', 'reject', 'done', 'cb']
      }],
      'quotes': ['warn', 'single'], //引号类型 `` "" ''
      'no-nested-ternary': 'warn', // 禁止嵌套三元表达式
      'no-multi-spaces': 'warn',//不允许出现多余的空格
      'no-loop-func': 'warn', //不允许在循环语句中进行函数声明
      'no-extra-bind': 'warn', //不允许不必要的函数绑定
    },
  }
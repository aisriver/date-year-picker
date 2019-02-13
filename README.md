# progresspie
从不同角度创造自定义元素.

# how to use
## step 1
- npm install -g cnpm --registry=https://registry.npm.taobao.org
- cnpm install year-picker --save
- 或者使用 yarn add year-picker

## step 2
import YearPicker from 'year-picker';

- use in react

<pre>
    &ltYearPicker
        createElement={React.createElement}
        width="150px"
        height="150px"
        percent="45"
        backColor="#655"
        percentColor="yellowgreen"
    /&gt

    react 通过jsx创建自定义组件并导出html模版，为了借用它这种工作模式，需要把React.createElement方法传入进来  否则返回空内容

    react 同时适用下面这种方法
</pre>

- use in 其他框架

<pre>
    &ltyear-picker
        width="150px"
        height="150px"
        percent="45"
        backColor="#655"
        percentColor="yellowgreen"
    &gt
    &lt/year-picker&gt

    在引人组件的时候同时创建了自定义元素 year-picker 直接在html传入对应属性即可

</pre>

有什么好的想法，欢迎一起成长交流
WeChat：mrliaojun

### github
[Jared](https://github.com/aisriver/year-picker.git)
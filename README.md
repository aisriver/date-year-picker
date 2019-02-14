# date-year-picker
年代选择器

# how to use
## step 1
- npm install -g cnpm --registry=https://registry.npm.taobao.org
- cnpm install date-year-picker --save
- 或者使用 yarn add date-year-picker

## step 2
import DateYearPicker from 'date-year-picker';

使用日期选择器的时候，突然发现年选择器比较少，
工作中恰好有这样的需求，所以就使用原生封装了一个

- use in react

<pre>
    &ltDateYearPicker
        createElement={React.createElement}
        placeholder="请选择所属财年"
    /&gt

    react 通过jsx创建自定义组件并导出html模版，为了借用它这种工作模式，
    需要把React.createElement方法传入进来  否则返回空内容

    <h3>⚠️ 注意</h3>
    如果在react表单验证中使用，控制台有可能会抛出以下异常：
    <span style="color: red;">“Function components cannot be given refs. 
    Attempts to access this ref will fail.”</span>
    原因是不能为函数组件提供引用，虽然不影响使用，
    但是看起来让人很不舒服
    这时候你需要将它转化一下，如下：

    class SetDateYearPicker extends React.Component {
        render() {
            return &ltDateYearPicker {...this.props} /&gt
        }
    }
    然后在getFieldDecorator下便可正常使用
    &ltSetDateYearPicker
        createElement={React.createElement}
        placeholder="请选择所属财年"
    /&gt

    react 同时适用下面这种方法
</pre>

- use in 其他框架

<pre>
    &ltdate-year-picker
        placeholder="请选择所属财年"
    &gt
    &lt/date-year-picker&gt

    在引人组件的时候同时创建了自定义元素 date-year-picker 直接在html传入对应属性即可

</pre>

有什么好的想法，欢迎一起成长交流
WeChat：mrliaojun

### github
[Jared](https://github.com/aisriver/date-year-picker.git)
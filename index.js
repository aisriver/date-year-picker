; (function () {
    "use strict"
    var _global;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML =
        '.yearPicker > input {' +
        '   position: relative;' +
        '   display: inline-block;' +
        '   padding: 4px 11px;' +
        '   width: 100%;' +
        '   height: 32px;' +
        '   font-size: 14px;' +
        '   line-height: 1.5;' +
        '   color: rgba(0, 0, 0, 0.65);' +
        '   background-color: #fff;' +
        '   background-image: none;' +
        '   border: 1px solid #d9d9d9;' +
        '   border-radius: 4px;' +
        '}'
        +
        '.yearPicker > input:hover {' +
        '   border: 1px solid #00adc4;' +
        '}'
        +
        '.yearPicker > input:focus {' +
        '   border: 1px solid #00adc4;' +
        '   outline: none;' +
        '}'
        +
        '.pickerModel {' +
        '   position: relative;' +
        '   outline: none;' +
        '   width: 280px;' +
        '   border: 1px solid #fff;' +
        '   list-style: none;' +
        '   font-size: 14px;' +
        '   text-align: left;' +
        '   background-color: #fff;' +
        '   border-radius: 4px;' +
        '   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);' +
        '   background-clip: padding-box;' +
        '   line-height: 1.5;' +
        '}'
        +
        '.pickerModel > .pickerHeader {' +
        '   text-align: center;' +
        '   border-bottom: 1px solid #e8e8e8;' +
        '}'
        +
        '.pickerModel > .pickerHeader > .btn {' +
        '   position: absolute;' +
        '   top: 0;' +
        '   color: rgba(0, 0, 0, 0.45);' +
        '   padding: 0 5px;' +
        '   font-size: 16px;' +
        '   display: inline-block;' +
        '   line-height: 40px;' +
        '   cursor: pointer;' +
        '}'
        +
        '.pickerModel > .pickerHeader > .leftButton {' +
        '   left: 7px;' +
        '}'
        +
        '.pickerModel > .pickerHeader > .rightButton {' +
        '   right: 7px;' +
        '}'
        +
        '.pickerModel > .pickerHeader > .showRange {' +
        '   padding: 0 2px;' +
        '   font-weight: 500;' +
        '   display: inline-block;' +
        '   color: rgba(0, 0, 0, 0.85);' +
        '   line-height: 40px;' +
        '}'
        +
        '.pickerModel > .pickerBody {' +
        '   flex: 1 1;' +
        '}'
        +
        '.pickerModel > .pickerBody > table {' +
        '   width: 100%;' +
        '}'
        +
        '.pickerModel > .pickerBody > table > tr > td {' +
        '   text-align: center;' +
        '   line-height: 40px;' +
        '}'
        +
        '.yearA {' +
        '   margin-top: 8px;' +
        '   display: inline-block;' +
        '   cursor: pointer;' +
        '   text-align: center;' +
        '   height: 24px;' +
        '   line-height: 24px;' +
        '   padding: 0 8px;' +
        '   border-radius: 2px;' +
        '}'
        +
        '.yearSelect {' +
        '   background: #22aac1;' +
        '   color: #fff;' +
        '}'
        ;
    document.head.appendChild(style);
    var yearPicker = Object.create(HTMLElement.prototype, {
        /* 元素生命周期的事件 */
        // 实例化时触发
        createdCallback: {
            value: function () {
                // console.log('invoked createCallback!');
            },
        },
        // 元素添加到DOM树时触发
        attachedCallback: {
            value: function () {
                // console.log('invoked attachedCallback!');
            },
        },
        // 元素DOM树上移除时触发
        detachedCallback: {
            value: function () {
                // console.log('invoked detachedCallback!');
            },
        },
        // 元素的attribute发生变化时触发
        attributeChangedCallback: {
            value: function (attrName, oldVal, newVal) {
                // console.log('attributeChangedCallback-change' + attrName + 'from' + oldVal + 'to' + newVal);
                customTag('year-picker', myElementHandler);
            },
        },
        /* 定义元素的公有方法和属性 */
        // 重写  属性
        value: {
            get: function () { return this.getAttribute('value'); },
            set: function (val) { this.setAttribute('value', val); },
        },
    });

    document.registerElement('year-picker', { prototype: yearPicker });

    function customTag(tagName, fn) {
        Array
            .from(document.getElementsByTagName(tagName))
            .forEach(fn);
    }

    function tryToParse(a) {
        var b = a;
        try {
            b = JSON.parse(b);
        } catch (error) { }
        return b;
    }

    function myElementHandler(element) {
        var value = tryToParse(element.value) || '';
        var defaultValue = tryToParse(element.defaultValue) || '2019';
        var className = element.class || '';
        className = element.className || className;
        if (!/yearPicker/.test(className) && className) {
            className = className + ' yearPicker';
        } else {
            className = 'yearPicker';
        }
        element.className = className;
        console.log('element', element);

        var inputDom = document.createElement('input');
        inputDom.placeholder = element.getAttribute('placeholder');
        inputDom.value = value || defaultValue;
        var pickerDom = addPickerDom(element, inputDom);
        Array.from(document.getElementsByClassName('pickerModel')).forEach(function (a) {
            document.body.removeChild(a);
        });
        document.body.appendChild(pickerDom);
        inputDom.addEventListener('focus', function () {
            pickerDom.style.display = '';
        });
        element.innerHTML = '';
        element.appendChild(inputDom);
    }

    function addPickerDom(element, inputDom) {
        var nowYear = inputDom.value;
        var pickerDom = document.createElement('div');
        var yearArr = [];
        pickerDom.className = element.pickerClass || '';
        if (!/pickerModel/.test(pickerDom.className) && pickerDom.className) {
            pickerDom.className = pickerDom.className + ' pickerModel';
        } else {
            pickerDom.className = 'pickerModel';
        }
        var pickerHeader = document.createElement('div');
        pickerHeader.className = 'pickerHeader';
        var leftButton = document.createElement('a');
        leftButton.innerHTML = '<';
        leftButton.setAttribute('role', 'button');
        leftButton.title = '上一年代';
        leftButton.className = 'leftButton btn';
        leftButton.addEventListener('click', function (e) {
            renderTable(yearArr[0] - 10);
        });

        var rightButton = document.createElement('a');
        rightButton.innerHTML = '>';
        rightButton.setAttribute('role', 'button');
        rightButton.title = '下一年代';
        rightButton.className = 'rightButton btn';
        rightButton.addEventListener('click', function (e) {
            renderTable(yearArr[0] + 10);
        });

        var showRange = document.createElement('span');
        showRange.innerHTML = "2010-2019";
        showRange.className = 'showRange';
        pickerHeader.innerHTML = '';
        pickerHeader.appendChild(leftButton);
        pickerHeader.appendChild(showRange);
        pickerHeader.appendChild(rightButton);

        var pickerBody = document.createElement('div');
        pickerBody.className = 'pickerBody';
        var yearPanelTable = document.createElement('table');
        var startNum = Number(nowYear) - Number(nowYear.substring(nowYear.length - 1, nowYear.length)) - 1;
        renderTable(startNum)
        function renderTable(startNum) {
            pickerBody.innerHTML = '';
            yearPanelTable.innerHTML = '';
            yearArr = [];
            for (var i = 0; i < 12; i++) {
                yearArr.push(startNum + i);
            }
            for (var i = 0; i < 4; i++) {
                var trDom = document.createElement('tr');
                for (var n = 0; n < 3; n++) {
                    var tdDom = document.createElement('td');
                    var aTd = document.createElement('a');
                    aTd.innerHTML = yearArr[i * 3 + n];
                    aTd.className = 'yearA';
                    aTd.addEventListener('click', function (a) {
                        Array.from(document.getElementsByClassName('yearA')).forEach(function (b) {
                            b.className = 'yearA';
                        });
                        this.className = this.className === 'yearA yearSelect' ? 'yearA' : 'yearA yearSelect';
                        element.value = this.innerHTML;
                    });
                    tdDom.appendChild(aTd);
                    trDom.appendChild(tdDom);
                }
                yearPanelTable.appendChild(trDom);
            }
            pickerBody.appendChild(yearPanelTable);
        }

        pickerDom.innerHTML = '';
        pickerDom.appendChild(pickerHeader);
        pickerDom.appendChild(pickerBody);
        pickerDom.style.display = 'none';
        return pickerDom;
    }

    customTag('year-picker', myElementHandler);

    var YearPicker = function (props) {
        setTimeout(function () {
            customTag('year-picker', myElementHandler);
        }, 0);
        props = props || {};
        if (props.createElement) {
            var obj = {};
            for (var key in props) {
                if (key !== 'createElement') {
                    obj[key] = props[key];
                    if (typeof obj[key] === 'object') {
                        obj[key] = JSON.stringify(obj[key]);
                    }
                }
            }
            return props.createElement('year-picker', obj);
        } else {
            console.error("Can't find createElement.")
            return '';
        }
    };

    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = YearPicker;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return YearPicker; });
    } else {
        !('YearPicker' in _global) && (_global.YearPicker = YearPicker);
    }
}());
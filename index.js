; (function () {
    "use strict"
    var _global;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML =
        '.yearPicker {' +
        '   font-size: 14px;' +
        '   width: 100%;' +
        '   font-variant: tabular-nums;' +
        '   line-height: 1.5;' +
        '   color: rgba(0, 0, 0, 0.65);' +
        '   box-sizing: border-box;' +
        '   margin: 0;' +
        '   padding: 0;' +
        '   list-style: none;' +
        '   position: relative;' +
        '   display: inline-block;' +
        '   outline: none;' +
        '   transition: opacity 0.3s;' +
        '}'
        +
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
        '.date-year-picker {' +
        '   display: inline-block;' +
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
        '   z-index: 99;' +
        '   position: absolute;' +
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
        '.pickerModel > .pickerHeader > .leftButton:after {' +
        '   content: "\\AB";' +
        '}'
        +
        '.pickerModel > .pickerHeader > .rightButton {' +
        '   right: 7px;' +
        '}'
        +
        '.pickerModel > .pickerHeader > .rightButton:after {' +
        '   content: "\\BB";' +
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
        +
        '.yearSelect {' +
        '   background: #22aac1;' +
        '   color: #fff;' +
        '}'
        +
        '.yearPicker > input::-webkit-input-placeholder {' +
        '   color: #c0c0c0;' +
        '}'
        +
        '.yearPicker > input::-moz-placeholder  {' +
        '   color: #c0c0c0;' +
        '}'
        +
        '.yearPicker > input::-ms-input-placeholder {' +
        '   color: #c0c0c0;' +
        '}'
        +
        '.pickerIcon {' +
        '   z-index: 1;' +
        '}'
        +
        '.pickerIcon , .pickerClear {' +
        '   font-size: 14px;' +
        '   color: rgba(0, 0, 0, 0.25);' +
        '   display: inline-block;' +
        '   line-height: 1;' +
        '   position: absolute;' +
        '   width: 14px;' +
        '   height: 14px;' +
        '   right: 12px;' +
        '   top: 50%;' +
        '   margin-top: -7px;' +
        '   user-select: none;' +
        '}'
        +
        '.pickerClear {' +
        '   z-index: 2;' +
        '   opacity: 0;' +
        '   background: #fff;' +
        '   cursor: pointer;' +
        '}'
        +
        '.yearPicker:hover > .pickerClear {' +
        '   opacity: 1;' +
        '}'
        ;
    document.head.appendChild(style);

    class YearPicker extends HTMLElement {

        constructor() {
            super();
        }

        static get observedAttributes() { return ['value']; }

        /* 元素生命周期的事件 */
        // 实例化时触发
        createdCallback() {
            // console.log('invoked createCallback!');
        }
        // 元素添加到DOM树时触发
        attachedCallback() {
            // console.log('invoked attachedCallback!');
        }
        // 元素DOM树上移除时触发
        detachedCallback() {
            // console.log('invoked detachedCallback!');
        }
        // 元素的attribute发生变化时触发
        attributeChangedCallback(attrName, oldVal, newVal) {
            // console.log('attributeChangedCallback-change' + attrName + 'from' + oldVal + 'to' + newVal);
            customTag('date-year-picker', myElementHandler);
        }

        get value() {
            return this.getAttribute('value');
        }

        set value(val) {
            this.setAttribute('value', val);
        }
    }

    window.customElements.define('date-year-picker', YearPicker);

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

    function getOffsetLeft(obj) {
        var tmp = obj.offsetLeft;
        var val = obj.offsetParent;
        while (val != null) {
            tmp += val.offsetLeft;
            val = val.offsetParent;
        }
        return tmp;
    }

    function getOffsetTop(obj) {
        var tmp = obj.offsetTop;
        var val = obj.offsetParent;
        while (val != null) {
            tmp += val.offsetTop;
            val = val.offsetParent;
        }
        return tmp;
    }

    function getScrollLeft(obj) {
        var tmp = obj.scrollLeft;
        var val = obj.parentElement;
        while (val != null) {
            tmp += val.scrollLeft;
            val = val.parentElement;
        }
        return tmp;
    }

    function getScrollTop(obj) {
        var tmp = obj.scrollTop;
        var val = obj.parentElement;
        while (val != null) {
            tmp += val.scrollTop;
            val = val.parentElement;
        }
        return tmp;
    }

    function isChildOf(child, parent) {
        var parentNode;
        if (child && parent) {
            parentNode = child.parentNode;
            while (parentNode) {
                if (parent === parentNode) {
                    return true;
                }
                parentNode = parentNode.parentNode;
            }
        }
        return false;
    }

    function onChange(e, element) {
        try {
            if (/date-year-picker/.test(element.parentElement.className)) {
                element.parentElement.value = element;
                if (element.parentElement.onChange) {
                    element.parentElement.onChange(e, element);
                }
                if (element.parentElement.onchange) {
                    element.parentElement.onchange(e, element);
                }
            }
            if (element.onChange) {
                element.onChange(e, element);
            }
            if (element.onchange) {
                element.onchange(e, element);
            }
        } catch (error) {
            console.warn(error);
        }
    }

    var defaultPath = 'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z';
    var clearPath = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z';

    function myElementHandler(element) {
        var value = tryToParse(element.value) || '';
        var defaultValue = tryToParse(element.defaultValue) || new Date().getFullYear();
        var className = element.class || '';
        className = element.className || className;
        if (!/yearPicker/.test(className) && className) {
            className = className + ' yearPicker';
        } else {
            className = 'yearPicker';
        }
        element.className = className;

        var inputDom = document.createElement('input');
        inputDom.placeholder = element.getAttribute('placeholder');
        inputDom.defaultValue = value || defaultValue;
        inputDom.value = value;
        inputDom.type = 'number';
        var pickerDom = addPickerDom(element, inputDom);
        Array.from(document.getElementsByClassName('pickerModel')).forEach(function (a) {
            document.body.removeChild(a);
        });
        document.body.appendChild(pickerDom);
        inputDom.addEventListener('focus', function (e) {
            pickerDom.style.display = '';
            pickerDom.style.left = (getOffsetLeft(e.target) - getScrollLeft(e.target)) + 'px';
            pickerDom.style.top = (getOffsetTop(e.target) - getScrollTop(e.target)) + 'px';
        });
        document.addEventListener('click', function (e) {
            // 如果e.target不是pickerDom的children 且不是element的children
            if (
                e.target !== element
                && e.target !== pickerDom
                && !isChildOf(e.target, pickerDom)
                && !isChildOf(e.target, element)
                && (pickerDom.style.display !== 'none')
            ) {
                pickerDom.style.display = 'none';
            }
        });
        inputDom.onchange = function (e) {
            onChange(e.target.value, element);
        };

        var pickerIcon = createIcon('pickerIcon', defaultPath);
        element.innerHTML = '';
        element.appendChild(inputDom);
        element.appendChild(pickerIcon);
        if (value) {
            var pickerClear = createIcon('pickerClear', clearPath);
            pickerClear.addEventListener('click', function (e){
                element.value = '';
                onChange('', element);
            });
            element.appendChild(pickerClear);
        }
    }

    function createIcon(className, path) {
        var icon = document.createElement('i');
        icon.className = className;
        icon.innerHTML = '<svg viewBox="64 64 896 896" width="1em" height="1em" aria-hidden="true" fill="currentColor">' +
            '<path d="' + path + '">' +
            '</path>' +
            '</svg>';
        return icon;
    }

    function addPickerDom(element, inputDom) {
        var nowYear = inputDom.value || JSON.stringify(new Date().getFullYear());
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
        leftButton.setAttribute('role', 'button');
        leftButton.title = '上一年代';
        leftButton.className = 'leftButton btn';
        leftButton.addEventListener('click', function (e) {
            renderTable(yearArr[0] - 10);
        });

        var rightButton = document.createElement('a');
        rightButton.setAttribute('role', 'button');
        rightButton.title = '下一年代';
        rightButton.className = 'rightButton btn';
        rightButton.addEventListener('click', function (e) {
            renderTable(yearArr[0] + 10);
        });

        var showRange = document.createElement('span');
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
            showRange.innerHTML = yearArr[0] + ' - ' + yearArr[yearArr.length - 1];
            for (var i = 0; i < 4; i++) {
                var trDom = document.createElement('tr');
                for (var n = 0; n < 3; n++) {
                    var tdDom = document.createElement('td');
                    var aTd = document.createElement('a');
                    aTd.innerHTML = yearArr[i * 3 + n];
                    aTd.className = 'yearA';
                    if (aTd.innerHTML === nowYear) {
                        aTd.className = 'yearA yearSelect';
                    }
                    aTd.addEventListener('click', function (a) {
                        Array.from(document.getElementsByClassName('yearA')).forEach(function (b) {
                            b.className = 'yearA';
                        });
                        this.className = 'yearA yearSelect';
                        element.value = this.innerHTML;
                        onChange(this.innerHTML, element);
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

    customTag('date-year-picker', myElementHandler);

    var DateYearPicker = function (props) {
        setTimeout(function () {
            customTag('date-year-picker', myElementHandler);
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
                    // if (key === 'className' && props.className) {
                    //     obj.className = obj.className + ' ' + props.className;
                    // }
                    if (key === 'onChange') {
                        onChange = props.onChange;
                    }
                }
            }
            // console.log('[date-year-picker]props', props);
            return props.createElement('date-year-picker', obj);
        } else {
            console.error("Can't find createElement.")
            return '';
        }
    };

    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = DateYearPicker;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return DateYearPicker; });
    } else {
        !('DateYearPicker' in _global) && (_global.DateYearPicker = DateYearPicker);
    }
}());
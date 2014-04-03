/**
 * Created by Tamir on 31/03/14.
 */

// Create styling string
var styleStr = ".triChart {width: 100%;min-height: 19px;position: absolute;background-color: #f6f6f6;}";
styleStr += ".triChart #bottomTriangle {float: left;height: 8px;width: 16px;position: absolute;bottom: 0;z-index: 99;background: url(style/images/bottomTriangle.png) no-repeat bottom;}";
styleStr += ".triChart #topTriangle {float: left;height: 19px;width: 9px;position: absolute;top: 0;background: url(style/images/topTriangle.png) no-repeat bottom;}";


var _triChart = (function(me) {
    me.init = function(element) {
        me.avgVal = parseFloat(element.data("avg"));
        me.currentVal =  parseFloat(element.data("val"));
        me.element = element ;
        me.elementWidth = element.outerWidth();
        me.bottomTriangleBase = 16;
        me.topTriangleBase = 9;
        me.render();
        //add container and triangles styles
        $("head").append("<style>" + styleStr + "</style>");
    };

    me.render = function() {
        var container = $("<div/>", {class:"triChart"});
        var bottomTriangle = $("<span/>",{id: "bottomTriangle"});
        var topTriangle = $("<span/>",{id: "topTriangle"});
        var bottomPos = me.findTrianglePos(me.currentVal, me.bottomTriangleBase );
        var topPos = me.findTrianglePos(me.avgVal, me.topTriangleBase );
        //max-min triangle position check, makes sure triangles don't exceed container width
        var maxBottomPos = 100 - me.bottomTriangleBase / me.elementWidth * 100;
        var minBottomPos = (me.bottomTriangleBase / 2) / me.elementWidth * 100;
        var maxTopPos = 100 -me.topTriangleBase / me.elementWidth * 100;
        var minTopPos = (me.topTriangleBase / 2) / me.elementWidth * 100;

        if(bottomPos >  maxBottomPos) {
            bottomPos = maxBottomPos;
        }
        if(me.currentVal <= minBottomPos) {
            bottomPos = 0;
        }
        if(topPos > maxTopPos) {
            topPos = maxTopPos;
        }
        if(me.avgVal <= minTopPos) {
            topPos = 0;
        }
        //positioning the triangles
        bottomTriangle.animate({"left": bottomPos + "%"}, 1500);
        topTriangle.animate({"left": topPos + "%"}, 1500);
        //rendering the container and triangles
        container.append([bottomTriangle,topTriangle]);
        me.element.html(container);
    };
    //calculating triangles' position
    me.findTrianglePos = function(val, baseLength){
        return val  - ((baseLength / 2) / me.elementWidth * 100);
    };

    return me;
}(_triChart || {}));

//triChart Plugin Function
$.fn.triChart = function() {
    this.each(function() {
        _triChart.init($(this));
    });

    return this;
};

$(function() {
    $(".example").triChart();
});

/*#triChart

 Copyright (C) 2014, Tamir Feldman <tamir302@budsoft.co.il>

 ##Prerequisite

 Before using this plugin, please make sure that:

 * jQuery is loaded before it.
 * The style folder with the images is downloaded to your project.

 ##Usage

 Include  triChart.js in your application.

 ```html
 <script type="text/javascript" src="script/triChart.js"></script>
 ```

 Create an element in the DOM where you want the chart to appear, and give the `data-avg` and `data-val` any value between 0 to 100.


 <div class="example" data-avg="50" data-val="50">
 <!--This is where the component should draw-->
 </div>




 **Important!**  Make sure the element's position is set at `relative`.



 When the document is ready, just use the plugin on the element you have created.

 ```js
 $(function() {
 $(".example").triChart();
 });
 ```



 License
 ----

 Released under the terms of MIT License:

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 'Software'), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/
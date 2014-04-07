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

var skins;
(function (skins) {
    var BtnGreenLargeSkin = (function (_super) {
        __extends(BtnGreenLargeSkin, _super);
        function BtnGreenLargeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.labelDisplay_i()];
            this.__4_i();
            this.__5_i();
            this.__6_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__5", "", "before", "labelDisplay")
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "before", "labelDisplay")
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.AddItems("__6", "", "before", "labelDisplay")
                ])
            ];
        }
        var __egretProto__ = BtnGreenLargeSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return BtnGreenLargeSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["big_green_btn_nor_png", 0, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "x", "y"], ["big_green_btn_nor_png", 0, 0]);
            return t;
        };
        __egretProto__.labelDisplay_i = function () {
            var t = new egret.gui.Label();
            this.labelDisplay = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 25, "确定", "center", 0x000000, "middle", 178, 14, 23]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["big_green_btn_sel_png", 0, 0]);
            return t;
        };
        BtnGreenLargeSkin._skinParts = ["labelDisplay"];
        return BtnGreenLargeSkin;
    })(egret.gui.Skin);
    skins.BtnGreenLargeSkin = BtnGreenLargeSkin;
    BtnGreenLargeSkin.prototype.__class__ = "skins.BtnGreenLargeSkin";
})(skins || (skins = {}));
